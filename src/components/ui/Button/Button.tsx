import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  disabled,
  type = 'button',
  ...props
}: ButtonType) => {
  return (
    <button className={classNames(styles.Button, className, styles[variant] ?? 'primary')} type={type} {...props}>
      {children}
    </button>
  );
};
