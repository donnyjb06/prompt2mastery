import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

import React from 'react';
import { Props } from '@/types';

interface FormFieldProps<T extends FieldValues> extends Props {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  className?: string
}

function FormField<T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  children,
  type,
  className
}: FormFieldProps<T>) {
  return (
    <>
      <label className={cn('flex flex-col gap-2', className)}>{label}
        <Controller
          control={control}
          name={name}
          render={({ field }) => <Input {...field} placeholder={placeholder} type={type}/>}
        />
      </label>
      {children}
    </>
  );
}

export default FormField;
