import { Button as AntdButton } from "antd";
import clsx from "clsx";
import styles from "./styles.module.less";
import { TButtonProps } from "./Button.types";

const Button = ({ type, title, size, styleType }: TButtonProps) => {
  return (
    <div className={styles.button}>
      <AntdButton size={size} type={type} className={clsx(styleType)}>
        {title}
      </AntdButton>
    </div>
  );
};

export default Button;
