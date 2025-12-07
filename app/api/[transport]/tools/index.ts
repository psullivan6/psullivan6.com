import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Tools
import { registerGreetingTool } from './greeting';
import { registerHiringRecommendationTool } from './hiring-recommendation';
import { registerListFilesTool } from './list-files';

export const registerTools = (server: McpServer) => {
  registerGreetingTool(server);
  registerListFilesTool(server);
  registerHiringRecommendationTool(server);
};
