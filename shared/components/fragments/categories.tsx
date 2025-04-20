'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import Image from 'next/image';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Category } from '@prisma/client';

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 262);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.substring(1);
    const category = items.find((item) => item.name === hash);
    if (category) {
      useCategoryStore.setState({ activeId: category.id });
    }
  }, [items]);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  const handleClick = (id: number, name: string) => {
    useCategoryStore.setState({ activeId: id });
    window.location.hash = name;
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const topOffset = 60;
      window.scrollBy({
        top: -topOffset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const elements = items.map((item) => document.getElementById(item.name));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = items.find(
              (item) => item.name === entry.target.id
            );
            if (category) {
              useCategoryStore.setState({ activeId: category.id });
            }
          }
        });
      },
      { rootMargin: '0px 0px -90% 0px' }
    );

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [items]);

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
        {items.map(({ name, id }) => (
          <a
            className={cn(
              'flex items-center font-bold text-sm py-3.5',
              categoryActiveId === id && 'text-primary'
            )}
            key={id}
            href={`/#${name}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(id, name);
            }}>
            <button>{name}</button>
          </a>
        ))}
      </motion.div>
    </div>
  );
};
