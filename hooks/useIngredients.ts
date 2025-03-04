import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import React from 'react';
import { useSet } from 'react-use';

type IngredientItem = Pick<Ingredient, 'id' | 'name'>;

interface ReturnProps {
  ingredients: IngredientItem[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<
    ReturnProps['ingredients']
  >([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedIds, { toggle }] = useSet(new Set<string>(values));

  React.useEffect(() => {
    async function fetchgetIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(
          ingredients.map((ingredient) => ({
            id: ingredient.id,
            name: ingredient.name,
          }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchgetIngredients();
  }, []);

  return {
    ingredients,
    loading,
    onAddId: toggle,
    selectedIngredients: selectedIds,
  };
};
