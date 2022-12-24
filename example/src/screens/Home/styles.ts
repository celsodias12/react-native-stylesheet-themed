import { StyleSheetThemed } from 'react-native-stylesheet-themed';

export const useStyles = StyleSheetThemed.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.text,
    backgroundColor: theme.primary,
  },
}));
