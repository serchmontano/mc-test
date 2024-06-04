import {StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';

interface Props {
  orientation?: 'vertical' | 'horizontal';
}

const Divider = ({orientation = 'vertical'}: Props) => {
  const theme = useTheme();

  const styles = {
    divider: {
      height: orientation === 'vertical' ? '100%' : theme.spacing.unit(0.25),
      width: orientation === 'vertical' ? theme.spacing.unit(0.25) : '100%',
      backgroundColor: theme.color.grey100,
    } as ViewStyle,
  };
  return <View style={StyleSheet.flatten([styles.divider])} />;
};

export default Divider;
