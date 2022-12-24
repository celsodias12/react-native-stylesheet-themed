import { StatusBar } from 'react-native';
import { StyleSheetThemed } from 'react-native-stylesheet-themed';

export const useStyles = StyleSheetThemed.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
