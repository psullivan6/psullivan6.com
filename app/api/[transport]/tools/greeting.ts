import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod/v4';

export const registerGreetingTool = (server: McpServer) => {
  server.registerTool(
    'greeting',
    {
      title: 'Greeting Tool',
      description:
        "Use this tool to greet the user, for instance on their first prompt. Use this tool if the user prompts 'hello,' 'hi,' or any other simple greeting. This tool returns a simple greeting, which outlines the MCP's capabilities and offers helpful guidance",
      inputSchema: {
        name: z.string().optional().describe('Name of person to greet'),
      },
      outputSchema: {
        salutation: z.string(),
        content: z.array(z.string()),
        suggestedFollowupTopics: z.array(z.string()),
      },
    },
    async ({ name }) => {
      const output = {
        salutation: name ? `Hi ${name} 👋` : `Hi 👋`,
        content: ["I'm Patrick AI, powered by the Patrick MCP", 'Ask me about real Patrick.'],
        suggestedFollowupTopics: [
          'professional experience',
          'personal hobbies',
          'biography',
          'list-files',
          'list-tools',
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
