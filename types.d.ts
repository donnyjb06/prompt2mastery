import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
}

type LanguageVersion = {
  language: string;
  version: string;
};

interface IFormInputs {
  name?: string;
  email: string;
  password: string;
}

export type { Props, LanguageVersion, IFormInputs };
