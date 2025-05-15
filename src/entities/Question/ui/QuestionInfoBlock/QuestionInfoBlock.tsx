import { ReactNode } from "react";
import cls from "./QuestionInfoBlock.module.scss";

interface QuestionInfoBlockProps {
  label?: string;
  children: ReactNode;
}
export const QuestionInfoBlock = (props: QuestionInfoBlockProps) => {
  const { label, children } = props;

  return (
    <div className={cls.QuestionInfoBlock}>
      <p className={cls.label}>{label}: </p>
      {children}
    </div>
  );
};
