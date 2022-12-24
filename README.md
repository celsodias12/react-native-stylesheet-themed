# React Native Style Sheet Themed

This library allows using themes together with react native style sheet

## Installation

```sh
npm install react-native-stylesheet-themed
```

## Usage

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

Import and use hook in your component

```ts
// Home.tsx
import React from 'react';
import { View, Text } from 'react-native';

import { useStyles } from './styles';

export function Home() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
