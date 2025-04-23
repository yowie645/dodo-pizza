import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { ingredients } from '@/prisma/constants';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn('group', className)}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 rounded-lg h-[310px]'>
          <Image
            width={300}
            height={300}
            className='max-w-[300px] h-auto object-cover transition duration-500 ease-in-out group-hover:translate-y-1'
            src={imageUrl}
            alt={name}
            unoptimized={true}
          />
        </div>
        <Title
          text={name}
          className='mb-1 mt-3 font-medium'
          size='sm'
        />
        <p className='text-sm text-gray-400'>
          {ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-xl'>от {price}</span>
          <Button
            variant='secondary'
            className='text-base font-medium'>
            <Plus
              size={20}
              className='mr-1'
            />{' '}
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
