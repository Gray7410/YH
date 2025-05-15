import { Link } from "react-router";
import LogoImage from "@/shared/assets/logo.png";
import { Text, TextSize, TextWeight } from "../Text/Text";
import cls from "./Logo.module.scss";

interface LogoProps {
  text?: string;
}

export const Logo = (props: LogoProps) => {
  const { text } = props;
  return (
    <>
      <Link to={"/"} className={cls.Logo}>
        <img src={LogoImage} alt="Logo" />
        {text && (
          <Text text={text} size={TextSize.BODY6} weight={TextWeight.BOLD} />
        )}
      </Link>
    </>
  );
};
