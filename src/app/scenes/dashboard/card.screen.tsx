import {View, Text, ScrollView, ViewStyle, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

const CardScreen = () => {
  const theme = useTheme();
  const styles = {
    container: {
      flexGrow: 1,
    } as ViewStyle,
    content: {
      gap: theme.spacing.unit(1),
    },
  };

  return (
    <ScrollView
      style={StyleSheet.flatten([styles.content])}
      contentContainerStyle={StyleSheet.flatten([
        styles.container,
      ])}></ScrollView>
  );
};

export default CardScreen;
