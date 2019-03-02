import React from 'react';
import { ViewPropTypes } from 'react-native';

export type MaskedViewProps = $ReadOnly<{|
  ...ViewPropTypes.ViewProps,

  children: React.Node,
  /**
   * Should be a React element to be rendered and applied as the
   * mask for the child element.
   */
  maskElement: React.Element<any>,
|}>;
