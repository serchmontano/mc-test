import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'styled-components';
import {Typography} from '@atomic/atoms/text';
import {RoundedAvatar} from '@atomic/atoms/avatar';

const visibleIcon = require('@assets/icons/visible.png');
const invisibleIcon = require('@assets/icons/invisible.png');

type InputProps = TextInputProps & {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Input: React.FC<InputProps> = ({
  label,
  containerStyle,
  style,
  secureTextEntry,
  ...props
}) => {
  const theme = useTheme();
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const styles = {
    container: {
      marginVertical: theme.spacing.unit(1),
    },
    label: {
      marginBottom: theme.spacing.unit(0.5),
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.color.grey,
      borderWidth: 1,
      borderRadius: theme.spacing.unit(0.5),
      paddingHorizontal: theme.spacing.unit(1),
      width: '100%',
    } as ViewStyle,
    input: {
      flex: 1,
      height: theme.spacing.unit(5),
      width: '100%',
    } as ViewStyle,
    toggleButton: {
      padding: theme.spacing.unit(0.5),
    },
  };

  const handleToggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Typography variant="label" align="left" style={styles.label}>
        {label}
      </Typography>
      <View style={styles.inputContainer}>
        <TextInput
          style={StyleSheet.flatten([styles.input, style])}
          secureTextEntry={isSecure}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={handleToggleSecureEntry}
            style={styles.toggleButton}>
            <RoundedAvatar
              icon={isSecure ? visibleIcon : invisibleIcon}
              size={3}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
