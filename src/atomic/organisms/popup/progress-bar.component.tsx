import {StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  percentage: number;
  color: string;
  [key: string]: any;
};
const ProgressBar = ({percentage = 20, color = '#7A9A02', ...props}: Props) => {
  const theme = useTheme();
  const styles = {
    container: {
      width: '100%',
      height: theme.spacing.unit(1),
      borderRadius: theme.spacing.unit(0.5),
      backgroundColor: theme.color.progressBackground,
    } as ViewStyle,
    progress: {
      width: `${percentage}%`,
      height: theme.spacing.unit(1),
      borderRadius: theme.spacing.unit(0.5),
      backgroundColor: color,
    } as ViewStyle,
  };

  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <View style={StyleSheet.flatten([styles.progress])} />
    </View>
  );
};

export default ProgressBar;
