import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../colors';
import ExampleContainer from './ExampleContainer';

const Paragraph = () => (
  <ExampleContainer>
    <View style={styles.textView}>
      <Text style={styles.text}>
        Dear Doctor Brown, on the night that I go back in time, you will be shot
        by terrorists. Please take whatever precautions are necessary to prevent
        this terrible disaster. Your friend, Marty. Over there, on my hope
        chest. I've never seen purple underwear before, Calvin. They're late. My
        experiment worked. They're all exactly twenty-five minutes slow. Yeah,
        gimme a Tab. Remember, fellas, the future is in your hands. If you
        believe in progress, re-elect Mayor Red Thomas, progress is his middle
        name. Mayor Red Thomas's progress platform means more jobs, better
        education, bigger civic improvements, and lower taxes. On election day,
        cast your vote for a proven leader, re-elect Mayor Red Thomas...
      </Text>
    </View>
  </ExampleContainer>
);

const styles = StyleSheet.create({
  textView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: Colors.darkChestnut,
    fontSize: 8,
    fontVariant: ['small-caps'],
    fontWeight: 'bold',
  },
});

export default Paragraph;
