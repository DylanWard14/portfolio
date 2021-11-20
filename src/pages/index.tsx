import * as React from "react";
import HomePage from "./HomePage/HomePage";

import "./reset.scss";
import * as styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <>
      <header className={styles.header}>Dylan Ward</header>
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default IndexPage;
