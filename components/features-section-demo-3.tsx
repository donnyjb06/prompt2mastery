"use client"

import { cn } from '@/lib/utils';
import {
  IconTrendingUp,
  IconBrain,
  IconBolt,
  IconCode,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Progressive Skill Tracking',
      description:
        'Watch your skills grow in real-time as you conquer AI-scored exercises and get personalized feedback.',
      icon: <IconTrendingUp />,
    },
    {
      title: 'AI-Generated Challenges',
      description:
        'From closures to recursion, our AI builds practice that adapts to your level — no tutorial hell here.',
      icon: <IconBrain />,
    },
    {
      title: 'Minimal Setup, Maximum Flow',
      description:
        'No installs, no distractions. Just a text box and your brain — the way practice should be.',
      icon: <IconBolt />,
    },
    {
      title: 'In-Browser Code Editor',
      description:
        'Practice directly in your browser with a smooth, integrated editor — no config, no friction.',
      icon: <IconCode />,
    },
  ]; 
  return (
    <section className='flex flex-col items-center gap-4'>
      <motion.h2 className='text-3xl font-bold' initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}}>Features</motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 max-w-7xl mx-auto'>
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{
        type: "tween",
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2
      }}
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && ' dark:border-neutral-800',
      )}>
      {index < 4 && (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
      )}
      {index >= 4 && (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
      )}
      <div className='mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400'>
        {icon}
      </div>
      <div className='text-lg font-bold mb-2 relative z-10 px-10'>
        <div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center' />
        <span className='group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100'>
          {title}
        </span>
      </div>
      <p className='text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10'>
        {description}
      </p>
    </motion.div>
  );
};
