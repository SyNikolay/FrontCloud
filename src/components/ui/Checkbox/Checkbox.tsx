import { FC } from 'react';
import { Checkbox, CheckboxProps } from '@mui/material';
import { FormControlLabelProps, FormControlLabel as MuiFormControlLabel } from '@mui/material';

const FormControlLabel: FC<FormControlLabelProps> = ({ label, control, sx, ...restProps }) => {
  return (
    <MuiFormControlLabel
      sx={{
        '&.MuiFormControlLabel-root': {
          marginLeft: '0',
          marginRight: '0',
        },
        '.MuiFormControlLabel-label': {
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '0.3px',
        },
        ...sx,
      }}
      control={control}
      label={label}
      {...restProps}
    />
  );
};

type Props = CheckboxProps & { label?: string; labelClassName?: string };

const CheckBoxItem: FC<CheckboxProps> = (props) => {
  return (
    <Checkbox
      {...props}
      disableRipple
      sx={{
        padding: 0,
        color: '#CED1D7',
        '&.Mui-checked': {
          color: '#0075C9',
        },
        ...props.sx,
      }}
    />
  );
};

export const CheckBox: FC<Props> = ({ label, labelClassName, ...props }) => {
  return label ? (
    <FormControlLabel className={labelClassName} control={<CheckBoxItem {...props} />} label={label} />
  ) : (
    <CheckBoxItem {...props} />
  );
};

