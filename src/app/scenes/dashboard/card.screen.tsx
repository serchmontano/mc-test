import {FC, useState} from 'react';
import {ViewStyle, StyleSheet, View, FlatList} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useTheme} from 'styled-components';
import {
  Balance,
  CardDetails,
  Payment,
  Transaction,
} from '@atomic/organisms/section';
import {StackScreenProps} from '@react-navigation/stack';
import {CardRoutes} from '@app/navigators/card.stack';
import {useDispatch, useSelector} from 'react-redux';
import {toggleShowDetails} from '@app/redux/slices/card.slice';
import {RootState} from '@app/redux/store';

type ScreenProps = StackScreenProps<CardRoutes, 'CardScreen'>;

const CardScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const showDetails = useSelector((state: RootState) => state.card.showDetails);
  const styles = {
    container: {
      flexGrow: 1,
      gap: theme.spacing.unit(2),
    } as ViewStyle,
    content: {
      gap: theme.spacing.unit(2),
    },
  };

  const onViewMoreTransactionsPress = () => {
    navigation.navigate('RecentTransactions');
  };
  const rnBiometrics = new ReactNativeBiometrics();
  const onCardDetailsPress = async () => {
    if (!showDetails) {
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
            dispatch(toggleShowDetails());
          } else {
            console.log('User cancelled biometric prompt');
          }
        } else {
          console.log('Biometric sensor not available');
          dispatch(toggleShowDetails());
        }
      } catch (error) {
        console.log('Biometric authentication error', error);
      }
    } else {
      dispatch(toggleShowDetails());
    }
  };

  const renderHeader = () => (
    <View style={styles.content}>
      <CardDetails
        showDetails={showDetails}
        onCardDetailsPress={onCardDetailsPress}
      />
      <Balance />
      <Payment />
    </View>
  );
  const renderTransacttionList = () => (
    <View>
      <Transaction size={3} onViewMore={onViewMoreTransactionsPress} />
    </View>
  );

  return (
    <FlatList
      nestedScrollEnabled={true}
      contentContainerStyle={StyleSheet.flatten([styles.container])}
      ListHeaderComponent={renderHeader}
      data={[]}
      renderItem={null}
      ListFooterComponent={renderTransacttionList}
    />
  );
};

export default CardScreen;
