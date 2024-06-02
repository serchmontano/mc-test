import {View, StyleProp, ViewStyle, StyleSheet, Platform} from 'react-native';
import {useTheme} from 'styled-components';
import {FilledButton, OutlinedButton} from '../button';
import {RoundedAvatar} from '@atomic/atoms/avatar';
import {HorizontalGradient} from '@atomic/atoms/gradient';

interface ProviderType {
  name: string;
  oauthLink: string;
  icon: NodeRequire;
  accentColor: string;
}
type Props = {
  style?: StyleProp<ViewStyle>;
  isConnected: boolean;
  provider: ProviderType;
  handlePresentModalPress: (provider: ProviderType) => void;
  [key: string]: any;
};

const Provider = ({
  style,
  isConnected = false,
  provider,
  handlePresentModalPress,
  ...props
}: Props) => {
  const theme = useTheme();

  const styles = {
    content: {
      width: '100%',
      backgroundColor: theme.color.background,
      borderRadius: theme.spacing.unit(0.5),
      padding: theme.spacing.unit(4),
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.unit(4),
      ...Platform.select({
        ios: {
          shadowColor: theme.color.text,
          shadowOffset: {width: 0, height: theme.spacing.unit(0.5)},
          shadowOpacity: 0.12,
          shadowRadius: theme.spacing.unit(1.25),
        },
        android: {
          elevation: 5,
          shadowColor: theme.color.text,
          shadowOffset: {width: 0, height: theme.spacing.unit(0.5)},
          shadowOpacity: 0.12,
          shadowRadius: theme.spacing.unit(1.25),
        },
      }),
    } as ViewStyle,
    gradient: {
      width: '100%',
      borderRadius: theme.spacing.unit(1),
      padding: theme.spacing.unit(0.5),
    } as ViewStyle,
    checkIcon: {
      position: 'absolute',
      right: theme.spacing.unit(2),
      top: theme.spacing.unit(2),
      width: theme.spacing.unit(2.5),
      height: theme.spacing.unit(2.5),
    } as ViewStyle,
  };

  return isConnected ? (
    <HorizontalGradient style={styles.gradient}>
      <View style={StyleSheet.flatten([styles.content, style])}>
        <RoundedAvatar size={9} icon={provider.icon} />
        <FilledButton size="small" action={() => {}} partiallyDisabled={true}>
          Connected
        </FilledButton>
      </View>
      <View style={styles.checkIcon}>
        <RoundedAvatar size={2.5} icon={require('@assets/icons/check.png')} />
      </View>
    </HorizontalGradient>
  ) : (
    <View style={StyleSheet.flatten([styles.content, style])}>
      <RoundedAvatar size={9} icon={provider.icon} />
      <OutlinedButton
        action={() => handlePresentModalPress(provider)}
        size="small">
        Connect
      </OutlinedButton>
    </View>
  );
};

export default Provider;