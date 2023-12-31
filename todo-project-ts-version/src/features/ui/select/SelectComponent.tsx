import { memo, useState } from "react";
import {
  DropDownBackground,
  DropDownBox,
  DropDownErrorText,
  DropDownItem,
  DropDownLabel,
  DropDownMenu,
  DropDownTrigger,
} from "./SelectStyle";
import { SelectProps } from "./SelectInterface";

const Select = memo(({ name, options, value, error, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => {
    setIsOpen(true);
    onChange({ name, value: "" });
  };

  const onDownSelect = (option: string) => {
    setIsOpen(false);
    onChange({ name, value: option });
  };

  return (
    <DropDownBox>
      <DropDownLabel>{name}</DropDownLabel>
      <DropDownTrigger error={error} onClick={onOpenSelect}>
        {value || "chose option"}
      </DropDownTrigger>
      {isOpen && (
        <>
          <DropDownBackground onClick={() => onDownSelect("")} />
          <DropDownMenu>
            {options.map((option, index) => (
              <DropDownItem key={index} onClick={() => onDownSelect(option)}>
                {option}
              </DropDownItem>
            ))}
          </DropDownMenu>
        </>
      )}
      <DropDownErrorText>{error}</DropDownErrorText>
    </DropDownBox>
  );
});

export { Select };
