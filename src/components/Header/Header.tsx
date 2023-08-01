import Wrapper from "../Wrapper/Wrapper";
import styles from "./Header.module.css";
import { RiMenuLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <div className={styles.container}>
          <img src="/logo.svg" alt="logo" />
          <RiMenuLine className={styles["menu-icon"]} />
        </div>
      </Wrapper>
    </header>
  );
};
export default Header;
