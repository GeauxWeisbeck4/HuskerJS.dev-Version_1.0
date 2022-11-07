# 🌽 HuskerJS.dev 

<img src="lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

**HuskerJS.dev** is a sports web development platform that helps creators get started with their dream sports project. We have more than one way we can help you out!

We offer free templates and resources as well as paid resources and I offer best in class sports web development services and data analytics and visualization.

## Features

- ✅ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)).
- ✅ Supports **Dark mode**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed** ([@astrojs/rss](https://docs.astro.build/en/guides/rss/)).
- ✅ **Image optimization** ([@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/)).
- ✅ Generation of **project sitemap** based on your routes ([@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- ✅ **Open Graph tags** for social media sharing
- ✅ **Fonts optimization** at build time ([subfont](https://www.npmjs.com/package/subfont)).
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports

<br>

<img src="./screenshot.png" alt="AstroWind Theme Screenshot">

[Live demo](https://huskerjs.dev/) 

<br>

## Project Structure

Here is a generic layout for the HuskerJS.dev website. Sites will differ based on tech stack and the team that they are hosting.

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── data/
|   |   └── posts/
|   |       ├── post-slug-1.md
|   |       └── ...
│   ├── components/
│   │   ├── core/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── blog/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── index.astro
|   |   ├── 404.astro
|   |   └-- rss.xml.js
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit HuskerJS.dev on CodeSandbox]



<br>

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

<br>

## Deploy

### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:


### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:


<br>

## Roadmap v1.0

- *Project*:
  - **(DONE)** Reduce the complexity in the components folder and simplify the other folders to make it very easy to use.
  - Create simple and clear strategy to get template updates
  - Move specific configurations to a specialized file
  - Fix some bugs with prettier
  - Make the use of images clean and intuitive
- *SEO*:
  - **(DONE)** Add support to easily manage SEO meta-tags (title, description, canonical, social sharing, ...)
- *Blog*:
  - **(DONE)** Support to Fast and SEO friendly blog
  - Improve blog design
  - Add support for categories and tags.
  - Create component or utilities for latest posts
  - Create component or utilities for related posts
  - Add more *shortcodes* or *embed* functions to posts in Markdown: (eg video, tweet...)
- *More widgets*:
  - ~~Add more Tailwind components useful for most scenarios (Features, Contact, Call to Actions, Content, FAQs ...)~~
  - Create external library or place with useful Tailwind components
- *More Examples*: Add commonly used example pages (Ex: About, Terms, Services...)
- *Documentation*: Create detailed documentation with best practices and redesign tips

<br>

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request. 
That would be very useful for all of us and we would be happy to listen and take action.

## License

**HuskerJS.dev** is licensed under the MIT license — see the [LICENSE](https://github.com/onwidget/astrowind/blob/main/LICENSE.md) file for details.
