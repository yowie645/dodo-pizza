import { ProductItem } from '@prisma/client';
import { pizzaSizes } from '@/shared/constants/pizza';

/**
 * Функция для получения доступных размеров пиццы
 *
 * @param items - список пицц
 * @returns Массив объектов, каждый из которых содержит:
 * - name: название размера пиццы
 * - value: значение размера пиццы
 * - disabled: доступен ли данный размер boolean
 */
export const getAvailablePizzaSizes = (items: ProductItem[]) => {
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !items.some((pizza) => pizza.size === Number(item.value)),
  }));
};
