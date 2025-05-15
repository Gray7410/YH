import { Text, TextSize } from "@/shared/ui/Text/Text";
import { Question } from "../../model/types/questionsSchema";
import cls from "./QuestionCard.module.scss";
import { useState } from "react";
import { Link } from "react-router";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";
import dropDownIcon from "@/shared/assets/dropdown.png";

interface QuestionCardProps {
  question?: Question;
}

export const QuestionCard = (props: QuestionCardProps) => {
  const { question } = props;
  const [isShow, setIsShow] = useState(false);

  const onToggleHandler = () => setIsShow(!isShow);

  console.log(question);

  return (
    <article className={cls.QuestionCard}>
      <div className={cls.titleWrapper}>
        <Text style={cls.title} size={TextSize.BODY5} text={question?.title} />
        <Button theme={ButtonTheme.CLEAR} onClick={onToggleHandler}>
          <Icon Svg={dropDownIcon} />
        </Button>
      </div>

      {isShow && (
        <>
          <ul className={cls.ParamList}>
            <li className={cls.ParamItem}>
              Рейтинг:<span>{question?.rate}</span>
            </li>
            <li className={cls.ParamItem}>
              Сложность:
              <span>{question?.complexity}</span>
            </li>
          </ul>
          {question?.imageSrc && (
            <img src={question?.imageSrc} alt={question?.title} />
          )}
          {question?.shortAnswer && (
            <div
              className={cls.Answer}
              dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
            />
          )}
          <Link to={`/${question?.id}`} className={cls.Link}>
            Подробнее
          </Link>
        </>
      )}
    </article>
  );
};
