import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('Visa');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Payment Method :</FormLabel>
      <br/>
      <RadioGroup aria-label="Playing Method" name="Playing Method" value={value} onChange={handleChange}>
        <FormControlLabel value="Palpay" control={<Radio />} label="Palpay" />
        <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
      </RadioGroup>
    </FormControl>
  );
}
