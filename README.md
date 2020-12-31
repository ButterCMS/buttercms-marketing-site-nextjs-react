# Build a marketing site using Next.js

This app demonstrates how you can build a marketing site using Next.js on the Front End and the API will be powered by ButterCMS. Next.js is a React.js framework which will do Server Side Rendering for you. As a result, your site will have better SEO score.

<img src="https://user-images.githubusercontent.com/6391763/54627869-47b56500-4a9a-11e9-812e-ddb71b56f56e.png" alt="Preview">

## Demo

Please check out the ZEIT demo at https://testing-nextjs-apps.ghoshnirmalya.now.sh/.

## Development

### Step 1. Create an account on [ButterCMS](https://buttercms.com/)

Register on ButterCMS and get your Read API Token which could be found on home or settings pages

### Step 2. Clone and cd into the project

```sh
git clone https://github.com/ButterCMS/buttercms-marketing-site-nextjs-react
cd buttercms-marketing-site-nextjs-react
```

### Step 3. Set up environment variable

Copy `.env.sample` file to `.env` file and set `BUTTER_CMS_API_KEY` as your Read Api Token

### Step 4. Development

#### Running the project

```sh
yarn install
yarn dev
```

or

```sh
npm install
npm run dev
```

#### Building the app

```sh
yarn build
```

or

```sh
npm run build
```

## Built With

-   [Blue](https://cruip.com/blue/) - Landing page template from [Cruip](https://cruip.com/).
-   [Next.js](https://nextjs.org/) - The React.js framework for building SSR web apps.
-   [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
-   [Screely](https://www.screely.com/) - Instantly turn your screenshot into a beautiful design mockup

## Deploying

1. Create a Vercel account at https://vercel.com/signup and download [the CLI](https://vercel.com/download)
2. Add the API key as a secret `vercel secrets add butter-cms-api-key "YOUR_API_KEY"`
3. Run `vercel` at the project root

## License

MIT Licensed. Copyright (c) ButterCMS 2019.
