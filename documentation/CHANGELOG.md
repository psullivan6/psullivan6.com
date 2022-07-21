# Changelog

## [`1d738cc`] - 2022-07-20

- Initialized project with Remix CLI

## [`7c51b00`] - 2022-07-20

- Added documentation to track progress (this Changelog) and TODOs
- Initialized this project in git with `git init`
- Archived the previous psullivan6.com GitHub repo as 2021-psullivan6.com
- Created a new psullivan6.com GitHub repo
- Linked the new psullivan6.com GitHub repo to Vercel and deployed (see https://psullivan6-com.vercel.app/)

## [`797e928`] - 2022-07-20

- Connected to Google Domains via Vercel's `A` and `CNAME` record suggestions
- Added my commonly used Prettier config file to enforce auto-formatting even though I have that set in VSCode already

## [`latest`] - 2022-07-21

- Moved the TODO.md document to an `.mdx` file and made it a route, so we can see it live on the site
- revised the main index.tsx route to link to the TODOs route and use pertinent site info rather than the boilerplate
- added a color experiment page to see all my 3-based hex code colors to choose from
  - opted for a different approach this time and did effectively 3 columns of 6 possible numbers and generated the permutations from that
  - added `lodash` and `polished` to display the color experiment
- revised the versioning logic to git commit hash only, since binding it to semver is tricky (this commit feels like a minor, whereas others felt like patches)

[`1d738cc`]: https://github.com/psullivan6/psullivan6.com/commit/1d738cc272c0484c2f709a38cdbed59d59107f4f
[`7c51b00`]: https://github.com/psullivan6/psullivan6.com/commit/7c51b00b8e0e50684999668bfb0841acde95ce04
[`797e928`]: https://github.com/psullivan6/psullivan6.com/commit/797e9286a119a2b87a554767e5ea5f177b5b10a8
[`latest`]: https://github.com/psullivan6/psullivan6.com
