import React from "react";
import classes from "./Community.module.css";
import logo2 from "././landingPageAssets/Group 238938.svg";
import logo3 from "./landingPageAssets/Group 238939.svg";
import workChat from "././landingPageAssets/Work chat-bro 1.svg";
import logo4 from "././landingPageAssets/Group 238940.svg";
export default function Community() {
  return (
    <div className={classes.community}>
      <section className={classes.cards}>
        <div className={classes.card1}>
          <img src={logo2} alt="logo2"></img>

          <h3>Create and manage courses seamlessly</h3>
        </div>
        <div className={classes.card2}>
          <img src={logo3} alt="logo3"></img>
          <h3>Seamless engagement between tutor’s and students</h3>
        </div>
        <div className={classes.card3}>
          <img src={logo4} alt="logo4"></img>
          <h3>Give feedback as quickly as possible</h3>
        </div>
      </section>
      <section className={classes.communityB}>
        <div>
        <img src={workChat} alt="work-chat" className={classes["work-chat"]} />
        </div>
        <div>
        <h2>COMMUNITY FIRST</h2>
        <h1>Nurture a community- first learning experience.</h1>
        <p>
          Students who feel connected to their learning community are more
          likely to persist. We foster meaning connection by ensuring students
          are never more than 1 click away from their peers and educators
        </p>
        </div>
        
      </section>
    </div>
  );
}
