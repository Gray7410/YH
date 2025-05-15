import { classNames } from "@/shared/lib/classNames/classNames";
import { SearchInput } from "@/shared/ui/SearchInput/SearchInput";
import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import cls from "./FilterPanel.module.scss";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { memo } from "react";
import { SpecializationSelect } from "@/entities/Specializition";
import { SkillsSelect } from "@/entities/Skill/ui/SkillsSelect/SkillsSelect";
import { ComplexitySelect } from "@/entities/Question/ui/ComplexitySelect/ComplexitySelect";
import { RateSelect } from "@/entities/Question/ui/RateSelect/RateSelect";

interface FilterPanelProps {
  title: string;
}

export const FilterPanel = memo((props: FilterPanelProps) => {
  const { title } = props;
  const { setTitle } = useQueryParams();

  const debouncedSearch = useDebounce((value: string) => setTitle(value), 800);

  return (
    <div className={classNames(cls.FilterPanel, {}, ["content"])}>
      <SearchInput
        placeholder="Введите запрос..."
        onSearch={debouncedSearch}
        currentSearch={title}
      />
      <SpecializationSelect />
      <SkillsSelect />
      <ComplexitySelect />
      <RateSelect />
    </div>
  );
});
