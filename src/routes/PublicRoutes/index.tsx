import { Login } from '@/screen/Login';
import { Register } from '@/screen/Register';
import { createStackNavigator } from '@react-navigation/stack';


export type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
};

export function PublicRoutes() {
  const PublicStack = createStackNavigator<PublicStackParamsList>();

  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PublicStack.Screen name="Login" component={Login} />
      <PublicStack.Screen name="Register" component={Register} />
    </PublicStack.Navigator>
  );
}
