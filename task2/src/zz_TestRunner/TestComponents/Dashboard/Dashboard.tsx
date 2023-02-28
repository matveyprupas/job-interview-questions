import React from "react";
import { Link } from "react-router-dom";
import Tile from "../Tile/Tile";
import "./Dashboard.css";
import { tests } from "../../utils/constants";
import logo from "../../../assets/img/tbol-logo-full.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <Link to="/">
          <img width={236} src={logo} alt="TBOL logo" />
        </Link>
      </header>
      <div className="tiles">
        {Object.values(tests).map((test) => (
          <Tile title={test.title} url={test.url} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
