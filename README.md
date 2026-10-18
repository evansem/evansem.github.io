# evansem.github.io

Personal site built as a git commit graph: the page is a `git log --graph`, and each side project is a feature branch that forks off main and merges back as you scroll.

## Develop

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

All copy lives in `src/content/site.ts`. Put your CV at `public/cv.pdf` and set `profile.cv` to `"/cv.pdf"`; CV links stay hidden until then.

## Deploy

`.github/workflows/deploy.yml` builds and publishes `out/` on every push to `main`. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** once.

## Easter eggs

- Press `` ` `` for a shell (`help`, `ls`, `cat justeg`, `sudo hire-me`, `git push --force`, ...)
- Konami code
- Click any commit hash
- Open the dev tools console
- Visit a page that doesn't exist

The background is a canvas of slowly drifting commits (`src/components/Backdrop.tsx`). It runs at ~30fps, pauses in hidden tabs and renders a single still frame for visitors who prefer reduced motion.
