import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Input } from 'components/ui/Input';
import { getAuthState, setEmail, setPhone, setUser } from './slice';

import styles from './Auth.module.scss';
import { Button } from 'components/ui/Button';
import { Link } from 'react-router-dom';
import { Routes } from 'utils';
import { useSelector } from 'react-redux';

export const Auth = () => {
  const dispatch = useDispatch();
  const { email, phone } = useSelector(getAuthState);

  useEffect(() => {
    dispatch(
      setUser({
        userName: 'Николай Сысоев',
        links: {
          GitHub: 'https://github.com/SyNikolay',
          Telegram: 'https://t.me/nikola219',
          Resume: 'https://ramenskoye.hh.ru/resume/ec37f875ff05e4e1e50039ed1f593875555349',
        },
      })
    );
  }, []);

  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className={styles.FormWrapper}>
        <Input
          value={phone}
          className={styles.Phone}
          name="phone"
          placeholder="+7 999 999-99-99"
          label="Номер телефона"
          onChange={(e) => dispatch(setPhone(e.target.value))}
        />
        <Input
          value={email}
          className={styles.Email}
          name="email"
          placeholder="tim.jennings@example.com"
          label="Email"
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <Link to={Routes.AUTH_FORM}>
        <Button>Начать</Button>
      </Link>
    </div>
  );
};
