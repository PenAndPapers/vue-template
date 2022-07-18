import requestor from "@/utils/requestor";
import type { RegisterForm } from "@/modules/Register/models";

export const register = async (payload: RegisterForm) => {
  const response = await requestor("/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response;
};
