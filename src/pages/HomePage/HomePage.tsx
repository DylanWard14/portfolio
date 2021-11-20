import React from "react";

import Bio from "../../components/Bio/Bio";
import Experience from "../../components/Experience/Experience";

import * as styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h1>Dylan Ward</h1>
        <p>Developer</p>
      </div>
      <Bio />
      <hr />
      <Experience />
    </div>
  );
};

export default HomePage;
