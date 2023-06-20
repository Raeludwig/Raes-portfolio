import React from "react";
import { motion } from "framer-motion";

export default function Portfolio(props) {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
    gap: "1rem",
  };

  return (
    <div>
      <motion.h1 initial={{ y: -250 }} animate={{ y: 10 }}>
        Portfolio
      </motion.h1>

      <div className="container" style={gridStyle}>
        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            href="https://raeludwig.github.io/Forked_Job_Finder/"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/job-finder.png"}
              alt="Card cap"
            />
          </motion.a>
          <a class= "deployed" id="titles" href="https://raeludwig.github.io/Forked_Job_Finder/">Job Search Quiz</a>
          <a class= "deployed" href="https://github.com/Raeludwig/Forked_Job_Finder">GitHub Repository</a>
        </div>

        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            href="https://whispering-garden-84047.herokuapp.com/"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/moon-dollars.png"}
              alt="Card cap"
            />
          </motion.a>
          <a class= "deployed" id="titles" href="https://whispering-garden-84047.herokuapp.com/">MoonDollars Coffee Saver</a>
          <a class= "deployed" href="https://github.com/Raeludwig/forked-moon-dollars">GitHub Repository</a>
        </div>


        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            a
            href="https://github.com/Raeludwig?tab=repositories"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/inner_blossom_affirm.png"}
              alt="Card cap"
            />
          </motion.a>
          <a class= "deployed"  id="titles" href="https://inner-blossom-13.herokuapp.com/">Inner Blossom</a>
          <a class= "deployed" href="https://github.com/Raeludwig/inner-blossom">GitHub Repository</a>
        </div>
        
        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            a
            href="https://desolate-meadow-93910.herokuapp.com/"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/JATE.png"}
              alt="Card cap"
            />
          </motion.a>
          <a class= "deployed" id="titles" href="https://desolate-meadow-93910.herokuapp.com/">Text Editor</a>
          <a class= "deployed" href="https://github.com/Raeludwig/PWA-Text-Editor">GitHub Repository</a>
        </div>

        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            a
            href="https://raeludwig.github.io/calendar-application-M5/"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/scheduler.png"}
              alt="Card cap"
            />
          </motion.a>
          <a class= "deployed" id="titles"  href="https://raeludwig.github.io/calendar-application-M5/">Online Scheduler</a>
          <a class= "deployed" href="https://github.com/Raeludwig/calendar-application-M5">GitHub Repository</a>
        </div>

        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            a
            href="https://raeludwig.github.io/password-generator/"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/password-generator.png"}
              alt="Card cap"
            />
          </motion.a>
          <a class= "deployed" id="titles"  href="https://raeludwig.github.io/password-generator/">Password Generator</a>
          <a class= "deployed" href="https://github.com/Raeludwig/password-generator">GitHub Repository</a>
        </div>

        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            a
            href="https://damp-beyond-37122.herokuapp.com/"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/tech-blog-post.png"}
              alt="Card cap"
            />
          </motion.a>
          <a class= "deployed"  id="titles" href="https://damp-beyond-37122.herokuapp.com/">Tech Blog</a>
          <a class= "deployed" href="https://github.com/Raeludwig/tech-blog">GitHub Repository</a>
        </div>

        <div>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="card"
            style={cardStyle}
            a
            href="https://github.com/Raeludwig?tab=repositories"
          >
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/coming-soon.png"}
              alt="Card cap"
            />
          </motion.a>
          <p>Wait and see what's next!</p>
        </div>


      </div>
    </div>
  );
}
