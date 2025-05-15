import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Text, TextSize, TextWeight } from "../Text/Text";
import { SelectButton } from "../SelectButton/SelectButton";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  defaultValue?: string;
  chooseButton?: boolean;
  custom?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
    defaultValue,
    chooseButton = true,
    custom,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      )),
    [options]
  );

  const defaultSelect = (
    <select
      className={cls.select}
      value={value}
      onChange={onChangeHandler}
      disabled={readonly}
      defaultValue={defaultValue}
    >
      {chooseButton && (
        <option value={"default"} hidden>
          Выбрать
        </option>
      )}
      {optionsList}
    </select>
  );

  const customSelect = (
    <div className={cls.customOptions}>
      {options?.map((opt) => (
        <SelectButton
          key={opt.value}
          option={opt}
          onSelect={(value) => onChange?.(value)}
          currentValue={value}
        />
      ))}
    </div>
  );

  return (
    <div className={classNames(cls.Wrapper, {}, [className])}>
      {label && (
        <Text text={label} size={TextSize.BODY2} weight={TextWeight.REGULAR} />
      )}
      {custom ? customSelect : defaultSelect}
    </div>
  );
});
