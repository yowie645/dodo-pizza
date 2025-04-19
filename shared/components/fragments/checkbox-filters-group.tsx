'use client';
import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  name?: string;
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  loading,
  onClickCheckbox,
  selected,
  name,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>
        {...[...new Array(limit)].map((_, index) => {
          return (
            <Skeleton
              key={index}
              className='h-8 mb-2.5 rounded-[8px]'
            />
          );
        })}
        <Skeleton className='w-28 h-8 mb-2.5 rounded-[8px]' />
      </div>
    );
  }
  return (
    <div className={className}>
      <p className='font-medium mb-3'>{title}</p>
      {showAll && (
        <div>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar mt-5'>
        {list.map((item, index) => (
          <FilterCheckbox
            name={name}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selected?.has(item.value)}
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? `border-t border-t-neutral-100 mt-4` : ``}>
          <button
            onClick={() => setShowAll(!showAll)}
            className='text-primary mt-3'>
            {showAll ? '- Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
