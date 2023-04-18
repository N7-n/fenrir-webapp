import React from 'react';
import { useLocation } from 'react-router-dom';

function Result(){

  const data = useLocation().search;
  const queries = new URLSearchParams(data);
  
  const storesStr = queries.get("result");
  const jsonObj = JSON.parse(storesStr);
  const stores = jsonObj["results"]["shop"];
  console.log(jsonObj["results"]["shop"]);
  return (
    <div>
      <h1 className="pageTitle">検索結果</h1>
      {
        (function () {
          const list = [];
          for (let i = 0; i < stores.length; i++){
            list.push(<p>{stores[i]["name"]} </p>);
          }
          return <h1 className="storeTitle">{list}</h1>;
        }())
      }
    </div>
  );
};

export default Result;
