import { cn } from '@/shared/lib/utils';
import React from 'react';
import {
  CartButton,
  Categories,
  Container,
} from '@/shared/components/fragments';
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
        <CartButton />
      </Container>
    </div>
  );
};
