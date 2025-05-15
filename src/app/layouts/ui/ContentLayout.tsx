import { Header } from "@/widgets/Header";
import { Outlet } from "react-router";
import cls from "./ContentLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export const ContentLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
