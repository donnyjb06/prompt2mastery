import { cn } from '@/lib/utils';
import React from 'react';
import { Control, useWatch } from 'react-hook-form';
import { CiCircleCheck } from 'react-icons/ci';
import { CiCircleRemove } from 'react-icons/ci';

interface PasswordRequirementsProps {
  control: Control<any>;
  name?: string;
  className?: string
}

const checkRules = (password: string) => {
  return {
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    minLength: password.length >= 8,
  };
};

const PasswordRequirements = ({
  control,
  name = 'password',
  className
}: PasswordRequirementsProps) => {
  const password = useWatch({ control, name });
  const rules = checkRules(password)

  const renderRequirement = (label: string, valid: boolean) => (
    <li
      key={label}
      className={`flex items-center gap-2 text-sm ${
        valid ? 'text-green-200' : 'text-red-400'
      }`}>
      {valid ? <CiCircleCheck size={16} /> : <CiCircleRemove size={16} />}
      {label}
    </li>
  );

  return (
    <ul className={cn('list-none', className)}>
      {renderRequirement("At least 8 characters", rules.minLength)}
      {renderRequirement("Contains a lowercase letter", rules.hasLower)}
      {renderRequirement("Contains a uppercase letter", rules.hasUpper)}
      {renderRequirement("Contains a number", rules.hasNumber)}
      {renderRequirement("Contains a special character", rules.hasSpecial)}
    </ul>
  )
};

export default PasswordRequirements;
