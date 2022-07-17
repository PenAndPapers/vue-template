import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";
import "whatwg-fetch";

import { loginSuccessResponse, loginErrorResponse } from "@/mock/LoginResponse";
import {
  registerSuccessResponse,
  registerErrorResponse,
} from "@/mock/RegisterResponse";
import {
  userSuccessResponse,
  noDataSuccessResponse,
} from "@/mock/UsersResponse";

const loginAPI = "https://reqres.in/api/login";
const registerAPI = "https://reqres.in/api/register";
const usersApi = "https://reqres.in/api/users?";

export const restHandlers = [
  rest.post(loginAPI, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginSuccessResponse));
  }),
  rest.post(loginAPI, (req, res, ctx) => {
    return res(ctx.status(400), ctx.json(loginErrorResponse));
  }),
  rest.post(registerAPI, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(registerSuccessResponse));
  }),
  rest.post(registerAPI, (req, res, ctx) => {
    return res(ctx.status(400), ctx.json(registerErrorResponse));
  }),
  rest.get(usersApi, (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const response = page === "1" ? userSuccessResponse : noDataSuccessResponse;
    return res(ctx.status(200), ctx.json({ page, ...response }));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
