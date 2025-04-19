'use client';
import { cn } from '@/shared/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Api } from '@/shared/services/api-client';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  const variants = {
    hidden: { display: 'none', opacity: 0 },
    visible: { display: 'block', opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial='hidden'
        animate={focused ? 'visible' : 'hidden'}
        exit='hidden'
        variants={variants}
        transition={{ duration: 0.2 }}
        className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-20'
      />
      <main
        ref={ref}
        className={cn(
          'flex rounded-3xl flex-1 justify-between relative h-11 z-30',
          className
        )}>
        <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-500' />
        <input
          className='rounded-3xl outline-none w-full bg-gray-100 pl-11'
          type='text'
          placeholder='Найди свою пиццу...'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <section
            className={cn(
              'absolute w-full bg-gray-100 rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12'
            )}>
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className='w-full flex gap-3 items-center px-3 py-2 hover:bg-primary/10'
                href={`/product/${product.id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width={32}
                  height={32}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </section>
        )}
      </main>
    </>
  );
};
