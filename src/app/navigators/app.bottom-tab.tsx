import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StackScreenProps} from '@react-navigation/stack';
import {RootRoutes} from '@app/Navigation';
import {MoreScreen, PMFScreen, RewardScreen} from '@app/scenes/dashboard';
import {HorizontalGradient} from '@atomic/atoms/gradient';
import CardStack from './card.stack';

export type AppRoutes = {
  Home: undefined;
  Rewards: undefined;
  PFM: undefined;
  More: undefined;
};

const BottomTab = createBottomTabNavigator<AppRoutes>();

type ScreenProps = StackScreenProps<RootRoutes, 'App'>;

const AppBottomTab: React.FC<ScreenProps> = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#E35205'}}>
      <BottomTab.Screen
        name="Home"
        component={CardStack}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Rewards"
        component={RewardScreen}
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
          tabBarIcon: ({color}) => <Icon name="gift" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PFM"
        component={PMFScreen}
        options={{
          headerTitle: 'Personal Finance Manager',
          headerShown: true,
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
          tabBarIcon: ({color}) => (
            <Icon name="chart-line" size={20} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
          tabBarIcon: ({color}) => (
            <Icon name="dots-horizontal" size={20} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTab;
