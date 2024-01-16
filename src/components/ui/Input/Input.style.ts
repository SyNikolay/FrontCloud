import { TextField, styled } from '@mui/material';

export const WrapperTextField = styled(TextField)(() => ({
  '&': {
    width: '100%',
    marginBottom: '0px',
  },

  '& .MuiInput-root:before, & .MuiInput-root:after': {
    borderBottom: '2px solid var(--grey)',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover:not(.Mui-disabled), &.Mui-focused': {
      fieldset: {
        border: '2px solid var(--grey)',
      },
    },
  },
  '& .MuiInputBase-input.MuiOutlinedInput-input': {
    color: 'var(--dark)',
    fontSize: '14px',
    lineHeight: '18px',
    padding: '0px',
    height: '20px',
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl': {
    padding: '12px',
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root.MuiAutocomplete-inputRoot': {
    padding: '10px 35px 10px 10px',
    gap: '5px',
  },
  '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
    padding: '15px',
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    lineHeight: '12px',
    color: 'var(--grey)',
    '&.Mui-focused': {
      color: 'var(--grey)',
    },
    '&.Mui-disabled': {
      zIndex: 1,
    },
  },
  '& .MuiInput-input': {
    color: 'var(--black)',
    padding: '4px 0',
  },
}));
