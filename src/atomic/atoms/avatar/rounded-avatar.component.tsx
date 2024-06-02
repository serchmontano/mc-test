import {StyleProp, Image, StyleSheet, ImageStyle} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  style?: StyleProp<ImageStyle>;
  icon: any;
  size?: number;
  [key: string]: any;
};
const RoundedAvatar = ({style, icon, size = 10, ...props}: Props) => {
  const theme = useTheme();

  const styles = {
    avatar: {
      width: theme.spacing.unit(size),
      height: theme.spacing.unit(size),
      borderRadius: theme.spacing.unit(size / 2),
    },
  };
  return (
    <Image source={icon} style={StyleSheet.flatten([styles.avatar, style])} />
  );
};

export default RoundedAvatar;
