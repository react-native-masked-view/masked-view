# React Native MaskedView

[![Build Status][build-badge]][build]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![Lean Core Badge][lean-core-badge]][lean-core-issue]

React Native MaskedView for iOS and Android.

## Platforms Supported

- [x] iOS
- [x] Android

## Getting Started

```
yarn add @react-native-masked-view/masked-view
```

or

```
npm install --save @react-native-masked-view/masked-view
```

#### Using React Native >= 0.60

Linking the package manually is not required anymore with [Autolinking](https://github.com/react-native-masked-view/cli/blob/master/docs/autolinking.md).

- **iOS Platform:**

  `npx pod-install`

#### Using React Native < 0.60

You then need to link the native parts of the library for the platforms you are using. The easiest way to link the library is using the CLI tool by running this command from the root of your project:

```
react-native link @react-native-masked-view/masked-view
```

## Usage

Import the `MaskedView` component from `@react-native-masked-view/masked-view` and use it like so:

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

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
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold',
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

### `androidRenderingMode`

By default `hardware` rendering mode will be used for best performance, however if you need to animate your `maskElement` then you’ll need to switch to `software` to get your mask to update. This prop only affects Android.

| Type                   | Required | Default    |
| ---------------------- | -------- | ---------- |
| `software`, `hardware` | No       | `hardware` |

<!-- badges -->

[build-badge]: https://github.com/react-native-masked-view/masked-view/workflows/Build/badge.svg
[build]: https://github.com/react-native-masked-view/masked-view/actions
[version-badge]: https://img.shields.io/npm/v/@react-native-masked-view/masked-view.svg?style=flat-square
[package]: https://www.npmjs.com/package/@react-native-masked-view/masked-view
[license-badge]: https://img.shields.io/npm/l/@react-native-masked-view/masked-view.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[lean-core-badge]: https://img.shields.io/badge/Lean%20Core-Extracted-brightgreen.svg?style=flat-square
[lean-core-issue]: https://github.com/facebook/react-native/issues/23313
