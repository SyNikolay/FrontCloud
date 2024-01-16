import React, { FC } from 'react';

import styles from './MainLayout.module.scss';

type Props = {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
