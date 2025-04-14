import { cn } from '@/lib/utils';
import React from 'react';
import { Categories, Container } from '@/components/fragments';
import { ArrowRight, ShoppingBasket } from 'lucide-react';
import { Button } from '../ui';
import { Category } from '@prisma/client';

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white/75 backdrop-blur-lg py-1 shadow-lg shadow-black/5 z-10',
        className
      )}>
      <Container className='items-center flex justify-between'>
        <Categories items={categories} />
        <Button className='group relative'>
          <b>520 ₽</b>
          <span className='h-full w-[1px] bg-white/30 mx-3' />
          <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
            <ShoppingBasket
              size={16}
              className='h-4 w-4 relative'
              strokeWidth={2}
            />
            <b>3</b>
          </div>
          <ArrowRight
            size={20}
            className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0'
          />
        </Button>
      </Container>
    </div>
  );
};
