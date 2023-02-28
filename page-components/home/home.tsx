import { Button } from "@/components";
import { EButtonStyleType } from "@/components/Button/Button.enums";
import styles from "./styles.module.less";

const HomeContainer = () => {
  return (
    <div className={styles.test}>
      <p className={styles.test_text}>Text</p>
      <Button
        title="The Anh Test"
        size="small"
        styleType={EButtonStyleType.PRIMARY}
      />
      <div className="h-4 w-8 bg-primary"></div>
    </div>
  );
};

export default HomeContainer;
