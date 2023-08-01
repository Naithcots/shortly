import { Card as CardType } from "../../../../types";
import styles from "./Card.module.css";

const Card = ({ data }: { data: CardType }) => {
  return (
    <div className={styles.container}>
      <img src={data.icon} alt="icon" className={styles.icon} />
      <div className={styles.content}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  );
};
export default Card;
