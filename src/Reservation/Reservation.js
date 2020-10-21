import React from 'react';
import './Reservation.css';

const Reservation = { name, date, time, guestsNum } => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3>Number of Guests: {guestsNum}</h3>
    </div>
  )
}

export default Reservation;
