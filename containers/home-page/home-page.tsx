import { Button, Image } from "@/components";
import styles from "./home-page.module.scss";
import { THomePageProps } from "./home-page.types";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const HomePageContainer = ({ title }: THomePageProps) => {
  console.log(publicRuntimeConfig.apiBaseURL);
  return (
    <div className="">
      <p className={styles.title}>{title}</p>
      <Button className={styles.button} onClick={() => console.log("A")}>
        A
      </Button>
      <Image src="/thirteen.svg" alt="image" />
    </div>
  );
};

export default HomePageContainer;
