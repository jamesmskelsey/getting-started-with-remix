# What This Is

I learn best by doing and playing. I create "kitchen sink" apps when I am learning something new. They usually start
with the "getting started" page, and then I add my own thing, and play with it. And then throw in something else to see what
happens. They never go very far, but I learn a ton.

In this example, I'm following along with the remix getting-started project and after each section adding my own section.

They're having me build up the ability to view and add posts, and I'm following along by viewing and adding people.

Maybe I'll tie it in to firebase... because that'd be neat. And then maybe I'll deploy it. And then I'll probably get bored
and do something with maps and this remix thing... because man that sounds awesome.

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
