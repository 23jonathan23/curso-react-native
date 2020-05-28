/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './src/App';
import { name as appName } from './app.json';

import Menu from './src/components/Menu/Menu';

AppRegistry.registerComponent(appName, () => Menu);
