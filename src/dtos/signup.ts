import type { BaseEntity } from '@dtos/baseEntity'; 

export type SignupFormData = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignupResponseData = BaseEntity & {
  name: string;
  surname: string;
  email: string;
  passwordHash: string | null;
  isActive: string | null;
  token: string | null;
  tokenExpiration: string | null;
};