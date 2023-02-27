import { Button as ButtonAntd } from "antd";
import { MouseEvent } from "react";
import { TButtonProps } from "./button.types";

const Button = ({ className, onClick, children }: TButtonProps) => {
  const handleOnClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <ButtonAntd onClick={handleOnClick} className={className}>
      {children}
    </ButtonAntd>
  );
};

export default Button;
