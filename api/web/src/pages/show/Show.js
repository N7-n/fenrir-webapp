import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Block from './components/block/Block'

const Show = () => {
  const [store, setStore] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:8080/all?id='+ id)
    .then(res => res.json())
    .then(data => {
      setStore(data)
    })
  }, [id]);
  console.log(store["result"])
  return (
    <div>{store["result"]}
      {/* <Block store={store["result"]["shop"]}/> */}
    </div>
  );
};

export default Show;
