import { Logo } from "@/shared/ui/Logo/Logo";
import { Navbar } from "@/widgets/Navbar/ui/Navbar/Navbar";
import cls from "./Header.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export const Header = () => {
  return (
    <header className={cls.Header}>
      <div className={classNames(cls.HeaderWrapper, {}, ["container"])}>
        <Logo text="Yeahub" />
        <Navbar />
      </div>
    </header>
  );
};
