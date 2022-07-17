import { defineStore } from "pinia";

interface StoreInterface {
  isRequestPending: boolean;
  isPageLoading: boolean;
}

export const useHomeStore = defineStore({
  id: "HomeStore",
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
  },
});
