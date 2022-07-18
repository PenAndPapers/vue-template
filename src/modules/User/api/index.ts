import requestor from "@/utils/requestor";
import type { UsersResponse, UserResponse } from "../models";

export const getUsers = async (
  payload: string | number
): Promise<UsersResponse> => {
  const response = await requestor(`/users?page=${payload}`);
  return response;
};

export const getUser = async (
  payload: string | number
): Promise<UserResponse> => {
  const response = await requestor(`/users/${payload}`);
  return response;
};
