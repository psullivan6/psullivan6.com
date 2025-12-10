import { experimental_createMCPClient as createMCPClient } from '@ai-sdk/mcp';

export const mcpClient = await createMCPClient({
  transport: {
    type: 'http',

    // TODO - figure out how to call internally, since this is all the same server basically
    url:
      process.env.APP_ENV === 'local'
        ? 'http://localhost:3000/api/mcp'
        : 'https://psullivan6.com/api/mcp',
  },
});
