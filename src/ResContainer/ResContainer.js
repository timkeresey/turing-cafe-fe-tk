import React from 'react';
import './ResContainer.css';
import Reservation from '../Reservation/Reservation.js'

const ResContainer = { reservations } => {
  const resCards = reservatinons.map(res => {
    return (
      <Reservation
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
