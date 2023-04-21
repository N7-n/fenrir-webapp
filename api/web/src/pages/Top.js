import React, { useState, useEffect } from 'react';
import Result from './result/Result';

function Top() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [name, setName] = useState('');
  const [range, setRange] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        setData1(position.coords.latitude);
        setData2(position.coords.longitude);
      },function(){
        setData1(0);
        setData2(0);
      }
    )
  }, []);


  const nameInputChange = (event) => {
    setName(event.target.value);
  };
  const rangeInputChange = (event) => {
    setRange(event.target.value);
  };
  const data1InputChange = (event) => {
    setData1(event.target.value);
  };
  const data2InputChange = (event) => {
    setData2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return <Result name={name} range={range} lat={data1} lng={data2}/>;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">店名</label>
      <input id="name" type="text" name="name" value={name} onChange={nameInputChange}/>
      <label htmlFor="range">範囲</label>
      <input id="range" type="text" name="range" value={range} onChange={rangeInputChange}/>
      <input className="notDisplay" type="number" name="latitude" value={data1} onChange={data1InputChange}/>
      <input className="notDisplay" type="number" name="longitude" value={data2} onChange={data2InputChange}/>
      <input type="submit" value="Submit"/>
    </form>
  );
}
export default Top;
