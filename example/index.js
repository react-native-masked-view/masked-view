/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { components as appComponents } from './app.json';
import * as components from './src';

for (const component of appComponents) {
  AppRegistry.registerComponent(
    component.appKey,
    () => components[component.appKey],
  );
}
