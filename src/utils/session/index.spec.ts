import { describe, it, expect } from "vitest";
import { setSession, getSession, removeSession, clearSession } from "./index";

describe("User session", () => {
  const key = "_SESSION_";
  const token = "ALzF8dar8U8kXPn";

  it("stores a session", () => {
    setSession(key, token);
    expect(sessionStorage.length).toBe(1);
  });

  it("gets the session", () => {
    expect(getSession(key)).toBe(token);
  });

  it("remove then session", () => {
    expect(removeSession(key)).toBeNull();
  });

  it("clear session storage", () => {
    setSession("key1", "1");
    setSession("key2", "2");
    setSession("key4", "3");
    clearSession();
    expect(sessionStorage.length).toBe(0);
  });
});
