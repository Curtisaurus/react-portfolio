import React from 'react';
import selfie from '../assets/images/curtis-working.jpg'

export default function AboutMe() {
  return (
    <div>
      <img src={selfie} className="selfie" alt="Curtis Drullinger" />
      <p>Full-stack web developer eager to apply critical thinking skills acquired during studies applied to a B.S. in Chemistry coupled with newly rooted skills in software engineering.
          Possessing a certificate in Web Development from Michigan State University Coding Bootcamp, 
          I am skilled in CSS, JavaScript (with ES6 standard), HTML, Node.js</p>
      <p>An incredibly quick study with an efficient mindset, my goal is to create and streamline web-based applications while trimming the fat on any currently employed projects.  
          I have a sharp eye for detail and excel at debugging and trouble-shooting while to produce helpful and constructive criticism of work-in-progress systems.
          I am excited to apply my knowledge and skills to a new set of projects to increase their overall performance and propel them into their most efficient working states.</p>
    </div>
  )
}