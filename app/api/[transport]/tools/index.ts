import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Tools
import { registerGreetingTool } from './greeting';

export const registerTools = (server: McpServer) => {
  registerGreetingTool(server);
};
