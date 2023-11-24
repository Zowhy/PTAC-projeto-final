import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <Link to="/todo" className="button-link"> Enter / Login </Link>
      </div>
      
      <div className="introduction">
        <h1> Welcome to Opium</h1>
        <p>build your style.</p>

      </div>
    </div>
  );
}
