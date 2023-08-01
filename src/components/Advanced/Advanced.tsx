import styles from "./Advanced.module.css";
import Card from "./Card/Card";
import cards from "./cards";

const Advanced = () => {
  return (
    <div className={styles.advanced}>
      <h2 className={styles.title}>Advanced Statistics</h2>
      <p className={styles.description}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className={styles.cards}>
        {cards.map((cardData) => (
          <Card data={cardData} key={cardData.id} />
        ))}
      </div>
    </div>
  );
};
export default Advanced;
