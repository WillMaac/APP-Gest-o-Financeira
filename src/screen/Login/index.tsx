import { DimissKeyboardView } from '@/components/DismissKeyboard';

import {  View } from 'react-native';
import { LoginForm } from './LoginForm';
import { AutHeader } from '@/components/AuthHeader';

export function Login() {
  return (
    <DimissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AutHeader/>
        <LoginForm/>
      </View>
    </DimissKeyboardView>
  );
}
