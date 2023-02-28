import { Button as AntdButton } from "antd";
import clsx from "clsx";
import styles from "./styles.module.less";
import { TButtonProps } from "./Button.types";

const Button = ({ type, title, size, styleType }: TButtonProps) => {
  return (
    <div className={styles.button}>
      <AntdButton size={size} type={type} className={clsx(styleType)}>
        <div className="flex items-center justify-center gap-2">
          <div className="flex-none w-8"></div>
          <span className="flex-grow">{title}</span>
          <div className="flex-none w-8">i</div>
        </div>
      </AntdButton>
    </div>
  );
};

export default Button;
