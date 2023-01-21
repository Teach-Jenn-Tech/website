[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

# Teach Jenn Tech Website

## Credits

- @mhyfritz for the @withastro template [astro-landing-page](https://github.com/mhyfritz/astro-landing-page)
- @kjaymiller for [vscode-add-conduct](https://github.com/Github-Community-Standards/vscode-add-conduct) & creating @Github-Community-Standards


## Features

- 💨 Tailwind CSS for styling
- 🎨 Themeable
  - CSS variables are defined in `src/styles/theme.css` and mapped to Tailwind classes (`tailwind.config.cjs`)
- 🌙 Dark mode
- 📱 Responsive (layout, images, typography)
- ♿ Accessible (as measured by https://web.dev/measure/)
- 🔎 SEO-enabled (as measured by https://web.dev/measure/)
- 🔗 Open Graph tags for social media sharing
- 💅 [Prettier](https://prettier.io/) setup for both [Astro](https://github.com/withastro/prettier-plugin-astro) and [Tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Install dependencies                               |
| `npm run dev`          | Start local dev server at `localhost:3000`         |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
| `npm run format`       | Format code with [Prettier](https://prettier.io/)  |
| `npm run clean`        | Remove `node_modules` and build output             |
| `npm install sharp`        | Fix [error   Cannot find package '@astrojs/image'](https://docs.astro.build/en/guides/integrations-guide/image/#installing-sharp-optional)            |