import Link from 'next/link';
import getGoogleOAuthURL from '../OAuth/getGoogleOAuthURL';

export interface ILogin {
  sampleTextProp: string;
}

const Login: React.FC<ILogin> = ({ sampleTextProp }) => {
  return (
    <div className="flex items-center w-full h-full bg-slate-600 fixed top-0 left-0 z-1">
      <div className="w-[30%] bg-purple-100 m-[auto] p-16 border-4 border-purple-500 rounded-lg">
        <div className="w-full text-3xl text-center">{sampleTextProp}</div>
        <Link href={getGoogleOAuthURL()}>
          <div className="w-full text-pink-600 text-xl text-center mt-5 cursor-pointer">
            Login with Google
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
