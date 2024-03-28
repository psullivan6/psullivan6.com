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

## [`2b2841d`] - 2022-07-21

- Moved the TODO.md document to an `.mdx` file and made it a route, so we can see it live on the site
- revised the main index.tsx route to link to the TODOs route and use pertinent site info rather than the boilerplate
- added a color experiment page to see all my 3-based hex code colors to choose from
  - opted for a different approach this time and did effectively 3 columns of 6 possible numbers and generated the permutations from that
  - added `lodash` and `polished` to display the color experiment
- revised the versioning logic to git commit hash only, since binding it to semver is tricky (this commit feels like a minor, whereas others felt like patches)

## [`9d1d91d`] - 2022-07-22

- added color experiment pages
  - added logic to iterate over all "3-base" hex colors (colors using `0, 3, 6, 9, C, F`)
  - added logic to the automatically generated color experiment page to manually categorize the colors (deltaE, etc... logic wasn't working well)
  - added a manual colors experiment page to display the categorized colors
- added a dark-mode / light-mode SVG favicon via the `prefers-color-scheme` media query
- added start to a Logo experiment page with some custom CSS

## [`latest`] - 2024-03-27

- revised the build system to use the latest version of Remix, which includes vite
  - revised the routing based on the updated requirements
- added a basic Navigation component

[`1d738cc`]: https://github.com/psullivan6/psullivan6.com/commit/1d738cc272c0484c2f709a38cdbed59d59107f4f
[`7c51b00`]: https://github.com/psullivan6/psullivan6.com/commit/7c51b00b8e0e50684999668bfb0841acde95ce04
[`797e928`]: https://github.com/psullivan6/psullivan6.com/commit/797e9286a119a2b87a554767e5ea5f177b5b10a8
[`2b2841d`]: https://github.com/psullivan6/psullivan6.com/commit/2b2841d0dee8290cc77399f2b34ad2336217e532
[`9d1d91d`]: https://github.com/psullivan6/psullivan6.com/commit/9d1d91dea8a260af9c39ddc5a02b058a73366a87
[`latest`]: https://github.com/psullivan6/psullivan6.com
