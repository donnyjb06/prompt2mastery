import { NextRequest, NextResponse } from 'next/server';
import { generateAuthSchema } from '@/lib/utils';
import { auth } from '@/utils/auth/auth';
import { APIError } from 'better-auth/api';

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, password } = await req.json();

    const schema = generateAuthSchema();
    const parser = schema.safeParse({ email, password });

    if (!parser.success) {
      return NextResponse.json({
        error: 'Invalid user credentials',
        status: 401,
      });
    }

    await auth.api.signInEmail({
      body: {email, password} 
    });

    return NextResponse.json({message: "Login successful! Welcome back!", status: 200})
  } catch (error) {
    if (error instanceof APIError) {
      return NextResponse.json({error: error.body?.message, status: 401})
    }

    return NextResponse.json({error: "Unknown error occured", status: 500})
  }
};
