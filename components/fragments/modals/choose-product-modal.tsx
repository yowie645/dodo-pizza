'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const firstItem = product?.items?.[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  useEffect(() => {
    if (product) {
      setIsOpen(true);
      router.push(`/product/${product.id}`); // модальное окно открывалось но url при этом не обновлялся, это решение выглядит как костыль, позже исправлю
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
        {isPizzaForm ? (
          'pizza'
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={[]}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
