import { getResourceContent } from '@/utilities/get-resource-content';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod/v4';

export const registerGetInterviewTool = (server: McpServer) => {
  server.registerTool(
    'get-interview',
    {
      title: 'Get Interview Tool',
      description:
        'Use this tool to answer deep questions about personal character, qualities, or differentiating factors. Returns a request for the user to schedule an interview with Patrick.',
      inputSchema: z.object({}),
    },
    () => {
      return {
        content: [
          {
            type: 'text',
            text: getResourceContent({ filePath: 'tool-interview-response.md' }),
          },
        ],
      };
    }
  );
};
