import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { ThemeProvider } from 'react-native-stylesheet-themed';

import { themes } from './themes';
import { Home } from './screens';
import { Container } from './components';

type Themes = keyof typeof themes;

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<Themes>('light');

  const oppositeTheme = currentTheme === 'light' ? 'dark' : 'light';

  function changeTheme() {
    setCurrentTheme(oppositeTheme);
  }

  return (
    <Container>
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
    </Container>
  );
}
