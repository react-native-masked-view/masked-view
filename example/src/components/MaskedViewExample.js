import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../colors';
import ExampleContainer from './ExampleContainer';

const MaskedViewExample = () => (
  <ExampleContainer>
    <View style={styles.colorsView}>
      <View style={styles.color1} />
      <View style={styles.color2} />
      <View style={styles.color3} />
      <View style={styles.color4} />
    </View>
  </ExampleContainer>
);

const styles = StyleSheet.create({
  colorsView: {
    flex: 1,
    flexDirection: 'row',
  },
  color1: {
    flex: 1,
    backgroundColor: Colors.americanBlue,
  },
  color2: {
    flex: 1,
    backgroundColor: Colors.khaki,
  },
  color3: {
    flex: 1,
    backgroundColor: Colors.bittersweet,
  },
  color4: {
    flex: 1,
    backgroundColor: Colors.chineseWhite,
  },
});

export default MaskedViewExample;
