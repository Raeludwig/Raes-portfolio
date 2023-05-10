import React from "react";
import {motion} from 'framer-motion';

export default function Portfolio(props) {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
  };

  const images = [
    process.env.PUBLIC_URL + "/job-finder.png",
    process.env.PUBLIC_URL + "/moon-dollars.png",
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
    gap: "1rem",
  };

  return (
    <div>
      <motion.h1 
      initial={{y:-250}}
      animate={{y:10}}
      >Portfolio</motion.h1>
      <div className="container" style={gridStyle}>
        <div className="card" style={cardStyle}>
          <a href="https://raeludwig.github.io/Forked_Job_Finder/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/job-finder.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://whispering-garden-84047.herokuapp.com/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/moon-dollars.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://desolate-meadow-93910.herokuapp.com/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/JATE.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://raeludwig.github.io/calendar-application-M5/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/scheduler.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://raeludwig.github.io/password-generator/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/password-generator.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://damp-beyond-37122.herokuapp.com/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/tech-blog-post.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://whispering-garden-84047.herokuapp.com/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/moon-dollars.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://whispering-garden-84047.herokuapp.com/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/moon-dollars.png"}
              alt="Card cap"
            />
          </a>
        </div>

        <div className="card" style={cardStyle}>
          <a href="https://whispering-garden-84047.herokuapp.com/">
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/moon-dollars.png"}
              alt="Card cap"
            />
          </a>
        </div>


      </div>
    </div>
  );
}
