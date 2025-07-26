import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { generateAuthSchema } from '@/lib/utils';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { loginUser, registerUser } from '@/actions/auth.general';

export const useAuth = (isLoginForm: boolean) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrlParam = searchParams.get('callbackUrl') || '/dashboard';
  const callbackUrl = decodeURIComponent(callbackUrlParam);
  const formSchema = generateAuthSchema();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const { name, email, password } = data;
      
      if (isLoginForm) {
        const res = await loginUser({ email, password });
        if (res.error) {
          toast.error(res.error);
          return;
        }
        toast.success(res.message)
        router.push(callbackUrl)
        return
      }

      if (!name) {
        toast.error('Missing name field');
        return;
      }
      const res = await registerUser({ name, email, password });
      if (res.error) {
        toast.error(res.error);
        return;
      }
      toast.success(res.message);
      router.push(callbackUrl);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  });

  return { errors, onSubmit, loading, control };
};
