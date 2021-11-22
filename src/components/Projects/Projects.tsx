import React from "react";

import * as styles from "./Projects.module.scss";

export type Project = {
  url: string;
  title: string;
  description: string;
};

const recentProjects: Project[] = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3Pdynj96UZnR1quJ0d7UE2k0o8ZNGJqSRsHma4ixFAGz69HeF5s1DdFYk6N5u4sjUAo&usqp=CAU",
    title: "Portfolio",
    description:
      "This was a gatsby project to develop this website. Built using typescript, sass and hosted on AWS lightsail instance",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3Pdynj96UZnR1quJ0d7UE2k0o8ZNGJqSRsHma4ixFAGz69HeF5s1DdFYk6N5u4sjUAo&usqp=CAU",
    title: "Movie Finder",
    description:
      "This was a gatsby project to develop this website. Built using typescript, sass and hosted on AWS lightsail instance",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3Pdynj96UZnR1quJ0d7UE2k0o8ZNGJqSRsHma4ixFAGz69HeF5s1DdFYk6N5u4sjUAo&usqp=CAU",
    title: "Portfolio",
    description:
      "This was a gatsby project to develop this website. Built using typescript, sass and hosted on AWS lightsail instance",
  },
];

export const Projects = () => {
  return (
    <div className={styles.component}>
      <h2>Recent Projects</h2>
      <ul className={styles.list}>
        {recentProjects.map((project) => (
          <li className={styles.project}>
            <img src={project.url} />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
