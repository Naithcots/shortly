import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toogleNav = () => setNavOpen(!navOpen);

  return (
    <div className={styles.container}>
      <header>
        <Wrapper>
          <div className={styles.header}>
            <img src="/logo.svg" alt="logo" />
            <button
              className={styles["menu-icon-container"]}
              onClick={toogleNav}
            >
              <RiMenuLine className={styles["menu-icon"]} />
            </button>

            <div className={styles["desktop-links"]}>
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
            <div className={styles["desktop-links"]}>
              <a href="/" className={styles.link}>
                Login
              </a>
              <a href="/" className={styles["sign-up"]}>
                Sign Up
              </a>
            </div>
          </div>
        </Wrapper>
      </header>
      {navOpen && <Nav />}
    </div>
  );
};
export default Header;
