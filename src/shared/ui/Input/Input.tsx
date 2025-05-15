import { ChangeEvent, InputHTMLAttributes, memo, useRef } from "react";
import cls from "./Input.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text/Text";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  readonly?: boolean;
  error?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    label,
    readonly,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <Text text={label} />
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value}
        onChange={handleChange}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
