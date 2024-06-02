import {Typography} from '@atomic/atoms/text';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useTheme} from 'styled-components/native';

type Props = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  size?: 'small' | 'medium' | 'large';
  action: () => void;
  [key: string]: any;
};

const SolidButton = ({
  style,
  textStyle,
  disabled = false,
  size = 'medium',
  action,
  ...props
}: Props) => {
  const theme = useTheme();

  const styles = {
    button: {
      width: '100%',
      borderRadius: theme.spacing.unit(0.5),
      paddingVertical:
        size === 'small'
          ? theme.spacing.unit()
          : size === 'medium'
          ? theme.spacing.unit(1.5)
          : theme.spacing.unit(1.75),
      backgroundColor: theme.color.solid,
    } as ViewStyle,
    text: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontSize:
        size === 'small'
          ? theme.spacing.unit(1.75)
          : size === 'medium'
          ? theme.spacing.unit(2.25)
          : theme.spacing.unit(2.5),
      fontWeight: '600',
    } as TextStyle,
    disabled: {
      backgroundColor: '#D6D6D6',
    } as ViewStyle,
    textDisabled: {
      color: '#FFFFFF',
    } as TextStyle,
  };

  return (
    <TouchableOpacity
      onPress={action}
      disabled={disabled}
      style={StyleSheet.flatten([
        styles.button,
        disabled && styles.disabled,
        style,
      ])}>
      <Typography
        variant="button"
        style={StyleSheet.flatten([
          styles.text,
          disabled && styles.textDisabled,
          textStyle,
        ])}>
        {props.children}
      </Typography>
    </TouchableOpacity>
  );
};

export default SolidButton;
