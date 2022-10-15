import React from 'react';
import { Image, StyleSheet } from 'react-native';

import ExampleContainer from './ExampleContainer';

const MaskedViewImageExample = () => (
  <ExampleContainer>
    <Image
      resizeMode="cover"
      source={{ uri: 'https://picsum.photos/100' }}
      style={styles.image}
    />
  </ExampleContainer>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default MaskedViewImageExample;
