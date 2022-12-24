import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Theme } from './themeProvider';

type Style<T = any> = StyleSheet.NamedStyles<T>;

const create =
  <T extends Style>(callbackOrStyles: T | ((theme: Theme) => T)) =>
  () => {
    const { currentTheme } = useTheme();

    return useMemo(() => {
      let styles: Style<T>;

      if (typeof callbackOrStyles === 'function') {
        styles = callbackOrStyles(currentTheme);
      } else {
        styles = callbackOrStyles;
      }

      return StyleSheet.create(styles);
    }, [currentTheme]);
  };

export const StyleSheetThemed = {
  create,
};
