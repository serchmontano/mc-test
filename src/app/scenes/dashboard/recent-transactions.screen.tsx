import {FC} from 'react';
import {CardRoutes} from '@app/navigators/card.stack';
import {StackScreenProps} from '@react-navigation/stack';
import {Transaction} from '@atomic/organisms/section';

type ScreenProps = StackScreenProps<CardRoutes, 'RecentTransactionsScreen'>;
const RecentTransactionsScreen: FC<ScreenProps> = ({navigation}) => {
  return <Transaction size={-1} onViewMore={() => {}} />;
};

export default RecentTransactionsScreen;
