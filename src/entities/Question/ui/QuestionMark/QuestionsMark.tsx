import cls from "./QuestionMark.module.scss";

interface QuestionMarkProps {
  label: string;
  value: string | number;
}

export const QuestionMark = (props: QuestionMarkProps) => {
  const { label, value } = props;
  return (
    <p className={cls.QuestionMark}>
      {label}: <span>{value}</span>
    </p>
  );
};
