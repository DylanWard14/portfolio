import React from "react";

import * as styles from "./Experience.module.scss";

const config = [
  {
    title: "NDIS (Sept 2021 - Present)",
    description: "Team Lead - Frontend Developer",
  },
  {
    title: "NDIS (Feb 2021 - Sept 2021)",
    description: "Frontend Developer",
  },
  {
    title: "NDIS (Aug 2019 - Feb 2021)",
    description: "Junior Frontend Developer",
  },
  {
    title: "CSIRO (Feb 2019 - Aug 2019)",
    description: "Software Engineer",
  },
  {
    title: "University of Canberra (Sep 2017 - Dec 2018)",
    description: "Academic Mentor",
  },
];

export type ExperienceData = {
  jobTitle: string;
  jobDescription: string;
  startDate: Date;
  endDate: Date | null;
};

export type ExperienceProps = {
  loading: boolean;
  data?: ExperienceData[];
  error?: Error;
};

export const Experience = ({ data, loading, error }: ExperienceProps) => {
  console.log({ data, loading, error });
  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Experience</h2>
      <ul className={styles.list}>
        {config.map((item, index) => (
          <li className={styles.item} key={`experience-${index}`}>
            <div className={styles.icon}>
              <div className={styles.point} />
            </div>
            <div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
