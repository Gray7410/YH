import { NavbarItemType } from "../../model/types/navbar";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
  const navbarList: NavbarItemType[] = [
    {
      text: "База вопросов",
      path: "База вопросов",
    },
    {
      text: "Тренажер",
      path: "Тренажер",
    },
  ];

  const renderList = navbarList.map((item: NavbarItemType) => (
    <NavbarItem key={item.path} path={item.path} text={item.text} />
  ));

  return <ul className={cls.Navbar}>{renderList}</ul>;
};
