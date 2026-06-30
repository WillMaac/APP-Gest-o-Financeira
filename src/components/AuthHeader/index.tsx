import { useKeyboardVisible } from '@/shared/hooks/useKeyboardVisible';
import { Image, View } from 'react-native';

export function AutHeader() {
  const keyboardIsVisibe = useKeyboardVisible();

  if(keyboardIsVisibe) return <></>
  return (
    <View className="items-center justify-center w-full min-h-40">
      <Image source={require('@/assets/Logo.png')} 
      className="h-[48px] w-[255px]"
      />
    </View>
  );
}
