import { createMcpHandler } from 'mcp-handler';
import { registerResources } from './resources';

const handler = createMcpHandler(
  async (server) => {
    registerResources(server);

    await server.sendLoggingMessage({
      level: 'debug',
      data: `Started the MCP SERVER`,
    });
  },
  {
    capabilities: {
      resources: {
        listChanged: true,
        subscribe: true,
      },
      logging: {},
    },
  },
  {
    maxDuration: 90,
    basePath: '/api/mcp',
    verboseLogs: true,
    redisUrl: process.env.REDIS_URL,
  }
);
export { handler as GET, handler as POST };
