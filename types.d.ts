import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

type LanguageVersion = {
  language: string;
  version: string;
};

export type { Props, LanguageVersion };
