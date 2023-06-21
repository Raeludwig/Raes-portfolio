import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/pages/About";
import Footer from './components/Footer';
import './components/pages/styles/Index.css';
import Contact from "./components/pages/Contact";


function App() {
  return (
    <div className="app">
      <PortfolioContainer />
    </div>
  );
}

export default App;
