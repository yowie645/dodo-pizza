'use client';
import { cn } from '@/shared/lib/utils';
import React from 'react';

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};
interface Props {
  items: readonly Variant[];
  onClick?: (value: Variant['value']) => void;
  selectedValue?: Variant['value'];
  className?: string;
}

export const GroupVariants: React.FC<Props> = ({
  items,
  onClick,
  selectedValue,
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        'flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none'
      )}>
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex items-center justify-center cursor-pointer px-5 flex-1 h-[30px] rounded-3xl transition-all duration-500 text-sm',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 cursor-not-allowed': item.disabled,
            }
          )}>
          {item.name}
        </button>
      ))}
    </div>
  );
};
