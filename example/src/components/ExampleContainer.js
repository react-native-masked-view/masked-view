import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

import Colors from '../colors';

const ExampleContainer = ({ children }) => (
  <MaskedView
    style={styles.maskedView}
    maskElement={
      <View style={styles.maskElementView}>
        <Text style={styles.maskElementText}>Basic Mask</Text>
      </View>
    }
  >
    {/* Shows behind the mask, you can put anything here, such as an image */}
    {children}
  </MaskedView>
);

const styles = StyleSheet.create({
  maskedView: {
    flex: 1,
  },
  maskElementView: {
    // Transparent background because mask is based off alpha channel.
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  maskElementText: {
    color: Colors.black,
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default ExampleContainer;
