'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Category } from '@prisma/client';

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 262) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        'relative inline-flex items-center overflow-hidden',
        className
      )}>
      <motion.div
        className='absolute left-0'
        initial={{ x: -100, opacity: 0 }}
        animate={isScrolled ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}>
        <Image
          src='/dodo-logo.png'
          alt='logo'
          width={35}
          height={35}
        />
      </motion.div>
      <motion.div
        className='flex gap-6 items-center'
        initial={{ marginLeft: 0 }}
        animate={{ marginLeft: isScrolled ? '50px' : '0px' }}
        transition={{ duration: 0.3 }}>
        {items.map(({ name, id }, index) => (
          <a
            className={cn(
              'flex items-center font-bold text-sm py-3.5',
              categoryActiveId === id && 'text-primary'
            )}
            key={index}
            href={`/#${name}`}>
            <button>{name}</button>
          </a>
        ))}
      </motion.div>
    </div>
  );
};
