import { betterAuth } from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma"
import { PrismaClient } from "@/generated/prisma";
import { nextCookies } from "better-auth/next-js";
import { sendEmail } from "@/lib/email";

const prisma = new PrismaClient()

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
      provider: 'postgresql'
    }),
    emailAndPassword: {
      enabled: true,  
      requireEmailVerification: true,
      autoSignIn: false,
    },
    emailVerification: {
      sendOnSignUp: true,
      autoSignInAfterVerification: true,
      sendVerificationEmail: async ({url, user}) => {
        await sendEmail(url, user)
      },
    },
    socialProviders: {
      google: {
        prompt: 'select_account',
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }
    },
    plugins: [nextCookies()]
})