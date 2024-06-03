import {formatCurrency} from '@app/utils/currency.util';
import {WebAvatar} from '@atomic/atoms/avatar';
import {Typography} from '@atomic/atoms/text';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';

type Transaction = {
  business: string;
  businessLogo: string;
  date: string;
  amount: number;
  reward: number;
};

interface Props {
  item: Transaction;
  [key: string]: any;
}

const TransactionItem = ({item, ...pros}: Props) => {
  const theme = useTheme();
  const styles = {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.unit(3),
      paddingVertical: theme.spacing.unit(2),
      borderBottomWidth: theme.spacing.unit(0.1),
      borderBottomColor: theme.color.disabled,
    } as ViewStyle,
    businessContainer: {
      flexDirection: 'row',
      gap: theme.spacing.unit(1.5),
    } as ViewStyle,
  };

  return (
    <TouchableOpacity {...pros} style={StyleSheet.flatten([styles.container])}>
      <View style={StyleSheet.flatten([styles.businessContainer])}>
        <WebAvatar url={item.businessLogo} size={5} />
        <View>
          <Typography variant="transactionHeading" align="left">
            {item.business}
          </Typography>
          <Typography variant="transactionLabel" align="left">
            {item.date}
          </Typography>
        </View>
      </View>
      <View>
        <Typography variant="transactionHeading" align="right">
          ${formatCurrency(item.amount)}
        </Typography>
        <Typography variant="transactonLink" align="right">
          +{item.reward} pts
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
