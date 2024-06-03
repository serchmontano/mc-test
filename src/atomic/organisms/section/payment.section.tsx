import {formatCurrency} from '@app/utils/currency.util';
import {Typography} from '@atomic/atoms/text';
import {OutlinedButton} from '@atomic/molecules/button';
import Divider from '@atomic/molecules/divider/divider.component';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {PAYMENT} from 'src/mock/providers';
import {useTheme} from 'styled-components';

const Payment = () => {
  const theme = useTheme();
  const styles = {
    container: {
      padding: theme.spacing.unit(3),
      gap: theme.spacing.unit(3),
      backgroundColor: theme.color.background,
    } as ViewStyle,
    amountsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    } as ViewStyle,
    amounts: {
      width: '49%',
      gap: theme.spacing.unit(1),
    } as ViewStyle,
  };

  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <Typography variant="paymentPrimaryHeading">
        Payment Due in {PAYMENT.paymentDue} Day(s)
      </Typography>
      <View style={StyleSheet.flatten([styles.amountsContainer])}>
        <View style={StyleSheet.flatten([styles.amounts])}>
          <Typography variant="label">Statement Balance</Typography>
          <Typography variant="modalTitle">
            ${formatCurrency(PAYMENT.statementBalance)}
          </Typography>
        </View>
        <Divider />
        <View style={StyleSheet.flatten([styles.amounts])}>
          <Typography variant="label">Minimum Payment</Typography>
          <Typography variant="modalTitle">
            ${formatCurrency(PAYMENT.miniumPayment)}
          </Typography>
        </View>
      </View>
      <OutlinedButton action={() => {}}>Make a payment</OutlinedButton>
    </View>
  );
};

export default Payment;
