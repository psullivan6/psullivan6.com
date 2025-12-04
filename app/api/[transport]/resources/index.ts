import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Resources
import { registerGreetingResource } from './greeting';

export const registerResources = (server: McpServer) => {
  registerGreetingResource(server);
};
