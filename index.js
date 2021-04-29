// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import { AppRegistry } from "react-native";

// import StorybookUIRoot from "./storybook";

// AppRegistry.registerComponent('learnGasy', () => StorybookUIRoot);

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Root from './Root';

AppRegistry.registerComponent(appName, () => Root);
