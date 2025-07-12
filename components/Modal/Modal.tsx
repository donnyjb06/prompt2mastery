import React, { ComponentProps, FC } from 'react';
import { Props } from '@/types';

const Modal: FC<Props> = ({children}) => {
  return (
    <div className='absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 flex justify-center items-stretch p-5'>
      {children}
    </div>
  );
};

export default Modal;
