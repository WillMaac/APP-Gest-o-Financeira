import { PropsWithChildren} from 'react';
import {
    Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = PropsWithChildren;

export function DimissKeyboardView({ children }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <TouchableNativeFeedback
      onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
        behavior="padding"
        className="flex-1" >
          <ScrollView>{children}</ScrollView>
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}
