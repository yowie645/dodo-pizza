'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';
import { GroupVariants } from './group-variants';
import { ProductItem } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { Ingredient } from '@prisma/client';
import { useSet } from 'react-use';
import {
  calcTotalPizzaPrice,
  getAvailablePizzaSizes,
  getAvailablePizzaTypes,
  getAvailableTypesForSize,
  getCurrentPizzaItem,
  getPizzaDetailsText,
  usePizzaTypeEffect,
} from '@/shared/lib';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';

interface Props {
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  defaultImageUrl: {
    imageUrl: string;
  };
  onClickAddCart: () => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  ingredients,
  items,
  defaultImageUrl,
  onClickAddCart,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(30);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet<number>(
    new Set([])
  );

  const availableTypesForSize = React.useMemo(
    () => getAvailableTypesForSize(items, size),
    [items, size]
  );

  const currentItem = getCurrentPizzaItem(
    items,
    size,
    type,
    defaultImageUrl.imageUrl
  );

  const isCurrentTypeAvailable = availableTypesForSize.includes(type);

  usePizzaTypeEffect(isCurrentTypeAvailable, availableTypesForSize, setType);

  const availablePizzaSizes = getAvailablePizzaSizes(items);
  const availablePizzaTypes = getAvailablePizzaTypes(
    items,
    size,
    availableTypesForSize
  );

  const totalPrice = calcTotalPizzaPrice(
    ingredients,
    selectedIngredients,
    currentItem.price
  );

  const textDetails = getPizzaDetailsText(size, type);

  const handleClickAdd = () => {
    onClickAddCart();
  };

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage
        imageUrl={currentItem.imageUrl}
        size={size}
      />

      <div className='w-[490px] bg-[#fcfcfc] p-7'>
        <Title
          text={name}
          size='md'
          className='font-bold mb-1'
        />
        <p className='text-gray-400'>{textDetails}</p>

        <div className='flex flex-col gap-2 mt-5'>
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={availablePizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
          <div className='grid grid-cols-3 gap-4'>
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                onClick={() => toggleIngredients(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
