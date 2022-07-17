import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useLoginStore } from "./index";

const email = "eve.holt@reqres.in";
const password = "cityslicka";
const invalidEmails = [
  "plainaddress",
  "#@%^%#$@#$@#.com",
  "@example.com",
  "Joe Smith <email@example.com>",
  "email.example.com",
  "email@example@example.com",
  ".email@example.com",
  "email.@example.com",
  "email..email@example.com",
  "あいうえお@example.com",
  "email@example.com (Joe Smith)",
  "email@example",
  "email@-example.com",
  "email@111.222.333.44444",
  "email@example..com",
  "Abc..123@example.com",
  "email@_example.com",
];

describe("Login Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("should return email is required", () => {
    const store = useLoginStore();
    const errorMsg = store.validateForm({ email: "", password });
    expect(errorMsg.email).toBe("Email is required");
  });

  it("should return password is required", () => {
    const store = useLoginStore();
    const errorMsg = store.validateForm({ email, password: "" });
    expect(errorMsg.password).toBe("Password is required");
  });

  it("should return email and password is required", () => {
    const store = useLoginStore();
    const errorMsg = store.validateForm({ email: "", password: "" });
    expect(errorMsg).toStrictEqual({
      email: "Email is required",
      password: "Password is required",
    });
  });

  invalidEmails.forEach((email) => {
    it("should return email is invalid", () => {
      const store = useLoginStore();
      const errorMsg = store.validateForm({ email, password });
      expect(errorMsg.email).toBe("Email is invalid");
    });
  });

  it("should return an empty object when both email and password are provided", () => {
    const store = useLoginStore();
    const errorMsg = store.validateForm({ email, password });
    expect(errorMsg).toStrictEqual({});
  });

  it("should not submit when email is empty", async () => {
    const store = useLoginStore();
    const form = await store.submitForm({ email: "", password });
    expect(form).toBeFalsy();
  });

  it("should not submit when password is empty", async () => {
    const store = useLoginStore();
    const form = await store.submitForm({ email, password: "" });
    expect(form).toBeFalsy();
  });

  it("should not submit when email and password are empty", async () => {
    const store = useLoginStore();
    const form = await store.submitForm({ email: "", password: "" });
    expect(form).toBeFalsy();
  });

  it("should submit when email and password are provided", async () => {
    const store = useLoginStore();
    const form = await store.submitForm({ email, password });
    expect(form).toBeTruthy();
  });
});
