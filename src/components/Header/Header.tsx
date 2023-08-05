import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toogleNav = () => setNavOpen(!navOpen);

  return (
    <div className={styles.stack}>
      <header>
        <Wrapper>
          <div className={styles.container}>
            <img src="/logo.svg" alt="logo" />
            <button
              className={styles["menu-icon-container"]}
              onClick={toogleNav}
            >
              <RiMenuLine className={styles["menu-icon"]} />
            </button>
          </div>
        </Wrapper>
      </header>
      {navOpen && <Nav />}
    </div>
  );
};
export default Header;
