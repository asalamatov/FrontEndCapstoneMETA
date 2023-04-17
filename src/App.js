import { Box, Typography } from '@mui/joy';
import BookingForm from './bookingForm/BookingForm';

import './App.css';

function App() {
  return (
    <Box className="App">
      <Typography variant="h1" fontSize={15}>
        Reserve a table
      </Typography>
      <BookingForm />
    </Box>
  );
}

export default App;
