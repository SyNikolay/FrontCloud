export interface AuthState {
  user: User;
  email: string;
  phone: string;
  isAuth: boolean;
}

export type User = {
  userName?: string;
  links: Links;
};

export type AuthType = {
  email: string;
  phone: string;
};

type Link = 'Telegram' | 'GitHub' | 'Resume';

type Links = Partial<Record<Link, string>>;
