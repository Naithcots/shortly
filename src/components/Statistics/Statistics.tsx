import { useState } from "react";
import { LinkType, ShrtcoResponse } from "../../../types";
import Advanced from "../Advanced/Advanced";
import Links from "../Links/Links";
import Wrapper from "../Wrapper/Wrapper";
import Shorten from "./Shorten/Shorten";
import styles from "./Statistics.module.css";
import axios from "axios";

const Statistics = () => {
  const [links, setLinks] = useState<LinkType[]>([]);

  const handleShortenLink = async (url: string) => {
    try {
      const request = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = (await request.data) as ShrtcoResponse;
      console.log(data);
      setLinks([
        ...links,
        {
          originUrl: data.result.original_link,
          shortUrl: data.result.short_link2,
        },
      ]);
    } catch (error: any) {
      console.log("error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Wrapper>
        <div className={styles.transform}>
          <Shorten handleSubmit={handleShortenLink} />
        </div>
        <div className={styles.window}>
          {links && <Links links={links} />}
          <Advanced />
        </div>
      </Wrapper>
    </div>
  );
};
export default Statistics;
