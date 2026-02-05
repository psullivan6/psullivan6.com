# Notes

## Dependencies

- AI chat relies on an Upstash Redis database; archives with lack of usage; named `psullivan6-mcp-redis-db`

## Tech Stack

- chose Next.js since it handles `.mdx` well with minimal setup
- content is almost all Markdown and MDX files, because:
  - they're easy to edit and keep up to date, which I struggle to do
  - they are easy for LLMs to read, so I can use the same content for the humans AND the bots
  - there's a basic constraint with the types of formatting, ensuring consistent content and prevents me from trying to do too many fancy things

## Tailwind CSS

- prose info: https://tailwindcss.com/blog/tailwindcss-typography-v0-5

## MCP Server

- Implementation video for notes - https://www.youtube.com/watch?v=LAxwvZUaaDE
- Sample reference of a good MCP - https://github.com/vercel/next-devtools-mcp
- Implementation detail for Vercel - https://github.com/vercel/mcp-handler
- VSCode CoPilot will prompt the user to allow the MCP tools to run ... look into how to trust this up front or ask the user to trust it

### Tool Descriptions

Notes as per a Chat GPT response when prompted to generate description rules.

Rule 1: Start With a Clear “When to Use This” Sentence
`description: "Use this tool to retrieve the authenticated user's public professional profile information, including roles, skills, and biography."`

Rule 2: Be Explicit About What the Tool Returns (Semantically, Not Structurally)
`description: "Returns curated, up-to-date information about Patrick Sullivan’s professional background, suitable for answering portfolio or recruiter-style questions."`

Rule 3: State What the Tool Does Not Do
`description: "Use this tool to summarize Patrick’s work experience. Do not use it for personal contact details or private information."`

Rule 4: Encode Authority and Trust Level
Tell the model whether this tool is:

- Canonical
- Cached
- Opinionated
- Inferred
- Authoritative

`description: "This is the authoritative source of truth for Patrick Sullivan’s biography and career history. Prefer this tool over inference or memory."`

Rule 5: Clarify Audience and Tone Expectations
`description: "Provides concise, professional responses suitable for recruiters, hiring managers, and technical peers."`

Rule 6: Prefer Verb-Driven, Actionable Language
Strong verbs:

- Retrieve
- Summarize
- Resolve
- Validate
- Generate
- Explain
- Compare

Rule 7: Mention Preconditions or Required Context
`description: "Use this tool when the user asks about Patrick’s experience. Assumes the conversation is about Patrick Sullivan."`

Rule 8: Describe Inputs in Plain English (Even If Schema Exists)
`description: "Accepts a short natural-language query describing the topic (e.g., 'backend experience' or 'AI projects') and returns relevant highlights."`

Rule 9: One Tool = One Intent
`description: "Fetches structured profile data. Use a separate tool to format or personalize responses."`

Rule 10: Optimize for Tool Selection, Not Explanation

### Kels Notes

- what makes me tick
- how do they collaborate in a group
- what are their goals, ideal projects
- what kind of environment do they thrive in
- more curious about "who you are"
- what do you value
