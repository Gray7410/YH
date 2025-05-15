import { Link } from "react-router";
import { NavbarItemType } from "../../model/types/navbar";
import cls from "./NavbarItem.module.scss";
import { Text, TextSize, TextWeight } from "@/shared/ui/Text/Text";

export const NavbarItem = (props: NavbarItemType) => {
  const { path, text } = props;
  return (
    <li className={cls.NavbarItem} key={path}>
      <Link to={path}>
        <Text text={text} weight={TextWeight.MEDIUM} size={TextSize.BODY3} />
      </Link>
    </li>
  );
};
