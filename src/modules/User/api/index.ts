import type { UsersResponse, UserResponse } from "../models";

export const getUsers = async (
  payload: string | number
): Promise<UsersResponse> => {
  const request = await fetch(`https://reqres.in/api/users?page=${payload}`);
  const response = request.json();
  return response;
};

export const getUser = async (
  payload: string | number
): Promise<UserResponse> => {
  const request = await fetch(`https://reqres.in/api/users/${payload}`);
  const response = request.json();
  return response;
};
