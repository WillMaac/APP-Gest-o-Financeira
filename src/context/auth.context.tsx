import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { FormLoginParams } from '@/screen/Login/LoginForm';
import { FormRegisterParams } from '@/screen/Register/RegisterForm';

type AuthContextType = {
  user: null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);

  const handleAuthenticate = async ({ email, password }: FormLoginParams) => {};

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
