import React from 'react'
import './hamza.css';
import arr from "./players";
import Players from './card1';

function PlayersList() {
  return (
  <div  className='prt'  >

{arr.map((el)=> <Players x={el}  /> )}
      

    </div>
  )
}

export default PlayersList