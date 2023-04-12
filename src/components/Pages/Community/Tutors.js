import React from 'react'
import classes from './Tutors.module.css';
import tutorOne from './communityAssets/Group 238963.svg';
import tutorTwo  from './communityAssets/Group 85.svg';
import tutorThree from './communityAssets/Ellipse 1 (2).svg';
function Tutors() {
  return (
    <div className= {classes.tutors}>
        {/* Tutor divs */}
        <div className= {classes.one}>
        <img src={tutorOne} alt="Logo" />
          <p>Olurotimi Adubi</p>
        </div>
        <div className= {classes.two}>
        <img src={tutorTwo} alt="Logo" />
          <p>Tayo Akinnagbe</p>
        </div>
        <div className={classes.three}>
        <img src={tutorThree} alt="Logo" />
          <p>Taiwo Osokoya</p>
        </div>

         
          
    </div>
    
  )
}

export default Tutors