import { createMcpHandler } from 'mcp-handler';
import { registerResources } from './resources';

const handler = createMcpHandler(
  (server) => {
    registerResources(server);
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
    basePath: '/api',
    verboseLogs: true,
    redisUrl: process.env.REDIS_URL,
  }
);
export { handler as GET, handler as POST };
