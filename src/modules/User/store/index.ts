import { defineStore } from "pinia";
import { getUser, getUsers } from "../api";
import type { User } from "../models";

interface StoreInterface {
  isRequestPending: boolean;
  isPageLoading: boolean;
  users: User[];
  user: User | null;
}

export const useUserStore = defineStore({
  id: "UserStore",
  state: (): StoreInterface => ({
    isRequestPending: false,
    isPageLoading: false,
    users: [],
    user: null,
  }),
  getters: {
    _isRequestPending: (state) => state.isRequestPending,
    _isPageLoading: (state) => state.isPageLoading,
    _users: (state) => state.users,
    _user: (state) => state.user,
  },
  actions: {
    setReqestPending(payload: boolean) {
      this.isRequestPending = payload;
    },
    setPageLoading(payload: boolean) {
      this.isPageLoading = payload;
    },
    async getUsers(payload: string | number) {
      this.users = [];
      this.isRequestPending = true;
      const response = await getUsers(payload);
      this.isRequestPending = false;
      if (response.data && response.data.length) {
        this.users = response.data;
      }
    },
    async getUser(payload: string | number) {
      this.user = null;
      this.isRequestPending = true;
      const response = await getUser(payload);
      this.isRequestPending = false;
      if (response.data) {
        this.user = response.data;
      }
    },
  },
});
