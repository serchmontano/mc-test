import {
  ScrollView,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  style?: StyleProp<TextStyle>;
  [key: string]: any;
};

const ContentScrollView = ({style, ...props}: Props) => {
  const theme = useTheme();

  const styles = {
    container: {
      flexGrow: 1,
      backgroundColor: theme.color.background,
      paddingHorizontal: theme.spacing.unit(2),
      paddingVertical: theme.spacing.unit(4),
    } as ViewStyle,
  };

  return (
    <ScrollView
      contentContainerStyle={StyleSheet.flatten([styles.container, style])}>
      {props.children}
    </ScrollView>
  );
};

export default ContentScrollView;
