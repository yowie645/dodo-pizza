import { PizzaType } from '@/shared/constants/pizza';

/**
 * Функция для отображения деталей пиццы
 *
 * @param size - размер пиццы в сантиметрах
 * @param type - тип пиццы (1 - традиционное тесто, 2 - тонкое тесто)
 * @returns Строку, содержащую описание деталей пиццы (размер и тип теста)
 */
export const getPizzaDetailsText = (size: number, type: PizzaType): string => {
  return `${size} см, ${type === 1 ? 'традиционное' : 'тонкое'} тесто`;
};
