import {FC} from 'react';
import {ViewStyle, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {CardRoutes} from '@app/navigators/card.stack';
import {useTheme} from 'styled-components';
import {ContentScrollView, SettingsContainer} from '@atomic/templates';
import {ButtonGrid} from '@atomic/atoms/containers';
import {ControlButton} from '@atomic/molecules/button';
import {CONTROL_BUTTONS} from 'src/mock/providers';
import {SettingsItem} from '@atomic/molecules/card';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@app/redux/store';
import {toggleFaceID, toggleWallet} from '@app/redux/slices/settings.slice';

type ScreenProps = StackScreenProps<CardRoutes, 'CardControlsScreen'>;

const CardControlsScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const enableFaceID = useSelector(
    (state: RootState) => state.settings.enableFaceID,
  );
  const enableWallet = useSelector(
    (state: RootState) => state.settings.enableWallet,
  );
  const providers = useSelector(
    (state: RootState) => state.providers.providers,
  );

  const styles = {
    content: {
      gap: theme.spacing.unit(1.5),
      backgroundColor: 'transparent',
      paddingHorizontal: theme.spacing.unit(0),
      paddingVertical: theme.spacing.unit(0),
    } as ViewStyle,
    gridContainer: {
      paddingHorizontal: theme.spacing.unit(3),
      paddingTop: theme.spacing.unit(3.5),
      backgroundColor: 'transparent',
    } as ViewStyle,
  };
  return (
    <ContentScrollView style={StyleSheet.flatten([styles.content])}>
      <ButtonGrid style={StyleSheet.flatten([styles.gridContainer])}>
        {CONTROL_BUTTONS.map((button, index) => (
          <ControlButton
            key={index}
            title={button.title}
            icon={button.icon}
            onPress={button.onPress}
          />
        ))}
      </ButtonGrid>
      <SettingsContainer>
        <SettingsItem
          title="Face ID"
          icon={require('@assets/icons/face-id.png')}
          buttonTitle={enableFaceID ? 'Enabled' : 'Disabled'}
          action={() => dispatch(toggleFaceID())}
        />
        <SettingsItem
          title="Apple Wallet"
          icon={require('@assets/icons/wallet.png')}
          buttonTitle={enableWallet ? 'Enabled' : 'Disabled'}
          action={() => dispatch(toggleWallet())}
        />
        <SettingsItem
          title="Auto Pay"
          icon={require('@assets/icons/recurring.png')}
          buttonTitle="Enabled"
          action={() => {}}
        />
        <SettingsItem
          title="Online Statements"
          icon={require('@assets/icons/leaf.png')}
          buttonTitle="Enrolled"
          action={() => {}}
        />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsItem
          title="Manage Subscriptions"
          icon={require('@assets/icons/link.png')}
          buttonTitle={providers.length.toString()}
          action={() => {}}
        />
        <SettingsItem
          title="Authorized Users"
          icon={require('@assets/icons/list-left.png')}
          buttonTitle="1"
          action={() => {}}
        />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsItem
          title="Spend Limit Settings"
          icon={require('@assets/icons/alert.png')}
          buttonTitle=""
          action={() => {}}
        />
        <SettingsItem
          title="Overseas Spend Settings"
          icon={require('@assets/icons/globe.png')}
          buttonTitle=""
          action={() => {}}
        />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsItem
          title="Tap & Pay"
          icon={require('@assets/icons/contactless.png')}
          buttonTitle=""
          action={() => {}}
        />
        <SettingsItem
          title="FICO Score"
          icon={require('@assets/icons/dash.png')}
          buttonTitle=""
          action={() => {}}
        />
      </SettingsContainer>
    </ContentScrollView>
  );
};

export default CardControlsScreen;
