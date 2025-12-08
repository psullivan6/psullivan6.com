import { getResourceContent } from '@/utilities/get-resource-content';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export const registerBiographyResource = (server: McpServer) => {
  server.registerResource(
    'biography',
    'resource://biography',
    {
      title: 'Biography',
      description:
        'Biographical information about Patrick Sullivan, including a professional summary and hobbies. Reference when asking any questions about Patrick Sullivan.',
      mimeType: 'text/markdown',
    },
    async (uri) => {
      const resourceContent = getResourceContent({ filePath: 'bio.mdx' });
      return {
        contents: [
          {
            uri: uri.href,
            text: resourceContent,
          },
        ],
      };
    }
  );
};
