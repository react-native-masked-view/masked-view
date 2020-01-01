# React Native MaskedView

[![Build Status][build-badge]][build]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![Lean Core Badge][lean-core-badge]][lean-core-issue]

React Native MaskedView for iOS and Android.

## Platforms Supported

- [x] iOS
- [x] Android

_Note: React Native MaskedView is not currently supported by Expo unless you "eject"._

## Getting Started

```
$ yarn add @react-native-community/masked-view
```

or

```
$ npm install --save @react-native-community/masked-view
```

#### Using React Native >= 0.60

Linking the package manually is not required anymore with [Autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).

- **iOS Platform:**

  `$ cd ios && pod install`

#### Using React Native < 0.60

You then need to link the native parts of the library for the platforms you are using. The easiest way to link the library is using the CLI tool by running this command from the root of your project:

```
$ react-native link @react-native-community/masked-view
```

## Usage

Import the `MaskedView` component from `@react-native-community/masked-view` and use it like so:

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';

export default class App extends React.Component {
  render() {
    return (
      <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              Basic Mask
            </Text>
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
      </MaskedView>
    );
  }
}
```

The following image demonstrates that you can put almost anything behind the mask. The three examples shown are masked `<View>`, `<Text>`, and `<Image>`.

<p align="center"><img src="img/example.png" width="200"></img></p>

### Props

- [View props...](https://github.com/facebook/react-native-website/blob/master/docs/view.md#props)

* [`maskElement`](#maskelement)

# Reference

## Props

### `maskElement`

| Type    | Required |
| ------- | -------- |
| element | Yes      |

<!-- badges -->

[build-badge]: https://img.shields.io/circleci/project/github/react-native-community/react-native-masked-view/master.svg?style=flat-square
[build]: https://circleci.com/gh/react-native-community/react-native-masked-view
[version-badge]: https://img.shields.io/npm/v/@react-native-community/masked-view.svg?style=flat-square
[package]: https://www.npmjs.com/package/@react-native-community/masked-view
[license-badge]: https://img.shields.io/npm/l/@react-native-community/masked-view.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[lean-core-badge]: https://img.shields.io/badge/Lean%20Core-Extracted-brightgreen.svg?style=flat-square
[lean-core-issue]: https://github.com/facebook/react-native/issues/23313