import type { LoginForm } from "@/modules/Login/models";

export const login = async (payload: LoginForm) => {
  const request = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const response = request.json();
  return response;
};
