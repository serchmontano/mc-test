import {View, ViewStyle, StyleSheet, ImageStyle, Image} from 'react-native';
import {useTheme} from 'styled-components';

const MoreScreen = () => {
  const theme = useTheme();
  const styles = {
    container: {
      flex: 1,
      backgroundColor: theme.color.background,
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
    image: {
      width: theme.spacing.unit(40),
      height: theme.spacing.unit(40),
    } as ImageStyle,
  };
  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <Image
        source={require('@assets/backgrounds/under-construction.png')}
        style={StyleSheet.flatten([styles.image])}
      />
    </View>
  );
};

export default MoreScreen;
