import { DimissKeyboardView } from '@/components/DismissKeyboard';
import { Text, View } from 'react-native';
import { RegisterForm } from './RegisterForm';
import { AutHeader } from '@/components/AuthHeader';

export function Register() {
  return (
    <DimissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AutHeader/>
<RegisterForm/>
      </View>
    </DimissKeyboardView>
  );
}
