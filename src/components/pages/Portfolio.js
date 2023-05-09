import React from "react";
import { Grid } from "react-visual-grid";

export default function Portfolio(props) {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
  };

  const images = [
    process.env.PUBLIC_URL + "/job-finder.png",
    process.env.PUBLIC_URL + "/moon-dollars.png",
  ];

  return (
    <div>
      <Grid images={images} gridLayout="horizontal" width={1800} height={1200} />
      <h1>Portfolio</h1>
      <div className="container" style={{ display: "grid" }}>
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
      </div>
    </div>
  );
}
