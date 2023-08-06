import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <img
          src={`${import.meta.env.BASE_URL}/illustration-working.svg`}
          alt="illustration"
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>More than just shorter links</h1>
          <p className={styles.description}>
            Build your brand{"’"}s recognition and get detailed insights on how
            your links are performing.
          </p>
          <Button text="Get Started" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
