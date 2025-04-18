'use client';
import React, { useEffect, useState } from 'react';
import { Product } from '@prisma/client';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import { useRouter } from 'next/navigation';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setIsOpen(true);
      router.push(`/product/${product.id}`); // проблема модальное окно открывалось но url при этом не обновлялся выглядит как костыль, позже исправлю
    }
  }, [product, router]);

  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}>
        <h1>{product.name}</h1>
      </DialogContent>
    </Dialog>
  );
};
