import React from 'react';

interface Props {
  className?: string;
}

export const ProductImage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <img
        src={imageUrl}
        alt=''
        className={cn('relative left-2 top-2 transition-all z-10 duration-300')}
      />
    </div>
  );
};
