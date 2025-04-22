import { ProductItem } from '@prisma/client';
import { pizzaTypes, PizzaType } from '@/shared/constants/pizza';

/**
 * Функция для получения доступных типов пиццы
 *
 * @param items - список пицц
 * @param size - размер пиццы
 * @param availableTypesForSize - массив доступных типов пиццы для данного размера
 * @returns Массив объектов, каждый из которых содержит:
 * - name: название типа пиццы
 * - value: значение типа пиццы
 * - disabled: доступен ли данный тип boolean
 */
export const getAvailablePizzaTypes = (
  items: ProductItem[],
  size: number,
  availableTypesForSize: PizzaType[]
) => {
  return pizzaTypes.map((item) => {
    const pizzaTypeValue = Number(item.value) as PizzaType;
    return {
      name: item.name,
      value: item.value,
      disabled:
        (size === 25 && pizzaTypeValue === 2) ||
        !availableTypesForSize.includes(pizzaTypeValue),
    };
  });
};
