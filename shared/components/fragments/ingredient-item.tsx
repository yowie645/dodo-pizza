import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center flex-col p-1 rounded-md w-32 text-center cursor-pointer shadow-md bg-white',
        { 'border border-primary': active },
        className
      )}>
      {active && (
        <CircleCheck className='absolute top-2 right-2 text-primary' />
      )}
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
      />
      <span className='text-sm mb-1'>{name}</span>
      <span className='font-bold'>{price} ₽</span>
    </div>
  );
};
