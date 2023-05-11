import React from 'react';
import { motion } from 'framer-motion';
import resumeImage from './styles/resume.jpg';

class Resume extends React.Component {
  downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeImage;
    link.download = 'resume.jpg';
    link.click();
  }

  render() {
    return (
      <div>
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 10 }}
        >
          Resume
        </motion.h1>
        <div className="container">
          <p className="resume-container">
            <img
              className="card-img-top"
              src={resumeImage}
              alt="resume"
            />
            <button onClick={this.downloadResume}>Download Resume</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
