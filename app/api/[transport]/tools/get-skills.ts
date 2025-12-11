import { getResourceContent } from '@/utilities/get-resource-content';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod/v4';

export const registerGetSkillsTool = (server: McpServer) => {
  server.registerTool(
    'get-technical-skills',
    {
      title: 'Get Skills Tool',
      description:
        "Tool to assist in retrieving Patrick's technical skills, including a list of technologies he's used.",
      inputSchema: z.object({}),
    },
    () => {
      return {
        content: [
          {
            type: 'text',
            text: getResourceContent({ filePath: 'technologies.mdx' }),
          },
        ],
      };
    }
  );
};
