import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {HorizontalGradient} from '@atomic/atoms/gradient';
import {
  CardControlsScreen,
  CardScreen,
  RecentTransactionsScreen,
} from '@app/scenes/dashboard';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@app/redux/store';
import {useTheme} from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {toggleShowDetails} from '@app/redux/slices/card.slice';

export type CardRoutes = {
  CardScreen: undefined;
  RecentTransactionsScreen: undefined;
  CardControlsScreen: undefined;
};

const Stack = createStackNavigator<CardRoutes>();

const CardStack = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const showDetails = useSelector((state: RootState) => state.card.showDetails);

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
          headerLeft: () => {
            if (showDetails) {
              return (
                <TouchableOpacity onPress={() => dispatch(toggleShowDetails())}>
                  <Icon name="close" size={24} color={theme.color.background} />
                </TouchableOpacity>
              );
            }
            return null;
          },
        }}
      />
      <Stack.Screen
        name="RecentTransactionsScreen"
        component={RecentTransactionsScreen}
        options={{
          headerTitle: 'Transactions',
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
        }}
      />
      <Stack.Screen
        name="CardControlsScreen"
        component={CardControlsScreen}
        options={{
          headerTitle: 'Card Controls',
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
