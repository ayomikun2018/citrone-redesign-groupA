import React from "react";
import classes from "./Reporting.module.css";
import reportBro from './landingPageAssets/Report-bro 2.svg'
export default function Reporting() {
  return (
    <section className={classes.reporting}>
      <div className="">
        <img
          src={reportBro}
          alt="report-bro"
        />
      </div>
      <div>
        <h2>REPORTING</h2>
        <h1>Engagement insights</h1>
        <p>
        Quickly see which students are engaged and which are not, so you can take timely action to support students directly from Citrone.
        </p>
      </div>
    </section>
  );
}
