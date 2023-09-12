import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from '../BookingForm';

// Mock the dispatch and submitForm functions
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

beforeEach(() => {
  mockDispatch.mockClear();
  mockSubmitForm.mockClear();
});

describe('BookingForm', () => {
  it('renders the form elements', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    // Check if form elements are present
    expect(screen.getByText('Book a Table')).toBeInTheDocument();
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  it('updates form data when inputs change', () => {
    render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    // Simulate input changes
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-09-12' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    // Check if form data is updated
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2023-09-12' });
    expect(mockSubmitForm).not.toHaveBeenCalled(); // Submit should not be called yet
  });

  it('submits the form when the submit button is clicked', () => {
    render(<BookingForm availableTimes={["18:00"]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

    // Simulate input changes
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-09-12' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    // Simulate form submission
    fireEvent.click(screen.getByText('Make Your reservation'));

    // Check if submitForm is called with the correct form data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2023-09-23',
      time: '19:00',
      guests: '4',
      occasion: 'Birthday',
    });
  });
});