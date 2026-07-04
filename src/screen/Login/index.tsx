import { DimissKeyboardView } from '@/components/DismissKeyboard';

import { View } from 'react-native';
import { LoginForm } from './LoginForm';
import { AutHeader } from '@/components/AuthHeader';
import { useAuthContext } from '@/context/auth.context';

export function Login() {
  
  const { user } = useAuthContext();

  return (
    <DimissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AutHeader />
        <LoginForm />
      </View>
    </DimissKeyboardView>
  );
}
