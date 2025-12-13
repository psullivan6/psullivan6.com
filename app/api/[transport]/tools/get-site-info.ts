import { getResourceContent } from '@/utilities/get-resource-content';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod/v4';

export const registerGetSiteInfoTool = (server: McpServer) => {
  server.registerTool(
    'get-site-info',
    {
      title: 'Get Website Into Tool',
      description:
        // 'Tool to assist in retrieving details about this psullivan6.com website, including tech stack, ideas, plans, etc...',
        'Use this tool to retrieve details about this psullivan6.com website, including tech stack, ideas, and future plans.',
      inputSchema: z.object({}),
    },
    () => {
      return {
        content: [
          {
            type: 'text',
            text: getResourceContent({ filePath: 'site-info/site-info.mdx' }),
          },
        ],
      };
    }
  );
};
