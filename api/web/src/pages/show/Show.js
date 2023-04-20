import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Show = () => {
  const [store, setStore] = useState([]);

  const data = useLocation().search;
  const queries = new URLSearchParams(data);
  
  const id = queries.get("id");

  useEffect(() => {
    fetch('https://localhost:8080?id='+id, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setStore(data)
    })
  }, [id]);

  console.log(store["a"])
  return (
    <div>
      <p>ああああ</p>
    </div>
  );
};

export default Show;
