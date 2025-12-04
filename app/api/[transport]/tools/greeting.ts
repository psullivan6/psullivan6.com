import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod/v4';

export const registerGreetingTool = (server: McpServer) => {
  server.registerTool(
    'greeting',
    {
      title: 'Greeting Tool',
      description:
        "Simple greeting tool to outline the MCP's capabilities and offer helpful guidance",
      inputSchema: {
        name: z.string().describe('Name of person to greet'),
      },
      outputSchema: {
        salutation: z.string(),
        content: z.array(z.string()),
        suggestedFollowupTopics: z.array(z.string()),
      },
    },
    async ({ name }) => {
      const output = {
        salutation: `Hi ${name} 👋`,
        content: ['Thanks for using the Patrick MCP', 'Ask me about real Patrick.'],
        suggestedFollowupTopics: [
          'professional experience',
          'personal hobbies',
          'sports preferences',
          'biography',
        ],
      };

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(output),
          },
        ],
        structuredContent: output,
      };
    }
  );
};
