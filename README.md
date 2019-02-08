# React Native MaskedView
React Native MaskedView for iOS.

## Platforms Supported

- [x] iOS
- [ ] Android

_Note: React Native MaskedView is not currently supported by Expo unless you "eject"._

## Getting Started

```
$ yarn add react-native-masked-view
$ react-native link react-native-masked-view
```

## Usage

Import the `MaskedView` component from `react-native-masked-view` and use it like so:

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from 'react-native-masked-view';

export default class App extends React.Component {
  render() {
    return (
      <MaskedView
        style={{flex: 1, flexDirection: 'row', height: '100%'}}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Basic Mask
            </Text>
          </View>
        }>
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}} />
        <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
        <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
        <View style={{flex: 1, height: '100%', backgroundColor: '#e1e1e1'}} />
      </MaskedView>
    );
  }
}
```
