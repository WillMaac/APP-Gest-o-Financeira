import { DimissKeyboardView } from '@/components/DismissKeyboard';

import {  View } from 'react-native';
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
