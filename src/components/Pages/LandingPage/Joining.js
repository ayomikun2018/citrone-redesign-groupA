import React from "react";
import { Link } from "react-router-dom";
import classes from "./Joining.module.css";
import img from "././landingPageAssets/Kids Studying from Home-rafiki 1.svg";
export default function Joining() {
  return (
    <div className={classes.joining}>
      <section className={"joining-sectionA" }>
        <h1 >We make learning and communication easy & fun for everyone</h1>
        <p>
          Citrone makes it easy for educators to create learning experiences
          that positively engage students.
        </p>
        <Link to="/signup">
          <button>Join for free</button>
        </Link>
      </section>
      <section className={"joining-sectionB"}>
        <img src={img} alt="studying" className={classes["studying-logo"]} />
      </section>
    </div>
  );
}
