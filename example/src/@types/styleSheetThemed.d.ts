import 'react-native-stylesheet-themed';

import { themes } from '../themes';

type DefaultTheme = typeof themes.light;

declare module 'react-native-stylesheet-themed' {
  interface Theme extends DefaultTheme {}
}
