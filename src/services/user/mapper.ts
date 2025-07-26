/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SignupFormData, SignupResponseData } from "@dtos/signup";

export function mapSignupRequestData (requestData: SignupFormData) {
  return {
    name: requestData.name,
    surname: requestData.surname,
    email: requestData.email,
    password: requestData.password,
    password_confirm: requestData.confirmPassword,
  }
}

export function mapSignupResponseData (responseData: any): SignupResponseData {
  return {
    id: responseData.id,
    email: responseData.email,
    name: responseData.name,
    surname: responseData.surname,
    passwordHash: responseData.password_hash,
    isActive: responseData.is_active,
    token: responseData.token,
    tokenExpiration: responseData.token_expiration,
    createdAt: responseData.created_at,
    createdBy: responseData.created_by,
    updatedAt: responseData.updated_at,
    updatedBy: responseData.updated_by,
    deletedAt: responseData.deleted_at,
    deletedBy: responseData.deleted_by,
  };
}