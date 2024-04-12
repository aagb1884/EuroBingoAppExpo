# Eurovision Bingo - App Version

### [React Native](https://reactnative.dev/) App built with [Expo Go](https://expo.dev/go)

In 2023, the week before Eurovision, I built the [first version of this app](https://github.com/aagb1884/eurovision_bingo_surge_redirect) and [hosted it on Surge](https://gist.github.com/ebectar/6b44cf75f63df629d2fe9e0e46bb1dec).

I then added an [updated version of the app](https://github.com/aagb1884/eurovision_bingo_testing), with [Continuous Integration testing](https://learn.cypress.io/advanced-cypress-concepts/running-cypress-in-ci) via Github Actions, and hosted it on my [portfolio site](https://andrewblair.co.uk/apps/eurovision-bingo).

## Deployment

You will need to have [Expo] installed, and for it to work you will also need [Node JS](https://nodejs.org/en/download), [Git](https://git-scm.com/) and (if you're on Mac or Linux) [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall). Clone this repo. You can then install Expo Go on a mobile device and test the app that way.

## Turning It Into a Mobile App

I have made web apps before but not added any to app stores. I wanted to do this and add to my experience as a developer. From what I'd read of React Native it made sense to use one of my React JS apps as a starting point, knowing some of the code would be reusable, and the most complete app I'd made with the widest commercial potential was my Eurovision Bingo app.

I learned the basics of React Native via the [Getting Started link](https://reactnative.dev/docs/environment-setup) on the homepage. It recommended I use Expo Go as I was new to mobile development, so I did.

[Expo Go documentation](https://docs.expo.dev/) is thorough, the sometimes you find instructions for one task that contains links to other instructions on particular aspects of the original instructions...and you find you have seven tabs open. 

The Expo Go app is downloadable onto phone or tablet devices so you can, assuming all your devices share a network, see what your app will look like on a device. It's worth having both Android and iOS devices available to use for this, as Expo Go apps proved quite tricky to see using Android Studio and xCode emulators.

Also worth noting: when using Expo Go some React Native dependencies don't seem to work, but there are Expo alternatives that do. 

While there are animation APIs available for Expo Go, it became clear I would have to alter what I had for the browser version of the app. The basic gameplay remains the same, but I was able to adapt things for a standalone app to make the screen less cluttered.

![IMG_8432](https://github.com/aagb1884/EuroBingoAppAndroid/assets/113289014/afae8ed8-eede-4b70-a68a-4b664faf6387)
