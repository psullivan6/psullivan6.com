import { getResourceContent } from '@/utilities/get-resource-content';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod/v4';

const companyNameMap = {
  lowes: "Lowe's",
  union: 'Union',
  struck: 'Struck',
  'register-guard': 'The Register-Guard',
  'pac-12': 'Pac-12 Conference',
  'university-of-oregon': 'University of Oregon',
} as const;

export const registerGetExperienceTool = (server: McpServer) => {
  server.registerTool(
    'get-experience',
    {
      title: 'Get Professional Experience Tool',
      description:
        "Tool to assist in retrieving Patrick's professional experience by company, including details about each role and specific job responsibilities.",
      inputSchema: {
        companyName: z.enum(Object.keys(companyNameMap)).describe('kebab-case company name'),
      },
      outputSchema: {
        companyName: z
          .enum(Object.values(companyNameMap))
          .describe('Name of company Patrick worked for'),
        // TODO - implement these fields when they can be coerced from the MDX or pulled from metadata/frontmatter
        // yearsWorked: z.number(),
        // roles: z.array(z.string()),
        resumeContent: z.string(),
      },
    },
    ({ companyName }) => {
      let resumeContent;
      try {
        resumeContent = getResourceContent({ filePath: `experience/${companyName}.mdx` });
      } catch (e) {
        resumeContent = 'Experience content not found.';
      }

      const output = {
        companyName: companyNameMap[companyName as keyof typeof companyNameMap] ?? '',
        resumeContent,
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
