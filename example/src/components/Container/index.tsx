import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';

export function Container({ children }: PropsWithChildren<any>) {
  const styles = useStyles();

  return <View style={styles.container}>{children}</View>;
}
