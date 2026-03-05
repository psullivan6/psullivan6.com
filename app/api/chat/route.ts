import { getResourceContent } from '@/utilities/get-resource-content';
import { Ratelimit } from '@upstash/ratelimit';
import { convertToModelMessages, stepCountIs, streamText, UIMessage } from 'ai';
import { mcpClient } from './mcp-client';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(req: Request) {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    const ip = req.headers.get('x-forwarded-for');
    const ratelimit = new Ratelimit({
      redis,
      // rate limit to 5 requests per 10 seconds
      limiter: Ratelimit.slidingWindow(5, '10s'),
    });

    const { success, limit, reset, remaining } = await ratelimit.limit(`ratelimit_${ip}`);

    // TODO - this error message isn't sent to the client; why not?!?
    if (!success) {
      return new Response('You have reached your request limit. Please try again later.', {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        },
      });
    }
  }

  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: 'anthropic/claude-sonnet-4.5',
      tools: await mcpClient.tools(),
      messages: convertToModelMessages(messages),
      stopWhen: stepCountIs(6),
      system: getResourceContent({ filePath: 'mcp-system-prompt.md' }),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.log('SERVER ERROR', error);
    return Response.json({ error });
  }
}
