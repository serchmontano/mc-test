import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import WalletManager from 'react-native-wallet-manager';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useTheme} from 'styled-components';
import {Divider} from '@atomic/atoms/divider';
import {Typography} from '@atomic/atoms/text';
import {
  AddToWallet,
  CardIconButton,
  OutlinedButton,
} from '@atomic/molecules/button';
import {
  formatCreditCardNumber,
  formatExpiryDate,
  maskCreditCardNumber,
} from '@app/utils/card.util';
import {CARDS} from 'src/mock/providers';
import {CardCarousel} from '@atomic/organisms/carousel';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {toggleBlockCard} from '@app/redux/slices/card.slice';
import {RootState} from '@app/redux/store';

interface Props {
  showDetails: boolean;
  onCardDetailsPress: () => void;
}

const CardDetails = ({showDetails = false, onCardDetailsPress}: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const animatedValue = useRef(new Animated.Value(showDetails ? 1 : 0)).current;
  const cardLocked = useSelector((state: RootState) => state.card.blockCard);

  const rnBiometrics = new ReactNativeBiometrics();
  const onLockCard = async () => {
    try {
      const {biometryType} = await rnBiometrics.isSensorAvailable();

      if (
        biometryType === BiometryTypes.TouchID ||
        biometryType === BiometryTypes.FaceID
      ) {
        const result = await rnBiometrics.simplePrompt({
          promptMessage: 'Confirm your identity',
        });

        if (result.success) {
          dispatch(toggleBlockCard());
        } else {
          console.log('User cancelled biometric prompt');
        }
      } else {
        console.log('Biometric sensor not available');
        dispatch(toggleBlockCard());
      }
    } catch (error) {
      console.log('Biometric authentication error', error);
    }
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: showDetails ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [showDetails, animatedValue]);

  const containerHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 270],
  });
  const handleAddToWallet = async () => {
    try {
      const result = await WalletManager.addPassFromUrl(
        'https://github.com/dev-family/react-native-wallet-manager/blob/main/example/resources/SamplePasses/Coupon.pkpass?raw=true',
      );
      if (result === true) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Pass added to wallet',
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const copyToClipboard = () => {
    Clipboard.setString(
      `Card Number: ${CARDS[0].cardNumber}\nName: ${CARDS[0].cardHolder}`,
    );
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Card information copied to clipboard',
    });
  };

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const styles = StyleSheet.create({
    container: {
      paddingVertical: theme.spacing.unit(3),
      gap: theme.spacing.unit(3),
      backgroundColor: theme.color.grey50,
    },
    cardDetails: {
      gap: theme.spacing.unit(3),
      paddingHorizontal: theme.spacing.unit(3),
      height: containerHeight,
      opacity: opacity,
      overflow: 'hidden',
    },
    cardDataContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing.unit(0.5),
    },
    controlsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: theme.spacing.unit(3),
      backgroundColor: theme.color.background,
      borderTopWidth: theme.spacing.unit(0.25),
      borderTopColor: theme.color.grey100,
    },
    collapsedControls: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <Typography variant="transactionHeading">
          Mastercard {maskCreditCardNumber(CARDS[0].cardNumber)}
        </Typography>
        <CardCarousel cardLocked={cardLocked} />
        <Animated.View style={styles.cardDetails}>
          <AddToWallet handleAddToWallet={handleAddToWallet} />
          <View style={styles.cardText}>
            <Typography variant="cardTitle">Card Number</Typography>
            <Typography variant="modalTitle">
              {formatCreditCardNumber(CARDS[0].cardNumber)}
            </Typography>
          </View>
          <Divider orientation="horizontal" />
          <View style={styles.cardDataContainer}>
            <View style={styles.cardText}>
              <Typography variant="cardTitle">Expiration Date</Typography>
              <Typography variant="modalTitle">
                {formatExpiryDate(CARDS[0].expMonth, CARDS[0].expYear)}
              </Typography>
            </View>
            <Divider orientation="vertical" />
            <View style={styles.cardText}>
              <Typography variant="cardTitle">CVC</Typography>
              <Typography variant="modalTitle">{CARDS[0].cvc}</Typography>
            </View>
          </View>
          <OutlinedButton action={copyToClipboard}>
            Copy Card Number
          </OutlinedButton>
        </Animated.View>
      </View>
      <View
        style={[
          styles.controlsContainer,
          !showDetails && styles.collapsedControls,
        ]}>
        <CardIconButton isActive={false} variation="controls" />
        <CardIconButton
          isActive={cardLocked}
          variation="lockCard"
          onPress={onLockCard}
        />
        <CardIconButton
          isActive={false}
          variation="cardDetails"
          onPress={onCardDetailsPress}
        />
      </View>
    </View>
  );
};

export default CardDetails;
