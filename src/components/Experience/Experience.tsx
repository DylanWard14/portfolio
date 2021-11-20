import React from "react";

import * as styles from "./Experience.module.scss";

const config = [
  {
    title: "NDIS (Aug 2019 - present)",
    description: "Frontend Developer",
  },
  {
    title: "CSIRO (Feb 2019 - Aug 2019)",
    description: "Frontend Developer",
  },
  {
    title: "University of Canberra (Sep 2017 - Dec 2018)",
    description: "Academic Mentor",
  },
];

export const Experience = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Experience</h2>
      <ul className={styles.list}>
        {config.map((item) => (
          <li className={styles.item}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
