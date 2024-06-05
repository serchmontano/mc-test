import {View, ViewStyle, StyleSheet, Image, ImageStyle} from 'react-native';
import {useTheme} from 'styled-components';

const PMFScreen = () => {
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

export default PMFScreen;
