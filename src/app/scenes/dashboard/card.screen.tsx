import {FC, useState} from 'react';
import {ViewStyle, StyleSheet, View, FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import {
  Balance,
  CardDetails,
  Payment,
  Transaction,
} from '@atomic/organisms/section';
import {StackScreenProps} from '@react-navigation/stack';
import {CardRoutes} from '@app/navigators/card.stack';

type ScreenProps = StackScreenProps<CardRoutes, 'CardScreen'>;

const CardScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);
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
  const onCardDetailsPress = () => {
    setShowDetails(!showDetails);
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
