// @flow
import { type Node, type Element } from 'react';
import { ViewPropTypes } from 'react-native';

export type MaskedViewProps = typeof ViewPropTypes &
  $ReadOnly<{|
    children: Node,
    /**
     * Should be a React element to be rendered and applied as the
     * mask for the child element.
     */
    maskElement: Element<any>,
    porterDuffMode?:
      | 'ADD'
      | 'CLEAR'
      | 'DARKEN'
      | 'DST'
      | 'DST_ATOP'
      | 'DST_IN'
      | 'DST_OUT'
      | 'DST_OVER'
      | 'LIGHTEN'
      | 'MULTIPLY'
      | 'OVERLAY'
      | 'SCREEN'
      | 'SRC'
      | 'SRC_ATOP'
      | 'SRC_IN'
      | 'SRC_OUT'
      | 'SRC_OVER'
      | 'XOR',
  |}>;
