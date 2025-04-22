import { ProductItem } from '@prisma/client';
import { PizzaType } from '@/shared/constants/pizza';

/**
 * Функция для получения доступных типов пиццы для заданного размера
 *
 * @param items - список пицц
 * @param size - размер пиццы
 * @returns Массив доступных типов пиццы (PizzaType) для указанного размера
 */
export const getAvailableTypesForSize = (
  items: ProductItem[],
  size: number
): PizzaType[] => {
  const types = new Set<PizzaType>();
  items.forEach((item) => {
    if (item.size === size && (item.pizzaType === 1 || item.pizzaType === 2)) {
      types.add(item.pizzaType);
    }
  });
  return Array.from(types);
};
