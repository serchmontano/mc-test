import {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Typography} from '@atomic/atoms/text';
import {useTheme} from 'styled-components';
import {SolidButton} from '@atomic/molecules/button';
import {RoundedAvatar} from '@atomic/atoms/avatar';
import {Input} from '@atomic/molecules/input';
import {Dialog} from '../popup';

interface ProviderType {
  name: string;
  oauthLink: string;
  icon: NodeRequire;
  accentColor: string;
}

type Props = {
  providerModalRef: React.RefObject<BottomSheetModal>;
  provider: ProviderType;
  setConnectedServices: (provider: string) => void;
  [key: string]: any;
};

const ProviderModal = ({
  providerModalRef,
  provider,
  setConnectedServices,
  ...props
}: Props) => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const snapPoints = useMemo(() => ['55%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleProviderLogin = async (providerName: string) => {
    setConnectedServices(providerName);
    setShowConfirmation(true);

    await new Promise(resolve => setTimeout(resolve, 600));

    Promise.all([
      Promise.resolve(providerModalRef?.current?.close()),
      Promise.resolve(setShowConfirmation(false)),
    ]);
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [provider]);

  const styles = StyleSheet.create({
    handle: {
      display: 'none' as const,
    } as ViewStyle,
    handleIndicator: {
      display: 'none' as const,
    },
    titleContent: {
      alignItems: 'center',
      gap: theme.spacing.unit(2),
    },
    content: {
      flex: 1,
      borderTopWidth: theme.spacing.unit(1.5),
      borderTopColor: provider.accentColor,
      padding: theme.spacing.unit(3),
      gap: theme.spacing.unit(2),
      justifyContent: 'space-between',
      marginBottom: theme.spacing.unit(4),
      backgroundColor: theme.color.background,
    },
    formContent: {
      flex: 1,
      alignItems: 'center',
      gap: theme.spacing.unit(3),
      justifyContent: 'space-between',
    },
    inputFields: {
      width: '100%',
    },
    closeIcon: {
      position: 'absolute',
      top: theme.spacing.unit(2),
      right: theme.spacing.unit(2),
    },
  });

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  return (
    <>
      <BottomSheetModal
        ref={providerModalRef}
        index={0}
        snapPoints={snapPoints}
        enableContentPanningGesture={true}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
        handleStyle={styles.handle}
        handleIndicatorStyle={styles.handleIndicator}
        {...props}>
        <BottomSheetView style={StyleSheet.flatten([styles.content])}>
          <View style={StyleSheet.flatten([styles.formContent])}>
            <View style={StyleSheet.flatten([styles.titleContent])}>
              <RoundedAvatar size={9} icon={provider.icon} />
              <Typography variant="modalTitle">
                Connect {provider.name}
              </Typography>
            </View>
            <View style={StyleSheet.flatten([styles.inputFields])}>
              <Input
                keyboardType="email-address"
                label="User Name"
                placeholder="user@gmail.com"
                value={email}
                autoCapitalize="none"
                onChangeText={nv => setEmail(nv)}
              />
              <Input
                keyboardType="visible-password"
                label="Password"
                placeholder="••••••••"
                value={password}
                autoCapitalize="none"
                onChangeText={nv => setPassword(nv)}
                secureTextEntry
              />
            </View>
            <Typography variant="label">
              By clicking the button below, you agree to the Terms and
              Conditions for connecting your {provider.name} account.
            </Typography>
          </View>
          <SolidButton
            action={() => handleProviderLogin(provider.name)}
            disabled={password.length === 0 || email.length === 0}>
            Connect
          </SolidButton>
          <TouchableOpacity
            onPress={() => providerModalRef?.current?.close()}
            style={StyleSheet.flatten([styles.closeIcon])}>
            <RoundedAvatar
              size={1.5}
              icon={require('@assets/icons/close.png')}
            />
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>
      <Dialog visible={showConfirmation} onClose={() => {}}>
        <RoundedAvatar
          size={10}
          icon={require('@assets/icons/connected.png')}
        />
        <Typography variant="dialogContent">Connected</Typography>
      </Dialog>
    </>
  );
};

export default ProviderModal;
