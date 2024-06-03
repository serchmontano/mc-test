import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Typography} from '@atomic/atoms/text';
import {useTheme} from 'styled-components';

interface Props {
  text: string;
  icon: string;
  [key: string]: any;
}

const TextButton = ({text, icon, ...props}: Props) => {
  const theme = useTheme();

  const styles = {
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: theme.spacing.unit(0.5),
    } as ViewStyle,
  };
  return (
    <TouchableOpacity style={StyleSheet.flatten([styles.content])} {...props}>
      <Typography variant="balanceContent">{text}</Typography>
      <Icon name={icon} size={theme.spacing.unit(1.75)} />
    </TouchableOpacity>
  );
};

export default TextButton;
