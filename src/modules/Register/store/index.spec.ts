import { beforeEach, describe, it, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useRegisterStore } from "./index";

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

describe("Validate Form", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should return both email and password is required", () => {
    const store = useRegisterStore();
    const errorMsg = store.validateForm({ email: "", password: "" });
    expect(errorMsg).toStrictEqual({
      email: "Email is required",
      password: "Password is required",
    });
  });

  it("should return that email is required", () => {
    const store = useRegisterStore();
    const errorMsg = store.validateForm({ email: "", password });
    expect(errorMsg.email).toBe("Email is required");
  });

  it("should return password is required", () => {
    const store = useRegisterStore();
    const errorMsg = store.validateForm({ email, password: "" });
    expect(errorMsg.password).toBe("Password is required");
  });

  invalidEmails.forEach((email) => {
    it("shold return that email is invalid", () => {
      const store = useRegisterStore();
      const errorMsg = store.validateForm({ email, password });
      expect(errorMsg.email).toBe("Email is invalid");
    });
  });

  it("should return an empty object when both email and password are provided", () => {
    const store = useRegisterStore();
    const errorMsg = store.validateForm({ email, password });
    expect(errorMsg).toStrictEqual({});
  });

  it("should return false email is empty", async () => {
    const store = useRegisterStore();
    const form = await store.submitForm({ email: "", password });
    expect(form).toBeFalsy();
  });

  it("should return false when password is empty", async () => {
    const store = useRegisterStore();
    const form = await store.submitForm({ email, password: "" });
    expect(form).toBeFalsy();
  });

  it("should return false when both email and password are empty", async () => {
    const store = useRegisterStore();
    const form = await store.submitForm({ email: "", password: "" });
    expect(form).toBeFalsy();
  });

  it("should submit when email and password are provided", () => {
    const store = useRegisterStore();
    const form = store.submitForm({ email, password });
    expect(form).toBeTruthy();
  });
});
