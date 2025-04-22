import { useEffect } from 'react';
import { PizzaType } from '@/shared/constants/pizza';

/**
 * Хук для управления типом пиццы в зависимости от доступности текущего типа
 *
 * @param isCurrentTypeAvailable - флаг, указывающий, доступен ли текущий тип пиццы
 * @param availableTypesForSize - массив доступных типов пиццы для текущего размера
 * @param setType - функция для установки типа пиццы
 *
 * Этот хук проверяет, доступен ли текущий тип пиццы. Если он недоступен и есть доступные типы
 * для текущего размера, то устанавливается первый доступный тип из массива.
 */
export const usePizzaTypeEffect = (
  isCurrentTypeAvailable: boolean,
  availableTypesForSize: PizzaType[],
  setType: (type: PizzaType) => void
) => {
  useEffect(() => {
    if (!isCurrentTypeAvailable && availableTypesForSize.length > 0) {
      setType(availableTypesForSize[0]);
    }
  }, [isCurrentTypeAvailable, availableTypesForSize, setType]);
};
