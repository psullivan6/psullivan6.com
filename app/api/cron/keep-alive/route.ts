import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// Initialize Redis
const redis = Redis.fromEnv();

// Setup endpoint to handle cron job requests every Friday at 6:03am
export const GET = async (req: Request) => {
  if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // Optionally, you can also retrieve other information like the last time it was called
    const lastCalled = await redis.get('mcp_keep_alive_last_called');
    const lastCalledAt = lastCalled || 'Never';

    // Store the current timestamp as the last called time
    await redis.set('mcp_keep_alive_last_called', new Date().toISOString());

    // Return the count and last called time
    return new NextResponse(
      JSON.stringify({
        success: true,
        lastCalled: lastCalledAt,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Redis error:', error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Error interacting with Redis',
      }),
      { status: 500 }
    );
  }
};
