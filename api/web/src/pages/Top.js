import React, { useState, useEffect } from 'react';

function Top() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

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

  return (
    <form action="http://localhost:8080" method="GET">
      <label htmlFor="name">店名</label>
      <input id="name" type="text" name="name"/>
      <label htmlFor="range">範囲</label>
      <select name="range">
        <option value="1">300m</option>
        <option value="2">500m</option>
        <option value="3">1000m</option>
        <option value="4">2000m</option>
        <option value="5">3000m</option>
      </select>
      <input className="notDisplay" type="number" name="latitude" defaultValue={data1} required/>
      <input className="notDisplay" type="number" name="longitude" defaultValue={data2} required/>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default Top;
