import Button from "../../Button/Button";
import styles from "./Shorten.module.css";
import { FormEventHandler, useEffect, useState } from "react";

const Shorten = ({ handleSubmit }: { handleSubmit: (url: string) => void }) => {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    if (!input.length) setInputError(true);
    else handleSubmit(input);
  };

  useEffect(() => {
    if (input.length) setInputError(false);
  }, [input]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles["input-container"]}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={`${styles.input} ${
            inputError ? styles["input-error"] : ""
          }`}
          onChange={(ev) => setInput(ev.target.value)}
          value={input}
          // required
        />
        {inputError && (
          <p className={styles["text-error"]}>Please add a link</p>
        )}
      </div>
      <Button text="Shorten It!" className={styles.button} />
    </form>
  );
};
export default Shorten;
