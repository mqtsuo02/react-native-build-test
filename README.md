# react-native-build-test

[![Build Status](https://www.bitrise.io/app/e02bf0b2eeda7f65/status.svg?token=lCBK5xtBJnwrip9BxO1VHw&branch=master)](https://www.bitrise.io/app/e02bf0b2eeda7f65) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Description

**sample project using following framework/ librally/ tools**

### Frontend

* [react-native-cli](https://facebook.github.io/react-native/)
* [react-primitives](https://github.com/lelandrichardson/react-primitives)
* [Next.js](https://github.com/zeit/next.js/)
* [Prettier](https://github.com/prettier/prettier)
* [Bitrise](https://www.bitrise.io/)
* [Fabric (Clashlytics)](https://get.fabric.io/)

### Backend

* [express-graphql](https://github.com/graphql/express-graphql)
* [CircleCI](https://circleci.com/)
* [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/)

## Requirements

* Node.js
* react-native-cli
* Xcode
* Android Studio

It is necessary to prepare the build environment by referring to the [React Native - Getting Started](https://facebook.github.io/react-native/docs/getting-started.html).

## Usage

```
cd frontend
npm install

# Displayed by Web browser
npm run dev-next

# Displayed by iOS simulator
react-native run-ios

# Displayed by Android simulator
react-native run-android
```

Execution can be done from each IDE.

## Open project with IDE

* Xcode -> frontend/ios/ReactNativeBuildTest.xcodeproj
* Android Studio -> frontend/android/
