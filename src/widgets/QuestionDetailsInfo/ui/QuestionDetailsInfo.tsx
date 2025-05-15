import cls from "./QuestionDetailsInfo.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select } from "@/shared/ui/Select/Select";
import { Skill } from "@/entities/Skill";
import { Link } from "react-router";
import {
  QuestionInfoBlock,
  QuestionMark,
  QuestionMarkList,
} from "@/entities/Question";

interface QuestionDetailsInfoProps {
  complexity: number;
  rate: number;
  questionSkills: Skill[];
  keywords: string[];
}

export const QuestionDetailsInfo = (props: QuestionDetailsInfoProps) => {
  const { complexity, rate, questionSkills, keywords } = props;

  const questionSkillsList = questionSkills.map((skill) => ({
    label: skill.title,
    value: String(skill.id),
  }));

  const renderKeywords = keywords.map((keyword) => (
    <Link to={""} className={cls.keyword}>{`#${keyword}`}</Link>
  ));

  return (
    <div className={classNames(cls.QuestionDetailsInfo, {}, ["content"])}>
      <QuestionInfoBlock label="Уровень">
        <QuestionMarkList>
          <QuestionMark label="Сложность" value={complexity} />
          <QuestionMark label="Рейтинг" value={rate} />
        </QuestionMarkList>
      </QuestionInfoBlock>
      <QuestionInfoBlock label="Навыки">
        <Select options={questionSkillsList} chooseButton={false} custom />
      </QuestionInfoBlock>
      <QuestionInfoBlock label="Ключевые слова">
        {renderKeywords}
      </QuestionInfoBlock>
    </div>
  );
};
