import Advanced from "../Advanced/Advanced";
import Wrapper from "../Wrapper/Wrapper";
import Shorten from "./Shorten/Shorten";
import styles from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <div className={styles.transform}>
          <Shorten />
        </div>
        <div className={styles.window}>
          <Advanced />
        </div>
      </Wrapper>
    </div>
  );
};
export default Statistics;
