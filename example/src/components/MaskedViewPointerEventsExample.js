import React from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Colors from '../colors';
import ExampleContainer from './ExampleContainer';

const MaskedViewPointerEventsExample = () => {
  const [pointerEvents, setPointerEvents] = React.useState('auto');
  const handleButtonClick = React.useCallback(() => {
    console.log('CLICKED');
  }, []);
  const toggleMaskedViewPointerEventsProp = React.useCallback(() => {
    setPointerEvents(prev => prev === 'none' ? 'auto' : 'none');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Pressable onPress={handleButtonClick} style={styles.button}>
          <Text style={styles.buttonText}>{pointerEvents === 'none' ? 'I can be clicked' : 'You cannot click me'}</Text>
        </Pressable>
        <ExampleContainer style={styles.maskedView} pointerEvents={pointerEvents}>
          <View style={styles.colorsView}>
            <View style={styles.color1} />
            <View style={styles.color2} />
            <View style={styles.color3} />
            <View style={styles.color4} />
          </View>
        </ExampleContainer>
      </View>
      <Button
        onPress={toggleMaskedViewPointerEventsProp}
        title={pointerEvents === 'none' ? 'Block touches under masked view' : 'Unblock touches under masked view'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
  },
  buttonText: {
    color: Colors.chineseWhite,
    fontSize: 24,
  },
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
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  maskedView: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MaskedViewPointerEventsExample;
