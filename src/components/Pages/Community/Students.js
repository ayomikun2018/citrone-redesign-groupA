import React from "react";
import classes from './Students.module.css';
import sOne from "./communityAssets/Ellipse 1 (3).svg";
import sTwo from "./communityAssets/Ellipse 1 (1).svg";
import sThree from "./communityAssets/Group 85.svg";
import { Link } from "react-router-dom";

function Students() {
  return (
    <div className= {classes.students}>
      {/* Student divs */}
      <div>
        <Link to="#"  className= {classes.links}>
          <img src={sOne} alt="Logo" />
          <section>
          <p>Tolulope</p>
          <h4>UI/UX Design</h4>
          </section>
         
        </Link>
      </div>
      <div>
        <Link to="#" className= {classes.links}>
          <img src={sTwo} alt="Logo" />
          <section>
          <p>Jane Micheal</p>
          <h4>Frontend Dev</h4>
          </section>
         
        </Link>
      </div>

      <div>
        <Link to="#" className= {classes.links}>
          <img src={sThree} alt="Logo" />
          <section>
          <p>Doyin</p>
          <h4>Backend Dev</h4>
          </section>
          
        </Link>
        
      </div>
      <div>
        <Link to="#" className= {classes.links}>
          <img src={sOne} alt="Logo" />
          <section>
          <p>Tolulope</p>
          <h4>UI/UX Design</h4>
          </section>
         
        </Link>
      </div>
      <div>
        <Link to="#" className= {classes.links}>
          <img src={sTwo} alt="Logo" />
          <section>
          <p>Jane Micheal</p>
          <h4>Frontend Dev</h4>
          </section>
         
        </Link>
      </div>

      <div>
        <Link to="#" className= {classes.links}>
          <img src={sThree} alt="Logo" />
          <section>
          <p>Doyin</p>
          <h4>Backend Dev</h4>
          </section>
          
        </Link>
        
      </div>
    </div>
  );
}

export default Students;
