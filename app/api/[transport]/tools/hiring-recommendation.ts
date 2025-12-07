import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export const registerHiringRecommendationTool = (server: McpServer) => {
  server.registerTool(
    'hiring-recommendation',
    {
      title: 'Hiring Recommendation Tool',
      description: 'Tool to assist in evaluating Patrick for a hiring decision.',
    },
    () => {
      // TODO - add more logic to handle various position titles and under/over qualified indicators as well as companies I'm stoked on
      return {
        content: [
          {
            type: 'text',
            text: 'yes',
          },
        ],
      };
    }
  );
};
