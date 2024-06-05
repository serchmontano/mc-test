import React, {FC, useCallback, useRef, useState} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {ButtonBlock, ButtonGrid, TextBlock} from '@atomic/atoms/containers';
import {FilledButton, OutlinedButton} from '@atomic/molecules/button';
import {Typography} from '@atomic/atoms/text';
import {ContentScrollView} from '@atomic/templates';
import {Provider} from '@atomic/molecules/card';
import {ProviderModal} from '@atomic/organisms/modal';

import {SERVICE_PROVIDERS} from 'src/mock/providers';
import {AllSetPopup} from '@atomic/organisms/popup';
import {RootRoutes} from '@app/Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {addProvider} from '@app/redux/slices/providers.slice';
import {RootState} from '@app/redux/store';

type ScreenProps = StackScreenProps<RootRoutes, 'Onboarding'>;

interface ProviderType {
  name: string;
  oauthLink: string;
  icon: NodeRequire;
  accentColor: string;
}

const OnboardingDashboardScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const connectedServices = useSelector(
    (state: RootState) => state.providers.providers,
  );
  const setConnectedServices = (provider: string) => {
    dispatch(addProvider(provider));
  };

  const [activeProvider, setActiveProvider] = useState(SERVICE_PROVIDERS[0]);
  const [continueToDashboard, setContinueToDashboard] = useState(false);

  const providerModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback((provider: ProviderType) => {
    setActiveProvider(provider);
    providerModalRef.current?.present();
  }, []);
  const toggleContinueToDashboard = () => setContinueToDashboard(prev => !prev);
  const moveFromOnboarding = () => navigation.replace('App');

  const styles = {
    content: {
      justifyContent: 'space-between',
      gap: theme.spacing.unit(2),
    } as ViewStyle,
  };

  return (
    <ContentScrollView style={StyleSheet.flatten([styles.content])}>
      <TextBlock>
        <Typography variant="heading">Connect service providers</Typography>
        <Typography variant="headingDescription">
          Select accounts you have that you would like to update with your new
          credit card
        </Typography>
      </TextBlock>
      <ButtonGrid>
        {SERVICE_PROVIDERS.map((provider: ProviderType, index) => (
          <Provider
            key={index}
            provider={provider}
            isConnected={connectedServices.includes(provider.name)}
            handlePresentModalPress={handlePresentModalPress}
          />
        ))}
      </ButtonGrid>
      <ButtonBlock>
        <FilledButton
          action={toggleContinueToDashboard}
          disabled={connectedServices.length === 0}>
          Continue
        </FilledButton>
        <OutlinedButton action={toggleContinueToDashboard} disabled={false}>
          Skip for now
        </OutlinedButton>
      </ButtonBlock>
      <ProviderModal
        providerModalRef={providerModalRef}
        provider={activeProvider}
        setConnectedServices={setConnectedServices}
      />
      <AllSetPopup
        visible={continueToDashboard}
        onClose={toggleContinueToDashboard}
        moveFromOnboarding={moveFromOnboarding}
      />
    </ContentScrollView>
  );
};

export default OnboardingDashboardScreen;
