import { getSession } from "@/utils/session";

export default () => {
  if (getSession("_TOKEN_")) return true;
  else return false;
};
