'use client';

import { generateExercises } from '@/gemini/generateExercises';
import { useState } from 'react';

export default function Home() {
  const [concept, setConcept] = useState<string>('');
  const [amount, setAmount] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleClick = async () => {
    setIsLoading(true);
    const res = await generateExercises(amount, concept);
    if (!res) {
      return;
    }
    const obj = JSON.parse(res);
    console.log(obj);
    setIsLoading(false);
  };
  return (
    <>
      <h1 className='font-bold text-2xl'>Enter a concept</h1>

      <input
        type='text'
        className='bg-white text-black'
        onChange={(event) => setConcept(event.target.value)}
        value={concept}
      />
      <div className='mt-5'>
        <p className='text-white'>{amount}</p>
        <input
          type='range'
          className='accent-amber-100'
          min={1}
          max={5}
          step={1}
          onChange={(event) => setAmount(parseInt(event.target.value, 10))}
          value={amount}
        />
      </div>
      <button
        type='button'
        className='text-primary'
        onClick={handleClick}
        disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </>
  );
}
