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
      requireEmailVerification: true
    },
    emailVerification: {
      sendOnSignUp: true,
      autoSignInAfterVerification: true,
      sendVerificationEmail: async ( { user, token }) => {
        const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackUrl=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`

        await sendEmail({to: user.email, subject: "Verify your email address", text: `Click the link to verify your email address: ${verificationUrl}`})
      }
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }
    },
    plugins: [nextCookies()]
})