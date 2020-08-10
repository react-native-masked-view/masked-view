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
import { View, StyleSheet, requireNativeComponent } from 'react-native';

const RNCMaskedView = requireNativeComponent<any>('RNCMaskedView');

import { type MaskedViewProps } from './MaskedViewTypes';

/**
 * Renders the child view with a mask specified in the `maskElement` prop.
 *
 * ```
 * import React from 'react';
 * import { Text, View } from 'react-native';
 * import MaskedView from 'react-native-masked-view';
 *
 * class MyMaskedView extends React.Component {
 *   render() {
 *     return (
 *       <MaskedView
 *         style={{ flex: 1 }}
 *         maskElement={
 *           <View style={styles.maskContainerStyle}>
 *             <Text style={styles.maskTextStyle}>
 *               Basic Mask
 *             </Text>
 *           </View>
 *         }
 *       >
 *         <View style={{ flex: 1, backgroundColor: 'blue' }} />
 *       </MaskedView>
 *     );
 *   }
 * }
 * ```
 *
 * The above example will render a view with a blue background that fills its
 * parent, and then mask that view with text that says "Basic Mask".
 *
 * The alpha channel of the view rendered by the `maskElement` prop determines how
 * much of the view's content and background shows through. Fully or partially
 * opaque pixels allow the underlying content to show through but fully
 * transparent pixels block that content.
 *
 */
export default class MaskedView extends React.Component<MaskedViewProps> {
  _hasWarnedInvalidRenderMask = false;

  render() {
    const { maskElement, children, ...otherViewProps } = this.props;

    if (!React.isValidElement(maskElement)) {
      if (!this._hasWarnedInvalidRenderMask) {
        console.warn(
          'MaskedView: Invalid `maskElement` prop was passed to MaskedView. ' +
            'Expected a React Element. No mask will render.',
        );
        this._hasWarnedInvalidRenderMask = true;
      }
      // $FlowFixMe
      return <View {...otherViewProps}>{children}</View>;
    }

    return (
      <RNCMaskedView {...otherViewProps}>
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          {maskElement}
        </View>
        {children}
      </RNCMaskedView>
    );
  }
}
