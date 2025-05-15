import { Text, TextSize } from "@/shared/ui/Text/Text";
import cls from "./ErrorMessage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ErrorMessageProps {
  title?: string;
  description?: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { title, description } = props;

  return (
    <div className={classNames(cls.ErrorMessage, {}, ["content"])}>
      <Text size={TextSize.BODY6} text={title} />
      <Text size={TextSize.BODY3} text={description} />
    </div>
  );
};
