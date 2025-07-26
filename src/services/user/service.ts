import type { LoginData, LoginResponseData } from "@dtos/login";
import type { SignupFormData, SignupResponseData } from "@dtos/signup";
import { apiClient } from "@services/apiClient";
import {
  mapLoginResponseData,
  mapSignupRequestData,
  mapSignupResponseData,
} from '@services/user/mapper';

export async function signupUser(data: SignupFormData): Promise<SignupResponseData> {
  const reqData = mapSignupRequestData(data);

  try {
    const { data } = await apiClient.post('/user', reqData);

    return mapSignupResponseData(data);
  }catch(error){
    throw new Error((error as Error).message)
  }
}

export async function authUser(data: LoginData): Promise<LoginResponseData> {
  const reqData = data;

  try {
    const { data } = await apiClient.post('/user/auth', reqData)

    return mapLoginResponseData(data);
  }catch(error){
    throw new Error((error as Error).message);
  }
}