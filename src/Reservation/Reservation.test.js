import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Reservation from './Reservation.js';

describe('Reservation', () => {

  it('should render a reservation with the correct info passed down in props', () => {
    const fakeRes = {
      name: 'Roscoe',
      date: '11/13',
      time: '6:00',
      number: 3
    };
    render(
      <Reservation
        name={fakeRes.name}
        date={fakeRes.date}
        time={fakeRes.time}
        guestsNum={fakeRes.number}
      />
    );

    expect(screen.getByText('Roscoe')).toBeInTheDocument();
    expect(screen.getByText('Date: 11/13')).toBeInTheDocument();
    expect(screen.getByText('Time: 6:00')).toBeInTheDocument();
    expect(screen.getByText('Number of Guests: 3')).toBeInTheDocument();
  });
})
