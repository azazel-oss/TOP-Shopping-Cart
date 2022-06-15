import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="main__home">
      <div className="home-description">
        <span>Find the best *item* and at the most affordable prices.</span>
        <br />
        The best there ever was,the best there is, the best there ever will be.
      </div>
      <div className="home-cta">
        <a href="/shopping" className="btn btn-shop-now">
          Shop now
        </a>
        <a href="/contact" className="btn btn-contact-us">
          Get to know us
        </a>
      </div>
    </main>
  );
};

export default Home;
