import React from "react";
import { useLocation } from 'react-router-dom';
import './result.css';
import Block from './components/block/Block'

function Result(){
  const data = useLocation().search;
  const queries = new URLSearchParams(data);
  
  const storesStr = queries.get("result");
  const jsonObj = JSON.parse(storesStr);
  const stores = jsonObj["results"]["shop"];

  const name = queries.get('name')
  const range = queries.get('range')
  const lng = queries.get('lng')
  const lat = queries.get('lat')
  var start = queries.get('start')
  if (start != 1){
    start = start / 5 + 1;
  }

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
          return (
            <div>
              <div className='storeList'>{List}</div>
              <form action="http://localhost:8080" method="GET">
                <input className="notDisplay" id="name" type="text" name="name" defaultValue={name}/>
                <input className="notDisplay" id="range" type="text" name="range" defaultValue={range}/>
                <input className="notDisplay" type="number" name="latitude" defaultValue={lat} />
                <input className="notDisplay" type="number" name="longitude" defaultValue={lng} />
                <input className="notDisplay" type="text" name="start" defaultValue={(start)*5+1}/>
                <input type="submit" value="次へ" />
              </form>
            </div>
          );
        }())
      }
    </div>
  );
};

export default Result;
