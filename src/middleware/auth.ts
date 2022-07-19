import { getSession } from "@/utils/session";

export const isAuthenticated = () => {
  if (getSession("_TOKEN_")) return true;
  else return false;
};
