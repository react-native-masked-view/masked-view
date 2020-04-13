// CREDITS: These types are based on the original work made by all the people who contributed to @types/react-native

import * as React from 'react';
import * as ReactNative from 'react-native';

interface MaskedViewProps extends ReactNative.ViewProps {
  maskElement: React.ReactElement;
}
/**
 * @see https://github.com/react-native-community/react-native-masked-view
 */
declare class MaskedViewComponent extends React.Component<MaskedViewProps> {}
declare const MaskedViewBase: ReactNative.Constructor<
  ReactNative.NativeMethodsMixin
> &
  typeof MaskedViewComponent;
export default class MaskedView extends MaskedViewBase {}
