import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { SelectProps } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

const names = ['man', 'woman'];

type Props = {
  name: string;
  control: any;
  label: string;
  required?: boolean;
  defaultValue?: string;
} & SelectProps;

export const FormSelect: FC<Props> = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <FormControl sx={{ width: '100%' }}>
            {label && (
              <div
                style={{
                  color: 'var( --pale-dark)',
                  fontSize: '14px',
                  lineHeight: '20px',
                  marginBottom: '8px',
                }}
              >
                {label}
              </div>
            )}
            <Select displayEmpty onChange={onChange} value={value} error={!!error}>
              <MenuItem disabled value="">
                <em>Пол</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        );
      }}
    />
  );
};
