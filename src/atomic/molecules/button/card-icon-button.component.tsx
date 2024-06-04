import {
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Typography} from '@atomic/atoms/text';
import {useTheme} from 'styled-components';
import {HorizontalGradient} from '@atomic/atoms/gradient';

interface Props {
  variation: 'controls' | 'lockCard' | 'cardDetails';
  isActive: boolean;
  [key: string]: any;
}
const variations = {
  controls: {
    icon: require('@assets/icons/controls.png'),
    activeIcon: require('@assets/icons/controls.png'),
    name: 'Controls',
  },
  lockCard: {
    icon: require('@assets/icons/lock.png'),
    activeIcon: require('@assets/icons/lock-active.png'),
    name: 'Lock Card',
  },
  cardDetails: {
    icon: require('@assets/icons/details.png'),
    activeIcon: require('@assets/icons/details.png'),
    name: 'Card Details',
  },
};
const CardIconButton = ({variation, isActive = false, ...props}: Props) => {
  const theme = useTheme();
  const styles = {
    button: {
      flex: 1,
      gap: theme.spacing.unit(1),
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
    gradientContainer: {
      padding: theme.spacing.unit(0.25),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.spacing.unit(3.25 + 0.25),
      overflow: 'hidden',
    } as ViewStyle,
    iconContainer: {
      width: theme.spacing.unit(6.5),
      height: theme.spacing.unit(6.5),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.spacing.unit(3.25),
      backgroundColor: isActive ? 'transparent' : theme.color.background,
    } as ViewStyle,
    icon: {
      width: theme.spacing.unit(4),
      height: theme.spacing.unit(4),
    } as ImageStyle,
  };
  return (
    <TouchableOpacity style={StyleSheet.flatten([styles.button])} {...props}>
      <HorizontalGradient
        style={StyleSheet.flatten([styles.gradientContainer])}>
        <View style={StyleSheet.flatten([styles.iconContainer])}>
          <Image
            source={
              isActive
                ? variations[variation].activeIcon
                : variations[variation].icon
            }
            style={StyleSheet.flatten([styles.icon])}
          />
        </View>
      </HorizontalGradient>
      <Typography variant="balanceContent">
        {variations[variation].name}
      </Typography>
    </TouchableOpacity>
  );
};

export default CardIconButton;
