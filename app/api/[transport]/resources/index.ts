import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Resources
import { registerBiographyResource } from './bio';

export const registerResources = (server: McpServer) => {
  registerBiographyResource(server);
};
