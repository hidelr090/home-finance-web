import type { SignupFormData, SignupResponseData } from "@dtos/signup";
import { apiClient } from "@services/apiClient";
import {
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