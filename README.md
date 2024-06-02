# Requirements

* Implement the following screens: [Figma](https://www.figma.com/file/GQccaSiW6oFKzdCh6mmdGx/Sample-screens-for-dev-interview?type=design&node-id=1%3A4&mode=dev)
* IOS is the target for this exercise.
* Think about component reusability.
* UI interactions matter.

Extras:
* BottomTab navigation.
* Card control page.

Notes:
* Fork this project and share the link of the repository once you finish the excersie.

## Step 0: Project setup

Before running the project, install all dependencies:
```bash
# using npm
npm i --legacy-peer-deps

# OR using Yarn
yarn install
```

[Optional] - Update your packages to avoid vulnerabilities:
```bash
# using npm
npm audit fix --legacy-peer-deps

# OR using Yarn
yarn upgrade
```

Install the gems for the project, for this at the root excecute:
```bash
bundle install
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!


