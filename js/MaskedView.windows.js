/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { View } from 'react-native';

/**
 * MaskedView not implemented on Windows
 */
export default class MaskedView extends React.Component {
  render() {
    const { children, ...otherViewProps } = this.props;

    return (
      <View {...otherViewProps}>
        {children}
      </View>
    );
  }
}
