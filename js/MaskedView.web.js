import React from 'react';
import { View } from 'react-native';

function MaskedView({ maskElement, ...props }) {
  return React.createElement(View, props, maskElement);
}

export default MaskedView;
