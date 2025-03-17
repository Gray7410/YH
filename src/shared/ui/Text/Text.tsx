import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import "./";

enum TextSize {
  BODY1 = "Body1",
  BODY2 = "Body2",
  BODY3 = "Body3",
  BODY4 = "Body4",
  BODY5 = "Body5",
  BODY6 = "Body6",
}

interface TextProps {
  text?: string;
  size?: TextSize;
}

export const Text = (props: TextProps) => {
  const { text, size = TextSize.BODY1 } = props;

  const mods: Mods = {
    [cls[size]]: true,
  };

  return <p className={classNames(cls.Text, mods, ["className"])}>{text}</p>;
};
