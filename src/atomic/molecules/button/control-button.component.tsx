import React from 'react';
import {HorizontalGradient} from '@atomic/atoms/gradient';
import {Typography} from '@atomic/atoms/text';
import {
  Image,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ImageProps,
  View,
  ImageStyle,
} from 'react-native';
import {useTheme} from 'styled-components';

interface Props {
  title?: string;
  icon?: ImageProps;
  [key: string]: any;
}

const ControlButton = ({title, icon, ...props}: Props) => {
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
      paddingVertical: theme.spacing.unit(3),
      gap: theme.spacing.unit(1),
      backgroundColor: theme.color.background,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    } as ViewStyle,
    icon: {
      width: theme.spacing.unit(3),
      height: theme.spacing.unit(3),
      resizeMode: 'contain',
    } as ImageStyle,
  };

  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <HorizontalGradient style={styles.gradient}>
        <TouchableOpacity
          style={StyleSheet.flatten([styles.button])}
          {...props}>
          {icon && (
            <Image source={icon} style={StyleSheet.flatten([styles.icon])} />
          )}
          {title && <Typography variant="cardTitle">{title}</Typography>}
        </TouchableOpacity>
      </HorizontalGradient>
    </View>
  );
};

export default ControlButton;
