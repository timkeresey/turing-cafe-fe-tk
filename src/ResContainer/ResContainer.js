import React from 'react';
import './ResContainer.css';
import Reservation from '../Reservation/Reservation.js'

const ResContainer = ({ reservations })=> {
  const resCards = reservations.map(res => {
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
    <div>
      {resCards}
    </div>
  )
}

export default ResContainer;
