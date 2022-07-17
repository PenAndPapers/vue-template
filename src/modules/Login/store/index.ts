import { defineStore } from "pinia";
import type { LoginForm, LoginResponse } from "@/modules/Login/models";
import { login } from "@/modules/Login/api";
import { setSession } from "@/utils/session";
import router from "@/router";

interface StoreInterface {
  isRequestPending: boolean;
  isPageLoading: boolean;
}

export const useLoginStore = defineStore({
  id: "LoginStore",
  state: (): StoreInterface => ({
    isRequestPending: false,
    isPageLoading: false,
  }),
  getters: {
    _isRequestPending: (state) => state.isRequestPending,
    _isPageLoading: (state) => state.isPageLoading,
  },
  actions: {
    setReqestPending(payload: boolean) {
      this.isRequestPending = payload;
    },
    setPageLoading(payload: boolean) {
      this.isPageLoading = payload;
    },
    validateForm(payload: LoginForm) {
      const regex =
        /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      const errors = {} as LoginForm;
      if (!payload.email) errors.email = "Email is required";
      if (payload.email && regex.test(payload.email) === false)
        errors.email = "Email is invalid";
      if (!payload.password) errors.password = "Password is required";
      return errors;
    },
    async submitForm(payload: LoginForm) {
      if (payload.email && payload.password) {
        this.isRequestPending = true;
        const response: LoginResponse = await login(payload);
        this.isRequestPending = true;

        if (response && response.token) {
          setSession("_TOKEN_", response.token);
          router.replace({ name: "Home" });
        }
        return true;
      }

      return false;
    },
  },
});
