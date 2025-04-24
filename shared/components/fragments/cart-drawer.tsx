'use client';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '../ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetails } from '@/shared/lib';

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
        <SheetHeader>
          <SheetTitle>
            1 товар <span className='font-bold'>на 919 ₽</span>
          </SheetTitle>
        </SheetHeader>

        <div className='-mx-6 mt-5 overflow-auto flex-1 scrollbar'>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={
                'https://media.dodostatic.net/image/r:292x292/019589a573477186898528944fd881a2.avif'
              }
              details={getCartItemDetails(2, 30, [
                { name: 'ципленок' },
                { name: 'сыр' },
              ])}
              name={'Зокс пидорокс'}
              price={419}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className='-mx-6 bg-white p-8'>
          <div className='w-full'>
            <div className='flex mb-4'>
              <span className='flex flex-1 text-lg text-neutral-500'>
                Итог
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'></div>
              </span>
              <span className='font-bold text-lg'>520 ₽</span>
            </div>
            <Link href={'/cart'}>
              <Button
                type='submit'
                className='w-full h-12 text-base'>
                Перейти в корзину
                <ArrowRight className='w-5 ml-2' />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
