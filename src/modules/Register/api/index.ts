import type { RegisterForm } from "@/modules/Register/models";

export const register = async (payload: RegisterForm) => {
  const request = await fetch("https://reqres.in/api/register", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const response = request.json();
  return response;
};
