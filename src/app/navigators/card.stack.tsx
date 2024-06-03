import {createStackNavigator} from '@react-navigation/stack';

import {HorizontalGradient} from '@atomic/atoms/gradient';
import {CardScreen, RecentTransactions} from '@app/scenes/dashboard';

export type CardRoutes = {
  CardScreen: undefined;
  RecentTransactions: undefined;
};

const Stack = createStackNavigator<CardRoutes>();

const CardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CardScreen"
        component={CardScreen}
        options={{
          headerTitle: 'Card',
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
        }}
      />
      <Stack.Screen
        name="RecentTransactions"
        component={RecentTransactions}
        options={{
          headerTitle: 'Transactions',
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CardStack;
