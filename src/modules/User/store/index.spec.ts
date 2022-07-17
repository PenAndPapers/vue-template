import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "./index";

describe("User Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("should get paginated users", async () => {
    const store = useUserStore();
    await store.getUsers(1);
    const users = store._users;
    console.log(users);
    expect(users).toHaveLength(6);
  });

  it("should return an empty users", async () => {
    const store = useUserStore();
    await store.getUsers(3);
    const users = store._users;
    expect(users).toEqual([]);
  });
});
