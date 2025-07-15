import {createAuthClient} from "better-auth/client";

export const authClient = createAuthClient({fetchOptions: {
  baseURL: process.env.BETTER_AUTH_URL,
  credentials: "include"
}})
