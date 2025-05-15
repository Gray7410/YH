import { ChangeEvent, useState } from "react";
import { Input } from "../Input/Input";
import cls from "./SearchInput.module.scss";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";

interface SearchInputProps {
  placeholder?: string;
  currentSearch: string;
  onSearch: (searchValue: string) => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const { placeholder, currentSearch, onSearch } = props;

  const [searchValue, setSearchValue] = useState(currentSearch || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e?.target?.value);
    onSearch(e?.target?.value);
  };

  return (
    <Input
      placeholder={placeholder}
      value={searchValue}
      onChange={handleChange}
      className={cls.SearchInput}
    />
  );
};
