import React from 'react';
import { useLocation } from 'react-router-dom';
import './result.css';
import Block from './components/block/Block'

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
          const List = [];
          for (let i = 0; i < stores.length; i++){
            List.push(
              <Block store={stores[i]}/>
            );
          }
          return <div className='storeList'>{List}</div>;
        }())
      }
    </div>
  );
};

export default Result;
