import { DimissKeyboardView } from '@/components/DismissKeyboard';
import { PublicStackParamsList } from '@/routes/PublicRoutes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LoginForm } from './LoginForm';

export function Login() {
  return (
    <DimissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <LoginForm/>
      </View>
    </DimissKeyboardView>
  );
}
