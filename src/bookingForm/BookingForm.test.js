import BookingForm from './BookingForm';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

test('full name is showing error when is empty', async () => {
  render(<BookingForm />);

  expect(await screen.findByText('Submit')).toBeInTheDocument();

  waitFor(() => {
    fireEvent.input(screen.getByRole('textbox', { name: /name/i }), {
      target: {
        value: 'test',
      },
    });
  });

  waitFor(() => {
    fireEvent.input(screen.getByRole('textbox', { name: /name/i }), {
      target: {
        value: '',
      },
    });
  });

  waitFor(() => {
    expect(screen.findByText('Full name is required.')).toBeInTheDocument();
  });
});
