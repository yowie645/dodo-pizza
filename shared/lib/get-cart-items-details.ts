import { Ingredient } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: Ingredient[]
) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${pizzaSize} см, ${typeName} тесто`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(', ');
};
