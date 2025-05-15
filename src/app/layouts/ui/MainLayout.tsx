import { Header } from "@/widgets/Header";
import { Outlet } from "react-router";
import cls from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={cls.MainLayout}>
        <Outlet />
      </main>
    </>
  );
};
