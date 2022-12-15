# Build a marketing site using Next.js

This app demonstrates how you can build a marketing site using Next.js on the Front End and the API will be powered by ButterCMS. Next.js is a React.js framework which will do Server Side Rendering for you. As a result, your site will have better SEO score.

<img src="https://user-images.githubusercontent.com/6391763/54627869-47b56500-4a9a-11e9-812e-ddb71b56f56e.png" alt="Preview">

## Important Notice
This project was created as an example use case of ButterCMS and will not be actively maintained. 

If you’re interested in exploring the best, most up-to-date way to integrate Butter into Next.js and React, you can check out the following resources:

### Starter Projects

The following turn-key starters are fully integrated with dynamic sample content from your ButterCMS account, including main menu, pages, blog posts, categories, and tags, all with a beautiful, custom theme with already-implemented search functionality. All of the included sample content is automatically created in your account dashboard when you sign up for a free trial of ButterCMS.
- [Next.js Starter](https://buttercms.com/starters/nextjs-starter-project/)
- [Angular Starter](https://buttercms.com/starters/angular-starter-project/)
- [React Starter](https://buttercms.com/starters/react-starter-project/)
- [Vue.js Starter](https://buttercms.com/starters/vuejs-starter-project/)
- Or see a list of all our [currently-maintained starters](https://buttercms.com/starters/). (Over a dozen and counting!)

### Other Resources
- Check out the [official ButterCMS Docs](https://buttercms.com/docs/)
- Check out the [official ButterCMS API docs](https://buttercms.com/docs/api/)

## Demo

Please check out the Vercel demo at https://buttercms-marketing-site-nextjs-react.orlyohreally.vercel.app/.

## Development

### Step 1. Create an account on [ButterCMS](https://buttercms.com/) and create content

Register on ButterCMS and get your Read API Token which could be found on home or settings pages. To run the project for your own account you need to create pages and collections in Butter which are used in the application:

-   Marketing page with slug `marketing-page` and [this](/images/data-structures/marketing-page.png) structure - data for sections of the marketing page
-   General data page with slug `general-data` and [this](/images/data-structures/general-data-page.png) structure - general company data i.e. logo and name
-   Contact form page with slug `contact-form` and [this](/images/data-structures/contact-form-page.png) structure - content for contact form
-   Main navigation links collection with slug `main-navigation-links` with [this](/images/data-structures/main-navigation-links-collection.png)
-   Social links collection with slug `social-links` with [this](/images/data-structures/social-links-collection.png) structure

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
