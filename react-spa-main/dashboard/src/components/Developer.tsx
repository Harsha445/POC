import React, { useEffect, useState} from 'react';


const Developer =({getData})=>{
  const btnHander = ()=>{
    getData('You clicked the button')
  }

 
  return(
    <div>
      <h2>Developer page</h2>
  
      <button onClick={btnHander}> click me</button>
    </div>
  )
};

export default Developer;