import {Typography} from '@atomic/atoms/text';
import {
  View,
  ViewStyle,
  StyleSheet,
  Image,
  ImageStyle,
  ImageProps,
} from 'react-native';
import {useTheme} from 'styled-components';
import {SettingButton} from '../button';

interface Props {
  icon?: ImageProps;
  title: string;
  buttonTitle: string;
  action: () => void;
  [key: string]: any;
}
const SettingsItem = ({icon, title, buttonTitle, action, ...props}: Props) => {
  const theme = useTheme();
  const styles = {
    content: {
      flexDirection: 'row',
      paddingHorizontal: theme.spacing.unit(3),
      paddingVertical: theme.spacing.unit(2),
      borderBottomWidth: theme.spacing.unit(0.125),
      borderBottomColor: theme.color.grey100,
      justifyContent: 'space-between',
      alignItems: 'center',
    } as ViewStyle,
    titleContainer: {
      flexDirection: 'row',
      gap: theme.spacing.unit(2),
      alignItems: 'center',
    } as ViewStyle,
    titleIcon: {
      width: theme.spacing.unit(3),
      height: theme.spacing.unit(3),
    } as ImageStyle,
  };

  return (
    <View style={StyleSheet.flatten([styles.content])}>
      <View style={StyleSheet.flatten([styles.titleContainer])}>
        {icon && (
          <Image source={icon} style={StyleSheet.flatten([styles.titleIcon])} />
        )}
        {title && (
          <Typography variant="transactionHeading" align="left">
            {title}
          </Typography>
        )}
      </View>
      <SettingButton title={buttonTitle} onPress={action} />
    </View>
  );
};

export default SettingsItem;
