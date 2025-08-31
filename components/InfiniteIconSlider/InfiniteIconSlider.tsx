import { LanguageToolTip } from '@/types';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import JavaOriginal from 'devicons-react/icons/JavaOriginal';
import CplusplusOriginal from 'devicons-react/icons/CplusplusOriginal';
import CsharpOriginal from 'devicons-react/icons/CsharpOriginal';
import GoOriginal from 'devicons-react/icons/GoOriginal';
import RubyOriginal from 'devicons-react/icons/RubyOriginal';
import RustOriginal from 'devicons-react/icons/RustOriginal';
import ScalaOriginal from 'devicons-react/icons/ScalaOriginal';
import IconToolTip from '../IconToolTip/IconToolTip';
import { useMemo } from 'react';
import { InfiniteSlider } from '../ui/infinite-slider';

const InfiniteIconSlider = () => {
  const LANGUAGE_ICONS: LanguageToolTip[] = useMemo(
    () => [
      {
        language: 'Javascript',
        icon: <JavascriptOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'Typescript',
        icon: <TypescriptOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'Python',
        icon: <PythonOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'Java',
        icon: <JavaOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'C/C++',
        icon: <CplusplusOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'C#',
        icon: <CsharpOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'Go',
        icon: <GoOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'Ruby',
        icon: <RubyOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'Rust',
        icon: <RustOriginal color='var(--foreground)' size='50' />,
      },
      {
        language: 'Scala',
        icon: <ScalaOriginal color='var(--foreground)' size='50' />,
      },
    ],
    [],
  );

  return (
    <InfiniteSlider gap={50} className='z-50' speedOnHover={20}>
      {LANGUAGE_ICONS.map((language) => (
        <IconToolTip languageDetails={language} />
      ))}
    </InfiniteSlider>
  );
};

export default InfiniteIconSlider;
