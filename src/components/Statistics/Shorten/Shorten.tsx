import Button from "../../Button/Button";
import styles from "./Shorten.module.css";

const Shorten = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Shorten a link here..."
        className={styles.input}
      />
      <Button text="Shorten It!" className={styles.button} />
    </form>
  );
};
export default Shorten;
