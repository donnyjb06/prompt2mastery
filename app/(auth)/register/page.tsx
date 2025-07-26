import AuthForm from '@/components/AuthForm/AuthForm'
import { auth } from '@/utils/auth/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth.api.getSession({
      headers: await headers()
    })
  
    if (session) {
      redirect("/dashboard")
    }
  return (
    <main className='auth-screen'><AuthForm type='register'/></main>
  )
}

export default page