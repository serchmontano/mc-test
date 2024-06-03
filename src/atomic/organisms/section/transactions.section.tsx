import {View, ViewStyle, StyleSheet, FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import {getSortedTransactions} from '@app/utils/transactions.util';
import {Typography} from '@atomic/atoms/text';
import TextButton from '@atomic/molecules/button/text-button.component';
import {TRANSACTIONS} from 'src/mock/providers';
import TransactionItem from '@atomic/molecules/card/transaction-item.component';

interface Props {
  size: number;
  onViewMore: () => void;
}

const Transaction = ({size, onViewMore}: Props) => {
  const theme = useTheme();
  const transactions = getSortedTransactions(TRANSACTIONS, size);

  const styles = {
    container: {
      padding: theme.spacing.unit(3),
      gap: theme.spacing.unit(3),
      backgroundColor: theme.color.background,
    } as ViewStyle,
    fullHeight: {
      flex: 1,
    } as ViewStyle,
    headContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.color.grey100,
      paddingHorizontal: theme.spacing.unit(3),
      paddingVertical: theme.spacing.unit(1),
    } as ViewStyle,
  };

  return (
    <View style={StyleSheet.flatten([size === -1 && styles.fullHeight])}>
      <View style={StyleSheet.flatten([styles.headContent])}>
        <Typography variant="balanceContent" align="left">
          Recent Transactions
        </Typography>
        {size > 0 && (
          <TextButton
            text="View All"
            icon="chevron-right"
            onPress={onViewMore}
          />
        )}
      </View>
      <FlatList
        nestedScrollEnabled={true}
        data={transactions}
        renderItem={({item}) => <TransactionItem item={item} />}
        keyExtractor={(item, i) => `${item.business}-${i}`}
        style={{backgroundColor: theme.color.background}}
      />
    </View>
  );
};

export default Transaction;
