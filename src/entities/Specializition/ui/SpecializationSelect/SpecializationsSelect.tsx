import { Select } from "@/shared/ui/Select/Select";
import { useGetSpecializationsQuery } from "../../model/api/specializationsApi";
import { Specialization } from "../../model/types/specializationsSchema";
import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { Loader } from "@/shared/ui/Loader/Loader";
import { useState } from "react";
import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import cls from "./SpecializationsSelect.module.scss";

export const SpecializationSelect = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentSpecialization, setCurrentSpecialization] = useState("");

  const DEFEAULT_OPTIONS_TO_SHOW = 5;
  const {
    data: specializations,
    isLoading,
    error,
  } = useGetSpecializationsQuery({
    limit: showAll ? undefined : DEFEAULT_OPTIONS_TO_SHOW,
  });

  const { setSpecialization } = useQueryParams();

  if (error)
    return <ErrorMessage description="Ошибка при загрузке специализаций" />;

  if (isLoading) return <Loader />;

  const options = specializations?.data?.map(
    (specialization: Specialization) => {
      return {
        label: specialization?.title,
        value: specialization?.id,
      };
    }
  );

  const onChangeHandler = (value: string) => {
    setSpecialization(value);
    setCurrentSpecialization(value);
  };

  return (
    <>
      <Select
        options={options}
        chooseButton={false}
        label="Специализация"
        value={currentSpecialization}
        onChange={(value) => onChangeHandler(value)}
        custom
      />
      {!showAll && specializations.total > 5 && (
        <Button theme={ButtonTheme.CLEAR} onClick={() => setShowAll(true)}>
          <Text text="Посмотреть все" style={cls.showButton} />
        </Button>
      )}
    </>
  );
};
