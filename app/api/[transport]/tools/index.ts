import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Tools
import { registerGetExperienceTool } from './get-experience';
import { registerGetHiringRecommendationTool } from './get-hiring-recommendation';
import { registerGetTechnicalSkillsTool } from './get-technical-skills';
import { registerGreetingTool } from './greeting';
import { registerListFilesTool } from './list-files';

export const registerTools = (server: McpServer) => {
  registerGreetingTool(server);
  registerListFilesTool(server);
  registerGetHiringRecommendationTool(server);
  registerGetTechnicalSkillsTool(server);
  registerGetExperienceTool(server);
};
