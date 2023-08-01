import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Boost.module.css";

const Boost = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <div className={styles.boost}>
          <h2 className={styles.title}>Boost your links today</h2>
          <Button text="Get Started" />
        </div>
      </Wrapper>
    </div>
  );
};
export default Boost;
