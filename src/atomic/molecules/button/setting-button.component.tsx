import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Typography} from '@atomic/atoms/text';
import {useTheme} from 'styled-components';

interface Props {
  title: string;
  onPress: () => void;
}
const SettingButton = ({title, onPress}: Props) => {
  const theme = useTheme();
  const styles = {
    settingButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.unit(0),
    } as ViewStyle,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([styles.settingButton])}>
      <Typography variant="balanceContent">{title}</Typography>
      <Icon
        name="chevron-right"
        size={theme.spacing.unit(3)}
        color={theme.color.grey400}
      />
    </TouchableOpacity>
  );
};

export default SettingButton;
