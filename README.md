# bertolotti.dev

Personal site of Giorgio Bertolotti, freelance mobile and frontend developer.

Built with [Astro](https://astro.build) and Tailwind CSS v4, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

```sh
nvm use        # Node 22 (see .nvmrc)
npm install
npm run dev    # http://localhost:4321
npm run build  # static output in dist/
```

All copy lives in `src/data/site.ts`. Sections are in `src/components/sections/`.
