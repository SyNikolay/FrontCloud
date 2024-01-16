import React, { ElementType, FC } from 'react';

import classNames from 'classnames';

import styles from './Title.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type TextColor = 'primary' | 'secondary';

interface Props {
  component?: ElementType;
  children: string;
  className?: string;
  variant?: Variant;
  color?: TextColor;
}
export const Title: FC<Props> = ({ children, variant = 'h1', color = 'primary', component, className }) => {
  const Component = component ?? (variant as Variant);

  return (
    <Component className={classNames(styles.Title, styles[variant], styles[color], className)}>{children}</Component>
  );
};
