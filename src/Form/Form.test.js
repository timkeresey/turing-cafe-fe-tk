import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import Form from './Form.js';

describe('Form', () => {

  it('should render a form with the proper input fields', () => {
    const fakeAddRes = jest.fn();
    render(<Form addRes={fakeAddRes}/>);

    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Time (12:00)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Guests')).toBeInTheDocument();
  });
  
})
