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
    },
    async ({ name }) => {
      return {
        content: [
          {
            type: 'text',
            text: `Hi ${name} 👋, thanks for using the Patrick MCP. Ask me about real Patrick, including his professional experience, personal hobbies, and more.`,
          },
        ],
      };
    }
  );
};
