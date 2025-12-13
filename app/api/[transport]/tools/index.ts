import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Tools
import { registerGetExperienceTool } from './get-experience';
import { registerGetHiringRecommendationTool } from './get-hiring-recommendation';
import { registerGetResumeTool } from './get-resume';
import { registerGetSiteInfoTool } from './get-site-info';
import { registerGetSkillsTool } from './get-skills';
import { registerGreetingTool } from './greeting';
import { registerListFilesTool } from './list-files';

export const registerTools = (server: McpServer) => {
  registerGreetingTool(server);
  registerListFilesTool(server);
  registerGetHiringRecommendationTool(server);
  registerGetSkillsTool(server);
  registerGetExperienceTool(server);
  registerGetResumeTool(server);
  registerGetSiteInfoTool(server);
};
