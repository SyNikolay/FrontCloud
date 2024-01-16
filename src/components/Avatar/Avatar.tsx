import { getInitials } from 'utils';

import styles from './Avatar.module.scss';

type Prors = {
  userName: string;
};

export const Avatar = ({ userName }: Prors) => {
  return (
    <div className={styles.Avatar}>
      <span className={styles.Initials}>{getInitials(userName, 'Avatar.tsx')}</span>
    </div>
  );
};
