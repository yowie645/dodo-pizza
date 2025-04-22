import { ProductItem } from '@prisma/client';

/**
 * Функция для получения текущего элемента пиццы по размеру и типу
 *
 * @param items - список пицц
 * @param size - размер пиццы
 * @param type - тип пиццы
 * @param defaultImageUrl - URL изображения по умолчанию, если пицца не найдена
 * @returns Объект текущего элемента пиццы, соответствующий заданным размеру и типу,
 *          или объект с изображением по умолчанию, размером 30 см, типом 1 и ценой 0,
 *          если пицца не найдена
 */
export const getCurrentPizzaItem = (
  items: ProductItem[],
  size: number,
  type: number,
  defaultImageUrl: string
) => {
  return (
    items.find((item) => item.size === size && item.pizzaType === type) || {
      imageUrl: defaultImageUrl,
      size: 30,
      pizzaType: 1,
      price: 0,
    }
  );
};
