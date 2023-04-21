import React from "react";
import Describe from './describe/Describe'
import './block.css';


const Block = ({ store }) => {
  return(
    <div className="storeBlock">
      <img src={store["photo"]["pc"]["l"]} alt="画像"></img>
      <Describe store={store}/>
    </div>
  );
}

export default Block;
