import {createAuthClient} from "better-auth/client";
import {organizationClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  plugins: [
    organizationClient()
  ]
})

export type Session = typeof authClient.$Infer.Session.user