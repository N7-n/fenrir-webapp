import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Show = () => {
  const [store, setStore] = useState([]);

  const data = useLocation().search;
  const queries = new URLSearchParams(data);
  
  const id = queries.get("id");

  useEffect(() => {
    fetch('http://localhost:8080/all?id='+id, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setStore(data)
    })
  }, [id]);

  console.log(store["result"])
  console.log(store["access"])
  return (
    <div>
      <p>ああああ</p>
      <p>{store["result"]}</p>
    </div>
  );
};

export default Show;
