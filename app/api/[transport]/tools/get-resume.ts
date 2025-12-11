import { getResourceContent } from '@/utilities/get-resource-content';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod/v4';
import { companyNameMap } from './_utilities';

export const registerGetResumeTool = (server: McpServer) => {
  server.registerTool(
    'get-resume',
    {
      title: 'Get Resume Tool',
      description:
        "Tool to assist in retrieving Patrick's resume content, including bio, experience, and education.",
      inputSchema: z.object({}),
    },
    () => {
      const bioContent = getResourceContent({ filePath: 'bio.mdx' });
      const experienceContent = Object.keys(companyNameMap)
        .map((companyName) => getResourceContent({ filePath: `experience/${companyName}.mdx` }))
        .join('\n');
      const educationContent = getResourceContent({ filePath: 'education.mdx' });

      return {
        content: [
          {
            type: 'text',
            text: `${bioContent}\n\n${experienceContent}\n\n${educationContent}`,
          },
        ],
      };
    }
  );
};
