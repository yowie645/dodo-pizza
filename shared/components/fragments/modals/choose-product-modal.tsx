'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem?.pizzaType);

  useEffect(() => {
    if (product) {
      setIsOpen(true);
      router.push(`/product/${product.id}`);
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
          'p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden',
          className
        )}>
        {isPizzaForm ? (
          <ChoosePizzaForm
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            defaultImageUrl={product} // добавлено для дефолтного изображения если нет разных изображений для размеров, передается весь продукт, сделать более красиво
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
