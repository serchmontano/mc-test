import {View, StyleProp, TextStyle, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  style?: StyleProp<TextStyle>;
  [key: string]: any;
};

const ButtonBlock = ({style, ...props}: Props) => {
  const theme = useTheme();

  const styles = {
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing.unit(1.5),
    } as ViewStyle,
  };

  return (
    <View style={StyleSheet.flatten([styles.container])}>{props.children}</View>
  );
};

export default ButtonBlock;
