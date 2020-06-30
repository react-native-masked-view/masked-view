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

import { type MaskedViewProps } from './MaskedViewTypes';

/**
 * MaskedView not implemented on Windows
 */
export default class MaskedView extends React.Component<MaskedViewProps> {
  render() {
    const { children, ...otherViewProps } = this.props;

    return <View {...otherViewProps}>{children}</View>;
  }
}
