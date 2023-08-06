import { useState } from "react";
import { LinkType } from "../../../types";
import Button from "../Button/Button";
import styles from "./Links.module.css";

const Links = ({ links }: { links: LinkType[] }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleClick = async (link: LinkType) => {
    await navigator.clipboard.writeText(link.shortUrl);
    setCopiedLink(link.shortUrl);
  };

  return (
    <div className={styles.links}>
      {links.map((link, idx) => (
        <div key={idx} className={styles.link}>
          <a href={link.originUrl} className={styles.origin}>
            {link.originUrl}
          </a>
          <div className={styles.sep} />
          <a href={link.shortUrl} className={styles.short}>
            {link.shortUrl}
          </a>
          <div onClick={() => handleClick(link)}>
            {link.shortUrl === copiedLink ? (
              <Button
                text="Copied!"
                className={`${styles.button} ${styles.copied}`}
              />
            ) : (
              <Button text="Copy" className={styles.button} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Links;
