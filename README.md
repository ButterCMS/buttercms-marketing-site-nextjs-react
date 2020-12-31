# Build a marketing site using Next.js

This app demonstrates how you can build a marketing site using Next.js on the Front End and the API will be powered by ButterCMS. Next.js is a React.js framework which will do Server Side Rendering for you. As a result, your site will have better SEO score.

<img src="https://user-images.githubusercontent.com/6391763/54627869-47b56500-4a9a-11e9-812e-ddb71b56f56e.png" alt="Preview">

## Demo

Please check out the ZEIT demo at https://testing-nextjs-apps.ghoshnirmalya.now.sh/.

## Development

```sh
$ git clone https://github.com/ButterCMS/buttercms-marketing-site-nextjs-react
$ cd buttercms-marketing-site-nextjs-react
$ yarn install
```

If you prefer `npm`, you can do `npm install` instead of `yarn install`.

#### Running the app

```sh
$ yarn dev
```

If you prefer `npm`, you can do `npm run dev` instead of `yarn dev`.

#### Building the app

```sh
$ yarn build
```

If you prefer `npm`, you can do `npm run build` instead of `yarn build`.

#### Exporting the app

```sh
$ yarn export
```

If you prefer `npm`, you can do `npm run export` instead of `yarn export`.

## Built With

-   [Blue](https://cruip.com/blue/) - Landing page template from [Cruip](https://cruip.com/).
-   [Next.js](https://nextjs.org/) - The React.js framework for building SSR web apps.
-   [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
-   [Screely](https://www.screely.com/) - Instantly turn your screenshot into a beautiful design mockup

## Deploying

1. Create a ZEIT account at https://zeit.co/signup and download [the CLI](https://zeit.co/download)
2. Add the API key as a secret `now secrets add butter-cms-api-key "YOUR_API_KEY"`
3. Run `now` at the project root

## License

MIT Licensed. Copyright (c) ButterCMS 2019.
