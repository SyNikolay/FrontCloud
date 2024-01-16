import { useSelector } from 'react-redux';

import { Avatar } from 'components/Avatar';
import { Title } from 'components/ui/Title';

import { getUser } from 'components/Auth/slice';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { userName, links } = useSelector(getUser);

  return (
    <div className={styles.Header}>
      <Avatar userName={userName ?? 'Неизвестный Пользователь'} />
      <div className={styles.Info}>
        <Title variant="h2" color="secondary">
          {userName ?? ''}
        </Title>
        <div className={styles.Links}>
          {Object.entries(links).map(([key, value]) => {
            return (
              <Link key={key} to={value} target="_blank" className={styles.Link}>
                <img src="images/icons/folder.png" alt="folder" />
                {key}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
