import * as React from "react";
import HomePage from "./HomePage/HomePage";

import "./reset.scss";
import "./theme.scss";
import * as styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Dylan Ward</h1>
      </header>
      <main>
        <HomePage />
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default IndexPage;
