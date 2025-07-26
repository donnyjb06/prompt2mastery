'use client';

import { FC } from 'react';
import Link from 'next/link';
import FormField from '../FormField/FormField';
import { Button } from '../ui/button';
import PasswordRequirements from '../PasswordRequirements/PasswordRequirements';
import ValidationError from '../ValidationError/ValidationError';
import { PulseLoader } from 'react-spinners';
import { useAuth } from '@/hooks/useAuth';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const isLoginForm = type === 'login';
  const { loading, control, errors, onSubmit } = useAuth(isLoginForm);

  return (
    <div className='flex flex-col gap-4 rounded-md px-8 py-16 bg-card items-center'>
      <h2 className='text-2xl font-black'>
        {isLoginForm ? 'Welcome back' : 'Create an account'}
      </h2>
      <form onSubmit={onSubmit} className='flex flex-col gap-2 self-stretch'>
        {isLoginForm ?
          <>
            <FormField
              name='email'
              label='Email Address'
              control={control}
              type='text'
              className={errors.email ? 'text-red-400' : ''}></FormField>
            <FormField
              name='password'
              label='Password'
              control={control}
              className={errors.password ? 'text-red-400' : ''}
              type='password'></FormField>
          </>
        : <>
            <FormField
              name='name'
              control={control}
              type='text'
              label='Full Name'>
              className={errors.name ? 'text-red-400' : ''}
              <ValidationError error={errors.name?.message} />
            </FormField>
            <FormField
              name='email'
              label='Email Address'
              control={control}
              type='text'
              className={errors.email ? 'text-red-400' : ''}>
              <ValidationError error={errors.email?.message} />
            </FormField>
            <FormField
              name='password'
              label='Password'
              control={control}
              type='password'
              className={errors.name ? 'text-red-400' : ''}>
              <PasswordRequirements control={control} />
            </FormField>
          </>
        }
        <Button
          type='submit'
          size='default'
          variant='default'
          disabled={loading}
          className='bg-sidebar-primary text-foreground cursor-pointer hover:bg-muted-foreground hover:scale-105 active:scale-95 mt-5'>
          {loading ?
            <PulseLoader
              color='#ffffff'
              size={8}
              loading={loading}
              aria-label='Loading Spinner'
            />
          : isLoginForm ?
            'Log in'
          : 'Sign up'}
        </Button>
      </form>

      <div className='flex gap-2'>
        <p>
          {isLoginForm ?
            "Don't have an account yet?"
          : 'Already have an account?'}
        </p>
        <Link className='font-bold' href={isLoginForm ? '/register' : '/login'}>
          {isLoginForm ? 'Sign up' : 'Log in'}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
