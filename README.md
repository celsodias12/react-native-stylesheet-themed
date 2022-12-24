# React Native Style Sheet Themed

This library allows using themes together with react native style sheet

## Installation

```sh
npm install react-native-stylesheet-themed
```

## Usage

Import theme provider component wrapping your entire app

```ts
// index.js
import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { ThemeProvider } from 'react-native-stylesheet-themed';

import { themes } from './themes';
import { Home } from './screens';

type Themes = keyof typeof themes;

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<Themes>('light');

  const oppositeTheme = currentTheme === 'light' ? 'dark' : 'light';

  function changeTheme() {
    setCurrentTheme(oppositeTheme);
  }

  return (
    <ThemeProvider
      theme={currentTheme === 'light' ? themes.light : themes.dark}
    >
      <Text>Current theme: {currentTheme}</Text>
      <Button
        title={`Change theme to ${oppositeTheme}`}
        onPress={changeTheme}
      />
      <Home />
    </ThemeProvider>
  );
}
```

Create your styles file using StyleSheetThemed

```ts
// styles.ts
import { StyleSheetThemed } from 'react-native-stylesheet-themed';

export const useStyles = StyleSheetThemed.create((theme) => ({
  text: {
    color: theme.text,
    backgroundColor: theme.primary,
  },
}));

// or

export const useStyles = StyleSheetThemed.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
  },
});
```

Use `useStyles` hook in your component

```ts
// Home.tsx
import React from 'react';
import { View, Text } from 'react-native';

import { useStyles } from './styles';

export function Home() {
  const styles = useStyles();

  return <Text style={styles.text}>Hello world</Text>;
}
```

## Switch theme with `useTheme` hook

Import and use hook in your component

```ts
// Home.ts
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-stylesheet-themed';

import { useStyles } from './styles';

const theme = {
  primary: 'yellow',
  text: 'white',
};

export function Home() {
  const styles = useStyles();
  const { setCurrentTheme } = useTheme();

  const changeTheme = () => {
    setCurrentTheme(theme);
  };

  return (
    <View>
      <Text style={styles.text}>Hello world</Text>
      <Button title="Change theme with useTheme hook" onPress={changeTheme} />
    </View>
  );
}
```

## Typing

```ts
// styleSheetThemed.d.ts
import 'react-native-stylesheet-themed';

import { themes } from '../themes';

type DefaultTheme = typeof themes.light;

declare module 'react-native-stylesheet-themed' {
  interface Theme extends DefaultTheme {}
}
```

## Example App

Look in the [example](https://github.com/celsodias12/react-native-stylesheet-themed/tree/main/example) folder to see an app using the library

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
