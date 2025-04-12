/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="home-title">
        GUIDANCE<span>PLUS</span>
      </h1>
      <h3 className="">EDUCATIONAL SERVICES</h3>
      <p className="home-description">
      We are the great and the best service provider in the student recruitment industry.
      </p>
      <div className="spotlight">
        <img src="./guidance-team.jpg" alt="" />
      </div>

      <h1>Dedicated Workers</h1>
      <div className="workers-section">
        <div className="worker-card">
          <img src="./hadi.jpg" alt="Worker 1" className="worker-image" />
          <h4 className="worker-name">Haadi</h4>
          <p className="worker-role">Lead collector</p>
        </div>
        <div className="worker-card">
          <img src="./naveen.jpg" alt="Worker 2" className="worker-image" />
          <h4 className="worker-name">Naveen</h4>
          <p className="worker-role">Lead collector</p>
        </div>
        <div className="worker-card">
          <img src="./actovia.png" alt="Worker 2" className="worker-image" />
          <h4 className="worker-name">Actovia</h4>
          <p className="worker-role">Lead collector</p>
        </div>
      </div>
      <div className="button-group">
        <button onClick={() => navigate("/LeadForm")} className="btn blue">
          Fill Form
        </button>
        <button onClick={() => navigate("/LeadsList")} className="btn green">
          View Saved Leads
        </button>
      </div>
    </div>
  );
};

export default Home;
