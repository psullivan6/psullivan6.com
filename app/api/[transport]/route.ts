import { createMcpHandler } from 'mcp-handler';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerResources } from './resources';
import { registerTools } from './tools';

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const instructionsContent = readFileSync(resolve(currentDirectory, './instructions.md'), 'utf-8');

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
      version: '1.0.0',
    },
    instructions: instructionsContent,
  },
  {
    maxDuration: 90,
    basePath: '/api',
    verboseLogs: true,
    redisUrl: process.env.REDIS_URL,
  }
);
export { handler as GET, handler as POST };
