import React from "react";

import { PageQueryQuery } from "../../../graphql-types";

import * as styles from "./Projects.module.scss";

export type ProjectsProps = {
  data: PageQueryQuery["allContentfulProject"]["nodes"];
};

export const Projects = ({ data }: ProjectsProps) => {
  return (
    <div className={styles.component}>
      <h2>Recent Projects</h2>
      <ul className={styles.list}>
        {data.map((project) => (
          <li className={styles.project} key={project.projectTitle}>
            <a href={project.githubLink!} className={styles.image}>
              <img
                src={project.image?.file?.url!}
                alt={`Image of ${project.projectTitle} project.`}
              />
              <h3 className={styles.title}>{project.projectTitle}</h3>
            </a>
            <p className={styles.description}>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
