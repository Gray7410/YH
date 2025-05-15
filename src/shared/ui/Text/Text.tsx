import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

interface TextProps {
  text?: string;
  size?: TextSize;
  weight?: TextWeight;
  style?: any;
}

export enum TextSize {
  BODY1 = "Body1",
  BODY2 = "Body2",
  BODY3 = "Body3",
  BODY4 = "Body4",
  BODY5 = "Body5",
  BODY6 = "Body6",
}

export enum TextWeight {
  REGULAR = "Regular",
  MEDIUM = "Medium",
  SEMIBOLD = "SemiBold",
  BOLD = "Bold",
}

export const Text = (props: TextProps) => {
  const {
    text,
    size = TextSize.BODY1,
    weight = TextWeight.REGULAR,
    style,
  } = props;

  const mods: Mods = {
    [cls[size]]: true,
    [cls[weight]]: true,
  };

  return <p className={classNames(cls.Text, mods, [style])}>{text}</p>;
};
