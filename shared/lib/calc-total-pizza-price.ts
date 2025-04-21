import { Ingredient } from '@prisma/client';

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 * @param pizzaPrice - стоимость пиццы
 *
 * @returns number общую стоимость
 */
export const calcTotalPizzaPrice = (
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
  pizzaPrice: number
) => {
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, item) => acc + item.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
