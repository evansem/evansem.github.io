# evansem.github.io

Personal site built as a git commit graph: the page is a `git log --graph`, and each side project is a feature branch that forks off main and merges back as you scroll.

Built with Next.js (static export), React and Framer Motion.

## Develop

Requires Node.js 22.18 or later (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/, formatted for readability
npm test         # unit tests (Node's built-in test runner)
npm run check    # type-check, lint, formatting check and tests
npm run format   # apply Prettier formatting
```

## Customise

All copy lives in `src/content/`, one file per topic, so updating the site never means touching components:

| File                | What it controls                                                    |
| ------------------- | ------------------------------------------------------------------- |
| `profile.ts`        | Name, role, tagline, contact links, about paragraphs and navigation |
| `projects.ts`       | Side projects shown as feature branches, in order                   |
| `certifications.ts` | Certifications with badge images and verification links             |
| `sections.ts`       | Section headings, commit messages and footer text                   |
| `easter-eggs.ts`    | Shell replies, force-push animation, console note and 404 page      |
| `types.ts`          | The shape of each entry, with notes on every field                  |

Colours, spacing and fonts are CSS custom properties at the top of `src/app/globals.css`. Each project and certification also takes its own `accent` colour.

## Project structure

```
src/
  app/                  Next.js entry points: layout, home page, 404 page and global styles
  content/              Editable copy (see above)
  components/
    graph/              The commit graph: main line, commits, hashes and project branches
    sections/           One component per section of the home page
    layout/             Header, footer and the uptime counter
    easter-eggs/        Hidden shell, Konami code, force push and console greeting
    Backdrop.tsx        Animated canvas of drifting commits behind the page
    Toast.tsx           Small status messages
  lib/                  Framework-agnostic helpers and hooks
scripts/                Post-build formatting of the static export
```

After each build, `scripts/format-build-output.mjs` formats the generated HTML, CSS and JavaScript with a
120-column limit. HTML is only re-indented inside tags, so the text React hydrates is byte-for-byte unchanged.

## Deploy

GitHub Pages serves this repo from the root of `main`. On every push to `main`, `.github/workflows/deploy.yml` runs the checks, builds the static export and commits it to the repo root as a `Publish site build` commit, which Pages then serves. The generated files are listed in `.pages-manifest` and replaced on each publish; don't edit them by hand. Pull requests only run the checks and build.

## Easter eggs

- Press `` ` `` for a shell (`help`, `ls`, `cat justeg`, `sudo hire-me`, `git push --force`, ...)
- Konami code
- Click any commit hash
- Open the dev tools console
- Visit a page that doesn't exist

The background is a canvas of slowly drifting commits (`src/components/Backdrop.tsx`). It runs at ~30fps, pauses in hidden tabs and renders a single still frame for visitors who prefer reduced motion.
