// @flow
import { type Node, type Element } from 'react';
import { type ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

export type MaskedViewProps = $Shape<ViewProps> &
  $ReadOnly<{|
    children: Node,
    /**
     * Should be a React element to be rendered and applied as the
     * mask for the child element.
     */
    maskElement: Element<any>,
    /**
     * Opt into software rendering to enable animated masks.
     */
    androidRenderingMode?: 'software' | 'hardware',
  |}>;
