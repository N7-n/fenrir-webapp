import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <p>ああああ</p>
      <p>{store["result"]}</p>
    </div>
  );
};

export default Show;
