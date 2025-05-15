import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import { Select } from "@/shared/ui/Select/Select";
import { useState } from "react";

export const RateSelect = () => {
  const [currentRate, setCurrentRate] = useState("");
  const { setRate } = useQueryParams();
  const COMPLEXITY__LIST = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  const onChangeRate = (value: string) => {
    setCurrentRate(value);
    setRate(value);
  };
  return (
    <>
      <Select
        label="Рейтинг"
        options={COMPLEXITY__LIST}
        value={currentRate}
        onChange={onChangeRate}
        custom
      />
    </>
  );
};
