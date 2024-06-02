import {createStackNavigator} from '@react-navigation/stack';

import {HorizontalGradient} from '@atomic/atoms/gradient';
import { OnboardingDashboardScreen } from '@app/scenes/onboarding';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerTitle: 'Empty Stack',
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingDashboardScreen}
        options={{
          headerTitle: 'Onboarding',
          headerTintColor: 'white',
          headerBackground: () => (
            <HorizontalGradient style={{width: '100%', height: '100%'}} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
