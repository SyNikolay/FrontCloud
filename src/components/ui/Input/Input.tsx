import { FC, TextareaHTMLAttributes } from 'react';
import { WrapperTextField } from './Input.style';

interface IProps extends TextareaHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
  error?: boolean;
  helperText?: string;
  className?: string;
  value?: string;
}

export const Input: FC<IProps> = ({
  placeholder,
  name,
  label,
  type = 'text',
  error = false,
  helperText,
  className,
  onChange,
  value = '',
}) => {
  return (
    <div className={className}>
      {label && <div
        style={{
          color: 'var( --pale-dark)',
          fontSize: '14px',
          lineHeight: '20px',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>}
      <WrapperTextField
        error={error}
        name={name}
        helperText={helperText}
        placeholder={placeholder}
        variant="outlined"
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
