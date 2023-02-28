import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ButtonType } from "antd/lib/button";
import { EButtonStyleType } from "./Button.enums";

export type TButtonProps = {
  className?: string;
  title?: string;
  reverse?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: SizeType;
  type?: ButtonType;
  styleType?: EButtonStyleType;
};
