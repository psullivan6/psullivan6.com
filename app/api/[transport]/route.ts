import { getResourceContent } from '@/utilities/get-resource-content';
import { createMcpHandler } from 'mcp-handler';
import { registerResources } from './resources';
import { registerTools } from './tools';

const handler = createMcpHandler(
  (server) => {
    registerTools(server);
    registerResources(server);
  },
  {
    capabilities: {
      resources: {
        listChanged: true,
        subscribe: true,
      },
      tools: {
        listChanged: true,
      },
      logging: {},
    },
    serverInfo: {
      name: 'Patrick MCP',
      version: '1.1.0',
    },
    instructions: getResourceContent({ filePath: 'mcp-system-prompt.md' }),
  },
  {
    maxDuration: 90,
    basePath: '/api',
    verboseLogs: true,
    redisUrl: process.env.MCP_STORAGE_REDIS_URL,
  }
);
export { handler as GET, handler as POST };
