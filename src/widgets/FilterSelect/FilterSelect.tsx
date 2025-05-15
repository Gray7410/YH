import { ErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Api } from "@reduxjs/toolkit/query";
import { TypedUseQuery } from "@reduxjs/toolkit/query/react";
import { useState } from "react";

interface FilterSelectProps {
  showOptions?: number;
  api: Api;
}

export const FilterSelect = (props: FilterSelectProps) => {
  const { showOptions, api } = props;

  const [showAll, setShowAll] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  const {
    data: skills,
    isLoading,
    error,
  } = api({
    limit: showAll ? undefined : showOptions,
  });

  console.log("skills", skills);

  const { setSkills } = useQueryParams();

  if (error) return <ErrorMessage description="Не удалось загрузить" />;

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
