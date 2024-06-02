import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CardStack from './card.stack';
import {StackScreenProps} from '@react-navigation/stack';
import {RootRoutes} from '@app/Navigation';
import {MoreScreen, PMFScreen, RewardScreen} from '@app/scenes/dashboard';
import {HorizontalGradient} from '@atomic/atoms/gradient';

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
      <BottomTab.Screen name="Home" component={CardStack} />
      <BottomTab.Screen
        name="Rewards"
        component={RewardScreen}
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
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
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTab;
