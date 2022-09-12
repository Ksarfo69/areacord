import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import getGoogleOAuthURL from '../OAuth/getGoogleOAuthURL';

export interface ILogin {
  showLogin: boolean;
  setshowLogin: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<ILogin> = ({ showLogin, setshowLogin }) => {
  return showLogin ? (
    <div className="flex items-center w-full h-full bg-transparent backdrop-blur-sm fixed top-0 left-0 z-1">
      <div className="w-[30%] bg-purple-100 m-[auto] p-16 border-4 border-purple-500 rounded-lg">
        <div className="w-full text-3xl text-center">
          Login to join the chat
        </div>
        <Link href={getGoogleOAuthURL()}>
          <div
            className="w-full text-pink-600 text-xl text-center mt-5 cursor-pointer"
            onClick={() => setshowLogin(false)}
          >
            Login with Google
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Login;
