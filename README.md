# Real World Vue3

This is a static web app built with vue3, example from VueMastery.
P.S. This app uses Client-Side routing using History Mode turned on, so you'll need to configure your server in order to redirect all routes to `index.html`.

## Hosting as a static app
You can host this app as a static web pages on Netlify or Vercel or Render, all you need to do is to configure the server to handle redirect all routes to `index.html` page. In [Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps) you'll need to created and configure this file: `public/_redirects` to do that.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
Notes:
- Don't forget to run `json-server db.json` before running the app.
- You must have installed `json-server` using `npm` globally.
- This will serve `db.json` file on `http://localhost:3000` locally into your machine.

### Compiles and minifies for production
```
npm run build
```
P.S. This will generate `dist` directory which will be used to host your app.

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Source: https://www.vuemastery.com/courses/real-world-vue3
