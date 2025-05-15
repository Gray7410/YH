import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { useGetSkillsQuery } from "../../model/api/skillsApi";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Skill } from "../../model/types/skillsSchema";
import { useState } from "react";
import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import { Select } from "@/shared/ui/Select/Select";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import cls from "./SkillsSelect.module.scss";

export const SkillsSelect = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentSkill, setCurrentSkill] = useState("");

  const DEFEAULT_OPTIONS_TO_SHOW = 5;
  const {
    data: skills,
    isLoading,
    error,
  } = useGetSkillsQuery({
    limit: showAll ? undefined : DEFEAULT_OPTIONS_TO_SHOW,
  });

  const { setSkills } = useQueryParams();

  if (error)
    return <ErrorMessage description="Ошибка при загрузке специализаций" />;

  if (isLoading) return <Loader />;

  const options = skills?.data?.map((skill: Skill) => {
    return {
      label: skill?.title,
      value: skill?.id,
    };
  });

  const onChangeHandler = (value: string) => {
    setSkills(value);
    setCurrentSkill(value);
  };

  return (
    <>
      <Select
        options={options}
        chooseButton={false}
        label="Навыки"
        value={currentSkill}
        onChange={(value) => onChangeHandler(value)}
        custom
      />
      {!showAll && skills.total > 5 && (
        <Button theme={ButtonTheme.CLEAR} onClick={() => setShowAll(true)}>
          <Text text="Посмотреть все" style={cls.showButton} />
        </Button>
      )}
    </>
  );
};
