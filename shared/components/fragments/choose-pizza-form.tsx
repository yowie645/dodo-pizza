'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';
import { GroupVariants } from './group-variants';
import { pizzaSizes } from '@/shared/constants/pizza';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { ProductItem } from '@prisma/client';
import { Ingredient } from '@prisma/client';

interface Props {
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  defaultImageUrl: {
    imageUrl: string;
  };
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  ingredients,
  items,
  defaultImageUrl,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(25);
  const [type, setType] = React.useState<PizzaType>(1);

  // текущий выбранный item по размеру
  const currentItem = items.find((item) => item.size === size) || items[0];

  const textDetails = `${size} см, ${
    type === 1 ? 'традиционное' : 'тонкое'
  } тесто`;
  const totalPrice = currentItem?.price?.toFixed(0) || '0';

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage
        imageUrl={currentItem.imageUrl || defaultImageUrl.imageUrl}
        size={size}
      />

      <div className='w-[490px] bg-[#fcfcfc] p-7'>
        <Title
          text={name}
          size='md'
          className='font-bold mb-1'
        />
        <p className='text-gray-400'>{textDetails}</p>

        <GroupVariants
          items={pizzaSizes}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSize)}
        />

        <Button
          onClick={onClickAdd}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
