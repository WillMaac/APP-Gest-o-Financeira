import { DimissKeyboardView } from '@/components/DismissKeyboard';
import { PublicStackParamsList } from '@/routes/PublicRoutes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export function Login() {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();
  return (
    <DimissKeyboardView>
      <Text>Tela de login</Text>
      <TextInput className="bg-gray-500 w-full" />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </DimissKeyboardView>
  );
}
