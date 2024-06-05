import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

const RewardScreen = () => {
  const theme = useTheme();
  const styles = {
    container: {
      flex: 1,
      backgroundColor: theme.color.background,
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
  };
  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <Text>RewardScreen</Text>
    </View>
  );
};

export default RewardScreen;
