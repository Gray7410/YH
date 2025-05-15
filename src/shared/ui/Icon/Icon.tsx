import { classNames } from "@/shared/lib/classNames/classNames";
import React, { memo } from "react";
import cls from "./Icon.module.scss";

interface IconProps {
  className?: string;
  altText?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>> | string;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, altText } = props;

  if (typeof Svg === "string") {
    return (
      <img
        src={Svg}
        className={classNames(cls.Icon, {}, [className])}
        alt={altText}
      />
    );
  }

  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
