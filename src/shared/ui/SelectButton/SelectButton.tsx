import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";
import { SelectOption } from "../Select/Select";
import cls from "./SelectButton.module.scss";
import { Text, TextSize } from "../Text/Text";

interface SelectButtonProps {
  option: SelectOption;
  onSelect: (e: string) => void;
  currentValue?: string;
  disabled?: boolean;
}

export const SelectButton = (props: SelectButtonProps) => {
  const { option, onSelect, currentValue, disabled } = props;

  const mods: Mods = {
    [cls.selected]: currentValue === option.value,
    [cls.disabled]: disabled,
  };
  return (
    <Button
      onClick={() => onSelect(option.value)}
      theme={ButtonTheme.OUTLINE}
      className={classNames(cls.SelectButton, mods)}
    >
      <Text text={option.label} size={TextSize.BODY3} />
    </Button>
  );
};
