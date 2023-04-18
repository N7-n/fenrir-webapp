import React from 'react';
import { useLocation } from 'react-router-dom';

function Result(){
    const param = useLocation().search;

    const queries = new URLSearchParams(param);

  return (
    <div>
      <p>{queries}</p>
    </div>
  );
};

export default Result;
