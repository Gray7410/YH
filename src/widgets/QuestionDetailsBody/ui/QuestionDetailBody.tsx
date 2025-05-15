import cls from "./QuestionDetailsBody.module.scss";
import { Text, TextSize, TextWeight } from "@/shared/ui/Text/Text";
import { classNames } from "@/shared/lib/classNames/classNames";

interface QuestionDetailsBodyProps {
  shortAnswer: string;
  longAnswer: string;
  imageSrc?: string;
  title: string;
  description: string;
}

export const QuestionDetailsBody = (props: QuestionDetailsBodyProps) => {
  const { shortAnswer, longAnswer, imageSrc, title, description } = props;
  return (
    <div className={cls.QuestionDetailsBody}>
      <section className={classNames(cls.Header, {}, ["content"])}>
        {imageSrc && <img src={imageSrc} alt={title} />}
        <div className={cls.HeaderInfo}>
          <Text text={title} size={TextSize.BODY6} weight={TextWeight.MEDIUM} />
          <Text
            text={description}
            size={TextSize.BODY3}
            weight={TextWeight.MEDIUM}
          />
        </div>
      </section>
      {shortAnswer && (
        <section className={classNames(cls.Block, {}, ["content"])}>
          <Text
            text="Краткий ответ"
            size={TextSize.BODY5}
            weight={TextWeight.MEDIUM}
          />
          <div
            className={cls.shortAnswer}
            dangerouslySetInnerHTML={{ __html: shortAnswer }}
          />
        </section>
      )}
      {longAnswer && (
        <section className={classNames(cls.Block, {}, ["content"])}>
          <Text
            text="Развёрнутый ответ"
            size={TextSize.BODY5}
            weight={TextWeight.MEDIUM}
          />
          <div
            className={cls.shortAnswer}
            dangerouslySetInnerHTML={{ __html: longAnswer }}
          />
        </section>
      )}
    </div>
  );
};
