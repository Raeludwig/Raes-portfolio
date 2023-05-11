import React from 'react';
import {motion} from 'framer-motion';

class Resume extends React.Component {

  downloadResume = () => {
    fetch('http://localhost:3000/resume/download')
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'resume.pdf';
          a.click();
        });
        //window.location.href = response.url;
    });
  }
  
  render() {
    return (
      <div class="container">
        <motion.h1
          initial={{y:-250}}
          animate={{y:10}} 
        >
          Resume
        </motion.h1>
        <p class="container">
        </p>
        <h1>Download File using React App</h1>
        <h3>Download Resume using Button</h3>
        <button onClick={this.downloadResume}>Download</button>
        <p></p>
      </div>
    )
  }
}

export default Resume;
