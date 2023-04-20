import React from "react";
import './describe.css';


const Describe = ({ store }) => {
  const link = "/show/?id=" + store["id"];

  return(
    <div className="storeDescribe">
      <h2>{store["name"]}</h2>
      <a href={link}>aaa</a>
      <p>{store["genre"]["catch"]}</p>
      <p className="storeAddress">{store["address"]}</p>
    </div>
  );
}

export default Describe;
