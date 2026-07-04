import { FormLoginParams } from '@/screen/Login/LoginForm';
import { dtMoneyApi } from '@/shared/api/dt-money';
import { IAuthenticateResponse } from '@/shared/interfaces/https/authenticate-response';

export async function Authenticate(
  userData: FormLoginParams,
): Promise<IAuthenticateResponse> {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    '/auth/login',
    userData,
  );
  return data;
}
