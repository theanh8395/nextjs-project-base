import { MouseEvent, ReactNode } from "react";

export type TButtonProps = {
  className?: string; // No Suggest, should handle all style at this component
  children?: ReactNode;
  onClick?: (event?: MouseEvent<HTMLElement>) => void;
};
