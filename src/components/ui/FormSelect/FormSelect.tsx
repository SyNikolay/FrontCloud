import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const names = ['man', 'woman'];

export const FormSelect = () => {
  const [personName, setPersonName] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <Select displayEmpty value={personName} onChange={handleChange} >
        <MenuItem disabled value="">
          <em>Пол</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
