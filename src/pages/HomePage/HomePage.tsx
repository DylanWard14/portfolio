import React from "react";
import { gql, useQuery } from "@apollo/client";

import Bio from "../../components/Bio/Bio";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";

import * as styles from "./HomePage.module.scss";

export const ExperienceQuery = gql`
  query ExperienceQuery {
    experienceCollection {
      total
      items {
        jobTitle
        jobDescription
        startDate
        endDate
      }
    }
  }
`;

export const HomePage = () => {
  // TODO type the query return better
  const experienceQuery = useQuery(ExperienceQuery);
  console.log({ experienceQuery });
  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h2>Dylan Ward</h2>
        <p>Developer</p>
      </div>
      <Bio />
      <hr />
      <div className={styles.container}>
        <Experience
          data={experienceQuery.data?.experienceCollection?.items}
          loading={experienceQuery.loading}
          error={experienceQuery.error}
        />
        <Contact />
      </div>
      <hr />
      <Projects />
    </div>
  );
};

export default HomePage;
