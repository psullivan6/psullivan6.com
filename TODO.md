- [ ] Finish the resume section
- [ ] Add an open-source / free analytics tool
- [ ] Add blog section and posts (format with mdx and code snippets)
- [ ] Add a "random" or "fun" tool to the MCP to just return a random fact or something like that
- [ ] Add a heading jump links nav
- [ ] Build an `/ai` page that is the prompt box on initial load, then full chat once prompt is sent
- [ ] Organize the route directories from the "has files to organize them" directories
- [ ] Implement prompt submission rate limiting
- [ ] https://nextjs.org/docs/app/guides/data-security
- [ ] Add notes that this portfolio site stack is HEAVILY reliant on vercel (Next.js, ai package), but I'm capable of building with other stacks, just choosing convenience for me to get the proof of concept shipped
- [ ] Keep an eye on `@ai-sdk/mcp` and update accordingly ... it's installed at a fixed version and is an early release
- [ ] Add a TL;DR tone where every section is just 1 sentence
- [ ] Add expand/collapse section for the older experience jobs to hide on initial load, then interaction to "open" them for reading
  - either collapse several into 1 button to expand all ... OR ...
  - add expand/collapse for each job and just show the company name and time spent there ... leaning towards first option

## AI Chat functionality

- [ ] Store last prompts in memory, use up arrow to retrieve them in order, just like terminal commands
- [ ] Ensure the mcp client closes when the user is done
- [ ] Enable known question and responses through fuzzy text reading or similar, so "Hey, what's up?" is a known greeting, so respond to it in a known way (ex: https://www.britannica.com/dictionary/eb/qa/10-other-ways-to-say-how-are-you)
- [ ] Change the prompt submit button to a stop icon when streaming data and add the abort logic to the server
- [ ] Add gibberish detection to the prompt and skip an API call and simply return an error with a path to retry if the user believes the prompt is real; include strings like "asdf " that will never pass
- [ ] remove the chat message storage logic, since it's just for testing
- [ ] expose the site preferences (light, dark, etc...) to the MCP ... ensure consumers using this MCP outside this site do not have access to these tools ... perhaps treat them as authenticated tools that my site's AI agent auths into
- [ ] add a get-all-experience / get-resume tool that lists all the experience in sequential order
