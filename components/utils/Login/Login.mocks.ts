import { ILogin } from './Login';

const base: ILogin = {
  showLogin: true,
  setshowLogin: () => false,
};

export const mockLoginProps = {
  base,
};
