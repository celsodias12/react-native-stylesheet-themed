import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-stylesheet-themed';

import { useStyles } from './styles';

export function Home() {
  const styles = useStyles();
  const { setCurrentTheme } = useTheme();

  const changeTheme = () => {
    setCurrentTheme({ primary: 'yellow', text: 'white' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <Button title="Change theme with useTheme hook" onPress={changeTheme} />
    </View>
  );
}
