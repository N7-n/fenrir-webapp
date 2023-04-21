import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './result.css';
import Block from './components/block/Block'

function Result({name, range, lat, lng}){
  const [currentPage, setCurrentPage] = useState(1);
  const [stores, setData] = useState([]); 
  const navi = useNavigate();

  const handleButtonClick = () => {
    setCurrentPage(currentPage + 1);
    navi.push(`/page/${currentPage + 1}`);
  };

  useEffect(() => {
    fetch('http://localhost:8080/?start='+ currentPage*2 + '&name=' + name + '&range=' + range + '&lat=' + lat + '&lng=' + lng)
    .then(res => res.json())
    .then(data => {
      setData(data["results"]["shop"]);
    })
  }, [currentPage, name, range, lat, lng]); 

  useEffect(() => {
    fetch('http://localhost:8080/?start='+ 5 + '&name=' + name + '&range=' + range + '&lat=' + lat + '&lng=' + lng)
    .then(res => res.json())
    .then(data => {
      setData(data["results"]["shop"]);
    })
  }, [name, range, lat, lng]);

  return (
    <div>
      <h1 className="pageTitle">検索結果</h1>
      {
        (function () {
          const List = [];
          for (let i = 0; i < stores.length; i++){
            List.push(
              <Block store={stores[i]}/>
            );
          }
          return <div className='storeList'>{List}<button onClick={handleButtonClick}>次のページ</button></div>;
        }())
      }
    </div>
  );
};

export default Result;
