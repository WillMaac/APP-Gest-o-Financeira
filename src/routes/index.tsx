import { Login } from '@/screen/Login';
import { Register } from '@/screen/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
};

export function NavigationRoutes() {
  const PublicStack = createStackNavigator<PublicStackParamsList>();
  return (
    <NavigationContainer>
      <PublicStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <PublicStack.Screen name="Login" component={Login} />
        <PublicStack.Screen name="Register" component={Register} />
      </PublicStack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRoutes;
