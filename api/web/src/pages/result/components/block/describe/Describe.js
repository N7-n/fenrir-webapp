import React from "react";
import './describe.css';


const Describe = ({ store }) => {
  return(
    <div className="storeDescribe">
      <h2>{store["name"]}</h2>
      <p>{store["genre"]["catch"]}</p>
      <p className="storeAddress">{store["address"]}</p>
    </div>
  );
}

export default Describe;
