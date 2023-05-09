import React from 'react';
import{motion} from 'framer-motion';
import 'C:/Users/Rachel/bootcamp/Rae-s-portfolio/src/components/pages/styles/About.css';

export default function About() {
  const imgStyle = {
    width: "18rem",
    margin: "1rem",
  };
  const images = [
    process.env.PUBLIC_URL + "/rae.png",
    
  ];
  return (
    <div class="container">
      <img class="side" style={imgStyle} src={process.env.PUBLIC_URL + "/rae.jpg"}
      />
      <p class="side side-content-center">
      Hi! I am Rae. I am artist, turned librarian, turned web developer. Oddly enough I think that is a great combination of things. I have learned that aestetics and research are very important when it comes to coding. I am new to the coding world, in 2022 I had an issue with a program at work and accidentally ended up fixing the code to solve the problem (which is when I realized that coding is just MySpace! I hadn't actually realized that until that moment). I am currently enrolled in a full stack coding bootcamp through the UC San Diego and am excited to see where this journey takes me!  
      </p>
    </div>
  );
}
