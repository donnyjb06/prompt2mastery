import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/utils/auth/auth';
import { generateAuthSchema } from '@/lib/utils';
import { APIError } from 'better-auth/api';

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { email, password, name } = await req.json();

    const schema = generateAuthSchema();
    const parsed = schema.safeParse({ email, password, name });

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid body', status: 400 });
    }

    await auth.api.signUpEmail({
      body: { email, password, name },
    });

    return NextResponse.json({
      message: 'Please verify your email address',
      status: 201,
    });
  } catch (error) {
    if (error instanceof APIError) {
      return NextResponse.json({
        error: error.body?.message,
        status: 400,
      });
    }

    return NextResponse.json({
      error: 'An unknown error has occured',
      status: 500,
    });
  }
};
