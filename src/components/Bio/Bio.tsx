import React from "react";
import Headshot from "../../images/Headshot.jpg";

import * as styles from "./Bio.module.scss";

export const Bio = () => {
  return (
    <div className={styles.component}>
      <img
        className={styles.headshot}
        src={Headshot}
        alt="Photo of Dylan Ward"
      />
      <p className={styles.bio}>
        My name is Dylan Ward, I am living in Brisbane, Australia. I am a
        Programmer focusing in areas such as Games Programming and Web
        Development. I gained my Diploma of Interactive Digital Media (Games)
        from TAFE QLD Brisbane in 2015 and have completed my Bachelor of Games
        and Interactive Design at the University of Canberra with a GPA of 6.25.
        In 2018 I achieved my Bachelor of Arts and Design (Honours) in which I
        wrote and published a paper titled 'Search-Based Procedural Generation
        for First-Person-Shooter Games'. The focus of this paper was to use a
        genetic algorithm to generated 'good' maps for First-Person-Shooters.
        <br />
        <br />
        Since early 2019 I have worked as a Software Engineer for the CSIRO in
        which I am developing a web application to display point cloud data.
        During the development of this application I used Node.JS, Vue.JS and
        created a RestAPI to fetch information from a database and return it to
        the client. I am committed to my growth in Web Development and have
        taken on a number of personal projects in order to further my knowledge.
        I am currently creating a RestAPI that game developers can use to easily
        implement world-wide leader boards into their video games and a web
        application for users to go to see the scores of their friends and more.
        This project and others are visible on my GitHub.
        <br />
        <br />
        If you would like to contact me you can reach me at
        dylan.ward@iinet.net.au and view my GitHub at
        https://github.com/DylanWard14
      </p>
    </div>
  );
};

export default Bio;
