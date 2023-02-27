import clsx from "clsx";
import Image from "next/image";
import styles from "./image.module.scss";
import { TImageProps } from "./image.types";

const CustomImage = ({ className, src, alt }: TImageProps) => {
  return (
    <div className={clsx(styles.customImage, className)}>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL="/vercel.svg"
        width={100}
        height={100}
      />
    </div>
  );
};

export default CustomImage;
