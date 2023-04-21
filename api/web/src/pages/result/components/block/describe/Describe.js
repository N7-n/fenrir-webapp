import React from "react";
import { Link } from "react-router-dom";
import './describe.css';


const Describe = ({ store }) => {
  const link = "/show/" + store["id"];

  return(
    <div className="storeDescribe">
      <h2>{store["name"]}</h2>
      <Link to={link}>Show Page</Link>
      <p>{store["genre"]["catch"]}</p>
      <p className="storeAddress">{store["access"]}</p>
    </div>
  );
}

export default Describe;
