import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult, ResourceLink } from '@modelcontextprotocol/sdk/types.js';

export const registerListFilesTool = (server: McpServer) => {
  server.registerTool(
    'list-files',
    {
      title: 'List Available Resources as ResourceLinks',
      description: 'Returns a list of resource files as ResourceLinks',
    },
    async (): Promise<CallToolResult> => {
      const resourceLinks: ResourceLink[] = [
        {
          type: 'resource_link',
          uri: 'resource://biography',
          name: 'Biography Resource',
          mimeType: 'text/markdown',
          description: 'First example file for ResourceLink demonstration',
        },
      ];

      return {
        content: [
          {
            type: 'text',
            text: 'A list of available resource links:',
          },
          ...resourceLinks,
          {
            type: 'text',
            text: '\nYou can read any of these resources using their URI or accessing the resource in your MCP client interface.',
          },
        ],
      };
    }
  );
};
