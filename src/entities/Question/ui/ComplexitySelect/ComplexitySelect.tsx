import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import { Select } from "@/shared/ui/Select/Select";
import { useState } from "react";

export const ComplexitySelect = () => {
  const [currentComplexity, setCurrentComplexity] = useState("");
  const { setComplexity } = useQueryParams();
  const COMPLEXITY__LIST = [
    { label: "1-3", value: "1,2,3" },
    { label: "4-6", value: "4,5,6" },
    { label: "7-8", value: "7,8" },
    { label: "9-10", value: "9,10" },
  ];
  const onChangeComplexity = (value: string) => {
    setCurrentComplexity(value);
    setComplexity(value);
  };
  return (
    <>
      <Select
        label="Уровень сложности"
        options={COMPLEXITY__LIST}
        value={currentComplexity}
        onChange={onChangeComplexity}
        custom
      />
    </>
  );
};
