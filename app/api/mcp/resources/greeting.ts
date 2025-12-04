import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export const registerGreetingResource = (server: McpServer) => {
  server.registerResource(
    'greeting',
    'resource://greeting',
    {
      title: 'Greeting',
      description: "Simple greeting to outline the MCP's capabilities and offer helpful guidance",
      mimeType: 'text/plain',
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          text: "Hai there 👋, I'm Patrick as a bot. Ask me about real Patrick, including his professional experience, personal hobbies, and more.",
        },
      ],
    })
  );
};
