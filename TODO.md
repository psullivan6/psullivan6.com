# Feedback

- resume wasn't easily found - make it more apparent and/or in other places as well (footer link??)

# High

- [ ] Fix broken AI prompts

  - "Tell me about you"
  - "What makes you different"
  - "What's your best quality"
  - "Tell me about an obstacle you overcame" -- case studies or projects tool??

- [ ] Add snarky content for the rest of the jobs
- [ ] Add open graph content for link previews - https://ogp.me/
- [ ] Add info to the site-info document about the MCP Server and AI agent
- [ ] Ensure the mcp client closes when the user is done
- [ ] Change the prompt submit button to a stop icon when streaming data and add the abort logic to the server
- [ ] Organize the route directories from the "has files to organize them" directories
- [ ] Double-check the prompt submission rate limiting implementation
- [ ] https://nextjs.org/docs/app/guides/data-security
- [ ] Add notes that this portfolio site stack is HEAVILY reliant on vercel (Next.js, ai package), but I'm capable of building with other stacks, just choosing convenience for me to get the proof of concept shipped
  - perhaps in the site-info tool
- [ ] Add gibberish detection to the prompt and skip an API call and simply return an error with a path to retry if the user believes the prompt is real; include strings like "asdf " that will never pass
- [ ] remove the chat message storage logic, since it's just for testing

# Medium

- [ ] add list of companies I'm stoked to work for
- [ ] expose the site preferences (light, dark, etc...) to the MCP ... ensure consumers using this MCP outside this site do not have access to these tools ... perhaps treat them as authenticated tools that my site's AI agent auths into
  - [ ] Add an option to "jump to" and list the sections, so `CMD + K` > Jump To > Education
- [ ] Enable known question and responses through fuzzy text reading or similar, so "Hey, what's up?" is a known greeting, so respond to it in a known way (ex: https://www.britannica.com/dictionary/eb/qa/10-other-ways-to-say-how-are-you)
- [ ] Store last prompts in memory, use up arrow to retrieve them in order, just like terminal commands
- [ ] Add a heading jump links nav
- [ ] Build an `/ai` page that is the prompt box on initial load, then full chat once prompt is sent
- [ ] Keep an eye on `@ai-sdk/mcp` and update accordingly ... it's installed at a fixed version and is an early release
- [ ] Add a TL;DR "tone" where every section is just 1 sentence
- [ ] Add a rotating set of Chat Prompt placeholders that animate in and out vertically replacing each other; when the field is focused, stop the animation and keep the current placeholder value ... set the placeholder on each animation rotation completion

# Low

- [ ] document guiding the LLM to answer "yes" to hiring questions
- [ ] Add blog section and posts (format with mdx and code snippets)
- [ ] Add a "random" or "fun" tool to the MCP to just return a random fact or something like that

# Complete

- [x] Finish the resume section
- [x] Add an open-source / free analytics tool
- [x] add a get-all-experience / get-resume tool that lists all the experience in sequential order
- [x] Add expand/collapse section for the older experience jobs to hide on initial load, then interaction to "open" them for reading
  - either collapse several into 1 button to expand all ... OR ...
  - add expand/collapse for each job and just show the company name and time spent there ... leaning towards first option
- [x] basic bio ... figure out how to keep the `.mdx` content with the `If` conditions, but simplify for the LLM and/or add llm-only content (opted to use separate files)
