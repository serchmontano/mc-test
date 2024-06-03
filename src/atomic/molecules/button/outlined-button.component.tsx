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
  size?: 'small' | 'medium' | 'large';
  action: () => void;
  [key: string]: any;
};

const OutlinedButton = ({
  style,
  textStyle,
  disabled = false,
  size = 'medium',
  action,
  ...props
}: Props) => {
  const theme = useTheme();

  const styles = {
    container: {
      width: '100%',
      borderRadius: theme.spacing.unit(0.5),
      overflow: 'hidden',
    } as ViewStyle,
    gradient: {
      width: '100%',
      borderRadius: theme.spacing.unit(0.5),
      padding: theme.spacing.unit(0.25),
    } as ViewStyle,
    button: {
      width: '100%',
      borderRadius: theme.spacing.unit(0.5),
      paddingVertical:
        size === 'small'
          ? theme.spacing.unit()
          : size === 'medium'
          ? theme.spacing.unit(1.5)
          : theme.spacing.unit(1.75),
      backgroundColor: theme.color.background,
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
    text: {
      color: theme.color.primary,
      fontSize:
        size === 'small'
          ? theme.spacing.unit(1.75)
          : size === 'medium'
          ? theme.spacing.unit(2.25)
          : theme.spacing.unit(2.5),
      textAlign: 'center',
    } as TextStyle,
    disabledButton: {
      backgroundColor: theme.color.disabled,
    } as ViewStyle,
    textDisabled: {
      color: theme.color.background,
    } as TextStyle,
  };

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      {disabled ? (
        <View style={[styles.button, styles.disabledButton]}>
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
          <TouchableOpacity
            onPress={action}
            style={StyleSheet.flatten([
              styles.button,
              disabled && styles.disabledButton,
            ])}
            {...props}>
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
        </HorizontalGradient>
      )}
    </View>
  );
};

export default OutlinedButton;
