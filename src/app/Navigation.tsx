import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HorizontalGradient} from '@atomic/atoms/gradient';

import {OnboardingDashboardScreen} from './scenes/onboarding';
import {AppBottomTab} from './navigators';

export type RootRoutes = {
  Onboarding: undefined;
  App: undefined;
};

const Stack = createStackNavigator<RootRoutes>();

const Navigation: React.FC = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'Root Header Title',
        }}
        initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingDashboardScreen}
          options={{
            headerTitle: 'Onboarding',
            headerTintColor: 'white',
            headerBackground: () => (
              <HorizontalGradient style={{width: '100%', height: '100%'}} />
            ),
          }}
        />
        <Stack.Screen
          name="App"
          component={AppBottomTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
