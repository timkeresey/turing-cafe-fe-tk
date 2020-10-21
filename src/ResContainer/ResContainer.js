import React from 'react';
import './ResContainer.css';
import { getAllRes } from '../apiCalls.js';

const ResContainer = { reservations } => {
  const resCards = reservatinons.map(res => {
    return (
      <Res
        name={res.name}
        date={res.date}
        time={res.time}
        guestsNum={res.number}
      />
    )
  })
  return (
    {resCards}
  )
}

export default ResContainer;
