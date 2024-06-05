import {View, ViewStyle, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  [key: string]: any;
};
const SettingsContainer = ({...props}: Props) => {
  const theme = useTheme();
  const styles = {
    container: {
      backgroundColor: theme.color.background,
      width: '100%',
    } as ViewStyle,
  };
  return (
    <View style={StyleSheet.flatten([styles.container])}>{props.children}</View>
  );
};

export default SettingsContainer;
