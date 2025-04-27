import { CartItemDTO } from '../services/dto/cart-dto';

export const calcItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  return (ingredientsPrice + item.productItem.price) * item.quantity;
};
