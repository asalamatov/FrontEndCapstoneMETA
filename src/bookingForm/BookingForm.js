import {
  FormControl,
  Input,
  Stack,
  FormLabel,
  FormHelperText,
  Button,
  TextField,
  Select,
  Option,
} from '@mui/joy';
import { useForm } from 'react-hook-form';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';

const BookingForm = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      date: DateTime.now(),
      time: '17',
      occasion: 'anniversary',
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ mt: 1, p: 3 }} direction="column" spacing={3}>
        <FormControl size="lg" error={formState.errors.name}>
          <FormLabel className="primary-color">Full Name</FormLabel>
          <Input
            size="lg"
            className="primary-border"
            placeholder="John Doe"
            {...register('name', {
              required: true,
              pattern: /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/i,
            })}
          />
          {formState.errors.name ? (
            <FormHelperText>Full name is required.</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl size="lg" error={formState.errors.email}>
          <FormLabel className="primary-color">Email</FormLabel>
          <Input
            size="lg"
            className="primary-border"
            placeholder="jonh.doe@example.com"
            {...register('email', {
              required: true,
              email: true,
            })}
          />
          {formState.errors.email ? (
            <FormHelperText>Correct email address is required.</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel className="primary-color">Choose date</FormLabel>
          <LocalizationProvider dateAdapter={AdapterLuxon}>
            <DatePicker
              name="date"
              className="primary-border"
              TextField={<TextField value={DateTime.now().toUTC()} />}
            />
          </LocalizationProvider>
          {formState.errors.date ? (
            <FormHelperText>Valid date is required.</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl size="lg" error={formState.errors.time}>
          <FormLabel className="primary-color">Choose time</FormLabel>
          <Select
            className="primary-border"
            defaultValue="17"
            {...register('time', {
              required: true,
            })}
          >
            <Option value="17">17:00</Option>
            <Option value="18">18:00</Option>
            <Option value="19">19:00</Option>
            <Option value="20">20:00</Option>
            <Option value="21">21:00</Option>
            <Option value="22">22:00</Option>
          </Select>
          {formState.errors.time ? (
            <FormHelperText>Select valid time is required.</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl size="lg" error={formState.errors.guests}>
          <FormLabel className="primary-color">Guests</FormLabel>
          <Input
            size="lg"
            className="primary-border"
            placeholder="0"
            type="number"
            {...register('guests', {
              required: true,
            })}
          />
          {formState.errors.guests ? (
            <FormHelperText>Number of guests is required.</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl size="lg" error={formState.errors.occasion}>
          <FormLabel className="primary-color">Occasion</FormLabel>
          <Select
            className="primary-border"
            defaultValue="anniversary"
            {...register('occasion', {
              required: true,
            })}
          >
            <Option value="anniversary">Anniversary</Option>
            <Option value="birthday">Birthday</Option>
            <Option value="business-meal">Business Meal</Option>
            <Option value="date">Date</Option>
            <Option value="special-occassion">Special Occassion</Option>
          </Select>
          {formState.errors.occasion ? (
            <FormHelperText>Select occasion is required.</FormHelperText>
          ) : null}
        </FormControl>
        <Button type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default BookingForm;
