import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Block from './components/block/Block'

function Show(){
  const [store, setStore] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:8080/all?id='+ id)
    .then(res => res.json())
    .then(data => {
      setStore(data);
      console.log((store["result"]));
    })
  }, [id]);
  return (
    <div>
      {
        (function () {
          const shop = store["result"];

          return (
            <div>
              {/* <Block store={shop}/> */}
              <p>{shop}</p>
            </div>
          );
        }())
      }
    </div>
  );
};

export default Show;
