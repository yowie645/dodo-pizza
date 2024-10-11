import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-medium" />
      {/* first checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
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
        className="mt-5"
        limit={5}
        defaultItems={[
          { text: "Пряная грудинка", value: "1" },
          { text: "Моцарелла", value: "1" },
          { text: "Чеддер и пармезан", value: "1" },
          { text: "Халапенью", value: "1" },
          { text: "Нежный ципленок", value: "1" },
          { text: "Шампиньоны", value: "1" },
          { text: "Бекон", value: "1" },
          { text: "Ветчина", value: "1" },
          { text: "Пеперони", value: "1" },
          { text: "Чоризо", value: "1" },
          { text: "Маринованные огурчики", value: "1" },
          { text: "Свежие томаты", value: "1" },
          { text: "Красный лук", value: "1" },
          { text: "Сочные ананасы", value: "1" },
          { text: "Итальянские травы", value: "1" },
          { text: "Сладкий перец", value: "1" },
          { text: "Митболы", value: "1" },
          { text: "Баварские колбаски", value: "1" },
          { text: "Креветки", value: "1" },
        ]}
        items={[
          { text: "Пряная грудинка", value: "1" },
          { text: "Моцарелла", value: "1" },
          { text: "Чеддер и пармезан", value: "1" },
          { text: "Халапенью", value: "1" },
          { text: "Нежный ципленок", value: "1" },
          { text: "Шампиньоны", value: "1" },
          { text: "Бекон", value: "1" },
          { text: "Ветчина", value: "1" },
          { text: "Пеперони", value: "1" },
          { text: "Чоризо", value: "1" },
          { text: "Маринованные огурчики", value: "1" },
          { text: "Свежие томаты", value: "1" },
          { text: "Красный лук", value: "1" },
          { text: "Сочные ананасы", value: "1" },
          { text: "Итальянские травы", value: "1" },
          { text: "Сладкий перец", value: "1" },
          { text: "Митболы", value: "1" },
          { text: "Баварские колбаски", value: "1" },
          { text: "Креветки", value: "1" },
        ]}
      />
    </div>
  );
};
