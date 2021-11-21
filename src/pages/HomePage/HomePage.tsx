import React from "react";

import Bio from "../../components/Bio/Bio";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";

import * as styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h2>Dylan Ward</h2>
        <p>Developer</p>
      </div>
      <Bio />
      <hr />
      <div className={styles.container}>
        <Experience />
        <Contact />
      </div>
      <hr />
    </div>
  );
};

export default HomePage;
