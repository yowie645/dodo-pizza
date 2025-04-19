import { cn } from '@/lib/utils';
import React from 'react';
import { ProductImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  const textDetaills = '30 см, традиционное тесто 30';
  const totalPrice = '350';
  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage
        imageUrl={imageUrl}
        size={30}
      />
      <div className='w-[490px] bg-[#fcfcfc] p-7'>
        <Title
          text={name}
          size='md'
          className='font-bold mb-1'
        />
        <p className='text-gray-400'>{textDetaills}</p>
        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
