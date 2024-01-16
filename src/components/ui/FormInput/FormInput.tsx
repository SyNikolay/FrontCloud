import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';
import { WrapperTextField } from './FormInput.style';

interface IProps {
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
  helperText?: string;
  control: Control<any>;
  className?: string;
  multiline?: boolean;
  rows?: number;
}

export const FormInput: FC<IProps> = ({
  name,
  control,
  placeholder,
  label,
  type = 'text',
  className,
  multiline = false,
  rows,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={className}>
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
          <WrapperTextField
            value={value}
            onChange={(event) => {
              console.log(event.target.value);
              onChange(event.target.value);
            }}
            error={!!error}
            helperText={error ? error.message : ' '}
            placeholder={placeholder}
            variant="outlined"
            type={type}
            multiline={multiline}
            rows={rows}
          />
        </div>
      )}
    />
  );
};
