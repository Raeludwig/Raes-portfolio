import React from 'react';
import {motion} from 'framer-motion';
import "./styles/Resume.css";

class Resume extends React.Component {

  downloadResume = () => {
    fetch('http://localhost:3000/resume/download')
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'resume.jpg';
          a.click();
        });
        //window.location.href = response.url;
    });
  }
  
  render() {
    return (
      <div>
        <motion.h1
          initial={{y:-250}}
          animate={{y:10}} 
        >
          Resume
        </motion.h1>
        <div class="container">
        
        <p class="resume-container">
       
        
        <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + "/resume.jpg"}
              alt="resume"
            />
        <button onClick={this.downloadResume}>Download Resume</button>
        <p></p></p> 
      </div>
      </div>
    )
  }
}

export default Resume;
