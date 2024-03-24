/**
 * @flow strict-local
 * @format
 */

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';
import type {HostComponent} from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';

import * as React from 'react';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type NativeProps = $ReadOnly<{
  ...ViewProps,

  //Props
  androidRenderingMode?: WithDefault<'hardware' | 'software', 'hardware'>,
}>;

export default (codegenNativeComponent<NativeProps>(
  'RNCMaskedView',
): HostComponent<NativeProps>);
