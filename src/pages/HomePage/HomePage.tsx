import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Bio from "../../components/Bio/Bio";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import { PageQueryQuery } from "../../../graphql-types";

import * as styles from "./HomePage.module.scss";

export const PageQuery = graphql`
  query PageQuery {
    allContentfulExperience(sort: { fields: startDate, order: DESC }) {
      nodes {
        jobDescription
        jobTitle
        startDate
        endDate
      }
    }
    allContentfulProject(sort: { order: DESC, fields: createdAt }) {
      nodes {
        description
        githubLink
        projectTitle
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

export const HomePage = () => {
  const pageQuery = useStaticQuery<PageQueryQuery>(PageQuery);

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <h2>Dylan Ward</h2>
        <p>Developer</p>
      </div>
      <Bio />
      <hr />
      <div className={styles.container}>
        <Experience data={pageQuery.allContentfulExperience.nodes} />
        <Contact />
      </div>
      <hr />
      <Projects data={pageQuery.allContentfulProject.nodes} />
    </div>
  );
};

export default HomePage;
