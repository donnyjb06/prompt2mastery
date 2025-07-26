import {createAuthClient} from "better-auth/client";

export const authClient = createAuthClient({fetchOptions: {
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  credentials: "include",
}})

export type Session = typeof authClient.$Infer.Session.user