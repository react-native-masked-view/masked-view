// @flow
import { type Node } from 'react';
import { type ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

export type MaskedViewProps = Partial<ViewProps> &
  $ReadOnly<{|
    children: Node,
    /**
     * Should be a React element to be rendered and applied as the
     * mask for the child element.
     */
    maskElement: Node,
    /**
     * Opt into software rendering to enable animated masks.
     */
    androidRenderingMode?: 'software' | 'hardware',
  |}>;
