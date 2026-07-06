import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { FormLoginParams } from '@/screen/Login/LoginForm';
import { FormRegisterParams } from '@/screen/Register/RegisterForm';
import * as authService from '@/shared/services/dtMoney/auth.service';
import { IUser } from '@/shared/interfaces/https/user-interface';

type AuthContextType = {
  user: IUser | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleAuthenticate = async (userData: FormLoginParams) => {
    const { token, user } = await authService.Authenticate(userData);
    console.log(token, user);

    setUser(user);
    setToken(token);
  };

  const handleRegister = async (formData: FormRegisterParams) => {};

  const handleLogout = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleAuthenticate,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
