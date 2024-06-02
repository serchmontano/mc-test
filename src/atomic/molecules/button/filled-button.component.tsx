import {
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {useTheme} from 'styled-components/native';

import {HorizontalGradient} from '@atomic/atoms/gradient';
import {Typography} from '@atomic/atoms/text';

type Props = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  partiallyDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  action: () => void;
  [key: string]: any;
};

const FilledButton = ({
  style,
  textStyle,
  disabled = false,
  partiallyDisabled = false,
  size = 'medium',
  action,
  ...props
}: Props) => {
  const theme = useTheme();

  const styles = {
    button: {
      width: '100%',
      borderRadius: theme.spacing.unit(0.5),
    } as ViewStyle,
    gradient: {
      width: '100%',
      borderRadius: theme.spacing.unit(0.5),
      paddingVertical:
        size === 'small'
          ? theme.spacing.unit()
          : size === 'medium'
          ? theme.spacing.unit(1.5)
          : theme.spacing.unit(1.75),
    } as ViewStyle,
    text: {
      color: theme.color.white,
      fontSize:
        size === 'small'
          ? theme.spacing.unit(1.75)
          : size === 'medium'
          ? theme.spacing.unit(2.25)
          : theme.spacing.unit(2.5),
      textAlign: 'center',
    } as TextStyle,
    disabled: {
      backgroundColor: theme.color.disabled,
    } as ViewStyle,
    textDisabled: {
      color: theme.color.white,
    } as TextStyle,
  };

  return (
    <TouchableOpacity
      disabled={disabled || partiallyDisabled}
      onPress={action}
      style={StyleSheet.flatten([
        styles.button,
        disabled && styles.disabled,
        style,
      ])}>
      {disabled ? (
        <View style={[styles.gradient, styles.disabled]}>
          <Typography
            variant="button"
            style={StyleSheet.flatten([
              styles.text,
              styles.textDisabled,
              textStyle,
            ])}>
            {props.children}
          </Typography>
        </View>
      ) : (
        <HorizontalGradient style={styles.gradient}>
          <Typography
            variant="button"
            style={StyleSheet.flatten([styles.text, textStyle])}>
            {props.children}
          </Typography>
        </HorizontalGradient>
      )}
    </TouchableOpacity>
  );
};

export default FilledButton;
