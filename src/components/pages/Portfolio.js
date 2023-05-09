import React from "react";

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
      <h1>Portfolio</h1>
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
