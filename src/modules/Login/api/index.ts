import requestor from "@/utils/requestor";
import type { LoginForm } from "@/modules/Login/models";

export const login = async (payload: LoginForm) => {
  const response = await requestor("/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response;
};
