import { Email } from "@/components/Email/Email";
import { Session } from "@/utils/auth/auth-client";
import { User } from "lucide-react";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (url: string, user: Session) => {
  await resend.emails.send({
    from: process.env.NEXT_PUBLIC_EMAIL_FROM as string,
    to: [user.email],
    subject: "Verify your email",
    react: Email({url, name: user.name})
  })
}