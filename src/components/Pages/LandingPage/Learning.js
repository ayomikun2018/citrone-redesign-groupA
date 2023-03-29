import React from "react";
import classes from "./Learning.module.css";
import onlineLearning from './landingPageAssets/Online learning-amico 2.svg'
export default function Learning() {
  return (
    <div>
      <section className={classes.learning}>
        <div>
          <h2>EFFECTIVE LEARNING</h2>
          <h1>Engaging and effective training</h1>
          <p>
            Engage learners with video interactions, note-taking, slides, e-books,
            self assessments, certificates, and much more
          </p>
        </div>
        <div>
        <img src={onlineLearning} alt="online-learning" />
        </div>
      </section>
    </div>
  );
}
