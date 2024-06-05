import React, {useRef} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageBackground,
  LogBox,
} from 'react-native';
import {useTheme} from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CARDS} from 'src/mock/providers';
import {Typography} from '@atomic/atoms/text';

LogBox.ignoreLogs(['ViewPropTypes will be removed']);
const {width} = Dimensions.get('window');

interface Props {
  cardLocked: boolean;
}
interface CardData {
  cardHolder: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  type: string;
}

const CardCarousel = ({cardLocked}: Props) => {
  const carouselRef = useRef<Carousel<CardData>>(null);

  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: theme.spacing.unit(20.5),
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    card: {
      width: theme.spacing.unit(32.5),
      height: theme.spacing.unit(20),
      borderRadius: theme.spacing.unit(2),
      backgroundImage: require('@assets/backgrounds/card-bg.png'),
    } as ViewStyle,
    lockMask: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: theme.spacing.unit(32.5),
      height: theme.spacing.unit(20),
      borderRadius: theme.spacing.unit(1),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: theme.spacing.unit(2),
      gap: theme.spacing.unit(1),
      alignItems: 'center',
      flexDirection: 'column',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    } as TextStyle,
    cardType: {
      position: 'absolute',
      top: theme.spacing.unit(1),
      left: theme.spacing.unit(1),
      fontSize: theme.spacing.unit(1.5),
    },
  });

  const renderItem = ({item}: {item: CardData}) => {
    return (
      <ImageBackground
        source={require('@assets/backgrounds/card-bg.png')}
        style={styles.card}>
        <Typography
          style={StyleSheet.flatten([styles.cardType])}
          variant="dialogContent">
          {item.type}
        </Typography>
        {cardLocked && (
          <View style={StyleSheet.flatten([styles.lockMask])}>
            <Icon
              name="lock"
              size={theme.spacing.unit(3)}
              color={theme.color.background}
            />
            <Typography variant="whiteLabel">
              Your card has been temporarily locked
            </Typography>
          </View>
        )}
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        ref={carouselRef}
        data={CARDS}
        sliderWidth={width}
        itemWidth={theme.spacing.unit(32.5)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CardCarousel;
