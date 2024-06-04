import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
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

interface Props {
  showDetails: boolean;
  onCardDetailsPress: () => void;
}

const CardDetails = ({showDetails = false, onCardDetailsPress}: Props) => {
  const theme = useTheme();
  const animatedValue = useRef(new Animated.Value(showDetails ? 1 : 0)).current;
  // TODO: Change to redux
  const [cardLocked, setCardLocked] = useState(false);

  const onLockCard = () => {
    setCardLocked(!cardLocked);
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
    outputRange: [0, 270], // Ajusta este valor según el contenido
  });

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
          <AddToWallet />
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
          <OutlinedButton action={() => {}}>Copy Card Number</OutlinedButton>
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
