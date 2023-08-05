import Wrapper from "../Wrapper/Wrapper";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Wrapper>
        <div className={styles.nav}>
          <div>
            <a href="/" className={styles.link}>
              Features
            </a>
            <a href="/" className={styles.link}>
              Pricing
            </a>
            <a href="/" className={styles.link}>
              Resources
            </a>
          </div>
          <div className={styles.sep} />
          <div>
            <a href="/" className={styles.link}>
              Login
            </a>
            <a href="/" className={`${styles.link} ${styles["sign-up"]}`}>
              Sign Up
            </a>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
export default Nav;
