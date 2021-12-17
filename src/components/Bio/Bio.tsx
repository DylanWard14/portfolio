import React from "react";
import Headshot from "../../images/Headshot.jpg";

import * as styles from "./Bio.module.scss";

export const Bio = () => {
  return (
    <div className={styles.component}>
      <div className={styles.headshot}>
        <img src={Headshot} alt="Photo of Dylan Ward" />
      </div>
      <p className={styles.bio}>
        My name is Dylan Ward, I am a passionate Web Developer, living in
        Brisbane, Australia. I gained my Diploma of Interactive Digital Media
        (Games) from TAFE QLD Brisbane in 2015 and have completed my Bachelor of
        Games and Interactive Design at the University of Canberra with a GPA of
        6.25. In 2018 I achieved my Bachelor of Arts and Design (Honours) in
        which I wrote and published a paper titled 'Search-Based Procedural
        Generation for First-Person-Shooter Games'. The focus of this paper was
        to use a genetic algorithm to generate 'good' maps for
        First-Person-Shooters.
        <br />
        <br />
        Since early 2019 I have worked as a Web Developer with my main focus
        being React and Typescript. Throughout my work with the NDIS I have
        worked collaboratively with other developers across multiple disciplines
        in order to deliver multiple applications that are fast and accessible
        for people with disabilities. I have worked on numerous personal
        projects in order to gain experience and better understanding on how to
        work across the entire stack.
        <br />
        <br />
        If you would like to contact me you can reach me at{" "}
        <a href="mailto: dylan@dylan-ward.com">dylan@dylan-ward.com</a> and view
        my GitHub at{" "}
        <a href="https://github.com/DylanWard14">
          https://github.com/DylanWard14
        </a>
      </p>
    </div>
  );
};

export default Bio;
