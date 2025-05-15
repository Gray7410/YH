import { ReactNode } from "react";
import cls from "./QuestionMarkList.module.scss";

interface QuestionMarkListProps {
  children: ReactNode;
}

export const QuestionMarkList = (props: QuestionMarkListProps) => {
  const { children } = props;
  return <div className={cls.QuestionMarkList}>{children}</div>;
};
