import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {BALANCE} from 'src/mock/providers';
import {useTheme} from 'styled-components';
import ProgressBar from '../popup/progress-bar.component';
import {Typography} from '@atomic/atoms/text';
import {formatCurrency} from '@app/utils/currency.util';

const Balance = () => {
  const theme = useTheme();
  const styles = {
    container: {
      padding: theme.spacing.unit(3),
      gap: theme.spacing.unit(3),
      backgroundColor: theme.color.background,
    } as ViewStyle,
    balanceContainer: {
      gap: theme.spacing.unit(1),
    } as ViewStyle,
    balanceLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    } as ViewStyle,
  };
  const percentage =
    ((BALANCE.totalCredit - BALANCE.availableCredit) / BALANCE.totalCredit) *
    100;

  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <View style={StyleSheet.flatten([styles.balanceContainer])}>
        <Typography variant="balanceHeading">
          ${formatCurrency(BALANCE.totalCredit - BALANCE.availableCredit)}
        </Typography>
        <Typography variant="balanceLabel">Current Balance</Typography>
      </View>
      <ProgressBar percentage={percentage} color={theme.color.success} />
      <View style={StyleSheet.flatten([styles.balanceContainer])}>
        <View style={StyleSheet.flatten([styles.balanceLine])}>
          <Typography variant="balanceContent">Available Credit:</Typography>
          <Typography variant="balanceContent">
            ${formatCurrency(BALANCE.availableCredit)}
          </Typography>
        </View>
        <View style={StyleSheet.flatten([styles.balanceLine])}>
          <Typography variant="balanceContent">Total Credit Limit:</Typography>
          <Typography variant="balanceContent">
            ${formatCurrency(BALANCE.totalCredit)}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Balance;
