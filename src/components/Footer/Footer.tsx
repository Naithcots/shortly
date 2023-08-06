import Wrapper from "../Wrapper/Wrapper";
import linkCategories from "./linkCategories";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Wrapper>
        <div className={styles.footer}>
          <img
            src={`${import.meta.env.BASE_URL}/logo.svg`}
            alt="logo"
            className={styles.logo}
          />
          <div className={styles.categories}>
            {linkCategories.map((category) => (
              <div className={styles.category} key={category.id}>
                <p className={styles["category-title"]}>{category.title}</p>
                <div>
                  {category.links.map((link, idx) => (
                    <a
                      href={link.href}
                      key={idx}
                      className={styles["category-link"]}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.icons}>
            <img
              src={`${import.meta.env.BASE_URL}/icon-facebook.svg`}
              alt="facebook"
              className={styles.icon}
            />
            <img
              src={`${import.meta.env.BASE_URL}/icon-twitter.svg`}
              alt="twitter"
              className={styles.icon}
            />
            <img
              src={`${import.meta.env.BASE_URL}/icon-pinterest.svg`}
              alt="pinterest"
              className={styles.icon}
            />
            <img
              src={`${import.meta.env.BASE_URL}/icon-instagram.svg`}
              alt="instagram"
              className={styles.icon}
            />
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
