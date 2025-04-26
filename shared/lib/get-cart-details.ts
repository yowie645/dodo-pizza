import { Cart } from '@prisma/client';
import { CartState } from '../store/cart';

interface ReturnProps {
  items: CartState[];
  totalAmount: number;
}

export const getCartDetails = (data: Cart) => {
  return;
};
