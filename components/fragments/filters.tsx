"use client";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-medium" />
      {/* first checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="sss" text="Можно собирать" value="1" />
        <FilterCheckbox name="asd" text="Новинки" value="2" />
      </div>
      {/* slider */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-normal mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="6000" min={6000} max={6000} />
        </div>
        <RangeSlider min={0} max={6000} step={10} value={[0, 6000]} />
      </div>
      {/* second checkboxes */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
