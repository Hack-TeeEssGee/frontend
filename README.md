# Production

### Build Link

[kgpverse.chiragghosh.me](https://kgpverse.chiragghosh.me)

### Build Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/a3849a80-043a-46e5-b06b-5dbffe354e4b/deploy-status)](https://app.netlify.com/sites/kgpverse/deploys)

<br/>

# Development

### Build Link

[kgpverse-demo.netlify.app](https://kgpverse-demo.netlify.app)

### Build Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/8e4cf66f-2086-48bd-89bb-e07c855a37b1/deploy-status)](https://app.netlify.com/sites/kgpverse-demo/deploys)

<br/>

# Getting Started

In the project directory:

To install required packages, run `yarn`

To start development server, run `yarn start`

To install a package, run `yarn install package-name`

# Points to Remember

1. **Never ever** work in master branch. It is only for most stable production version.

2. **Never** work in dev branch. It is for kinda-stable development version.

3. **Always** work by creating a new branch of name template : `your-name/feature-or-bug`. For example, if you are rajiv and you have to work in footer, create branch `rajiv/footer`.

4. **Always** create PR to dev branch.

5. Please refrain from pushing to upstream after every commit. Only push after your work is done or there are significant changes made. Automatic deploy previews are made and build time is recorded. If updated frequently, we can finish up free build time in netlify.

6. We are using open-source icons by iconscout. Choose icons from [here](https://iconscout.com/unicons/explore/line). Check usage [here](https://www.npmjs.com/package/@iconscout/react-unicons).

7. Please write styling in relevant scss file. If confused ask. Refrain from using inline styling unless specifically needed by some package.
