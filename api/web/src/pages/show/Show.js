import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Block from './components/block/Block'

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

  return (
    <div>
      <p>{store["result"]}</p>
      <Block store={store["result"]["results"]["shop"][0]}/>
    </div>
  );
};

export default Show;
