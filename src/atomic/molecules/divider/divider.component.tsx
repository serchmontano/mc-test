import {StyleSheet, View} from 'react-native';
import {useTheme} from 'styled-components';

const Divider = () => {
  const theme = useTheme();

  const styles = {
    divider: {
      heigth: '100%',
      width: theme.spacing.unit(0.25),
      backgroundColor: theme.color.grey100,
    },
  };
  return <View style={StyleSheet.flatten([styles.divider])} />;
};

export default Divider;
