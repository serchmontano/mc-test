import {ImageStyle} from 'react-native';
import {Image, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

type Props = {
  url: string;
  size?: number;
  [key: string]: any;
};
const WebAvatar = ({url, size = 10, ...props}: Props) => {
  const theme = useTheme();

  const styles = {
    avatar: {
      width: theme.spacing.unit(size),
      height: theme.spacing.unit(size),
      borderRadius: theme.spacing.unit(size / 2),
      resizeMode: 'contain',
    } as ImageStyle,
  };
  return (
    <Image
      source={{uri: url}}
      style={StyleSheet.flatten([styles.avatar])}
      {...props}
    />
  );
};

export default WebAvatar;
