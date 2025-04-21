export const mapPizzaSize = {
  25: '25 см',
  30: '30 см',
  35: '35 см',
} as const;

export const mapPizzaType = {
  1: 'Традиционное',
  2: 'Тонкое',
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  value,
  name,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  value,
  name,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
