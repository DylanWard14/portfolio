import React from "react";
import { format } from "date-fns";

import { PageQueryQuery } from "../../../graphql-types";

import * as styles from "./Experience.module.scss";

export type ExperienceData = {
  jobTitle: string;
  jobDescription: string;
  startDate: Date;
  endDate: Date | null;
};

export type ExperienceProps = {
  data: PageQueryQuery["allContentfulExperience"]["nodes"];
};

export const Experience = ({ data }: ExperienceProps) => {
  console.log({ data });
  return (
    <div className={styles.component}>
      <h2 className={styles.heading}>Experience</h2>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li className={styles.item} key={`experience-${index}`}>
            <div className={styles.icon}>
              <div className={styles.point} />
            </div>
            <div>
              <p className={styles.title}>
                {`${item.jobTitle} (${format(
                  new Date(item.startDate),
                  "MMM yyyy"
                )} - ${
                  item.endDate
                    ? format(new Date(item.endDate), "MMM yyyy")
                    : "Present"
                })`}
              </p>
              <p className={styles.description}>{item.jobDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
