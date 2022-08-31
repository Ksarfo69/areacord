import type { NextPage } from 'next';
import PrimaryLayout from '../components/layouts/PrimaryLayout/PrimaryLayout';
import MessageBox from '../components/utils/MessageBox/MessageBox';

const messages = Array(
  {
    image: '/public/favicon.ico',
    name: 'Kwame',
    time: '12:48 PM',
    message: 'This is message one',
  },
  {
    image: '/public/favicon.ico',
    name: 'Adu',
    time: '12:48 PM',
    message: 'This is message two',
  },
  {
    image: '/public/favicon.ico',
    name: 'Poku',
    time: '12:48 PM',
    message: 'This is message three',
  },
  {
    image: '/public/favicon.ico',
    name: 'Sarfo',
    time: '12:48 PM',
    message: 'This is message four',
  },
  {
    image: '/public/favicon.ico',
    name: 'Sarfo',
    time: '12:48 PM',
    message: 'This is message four',
  },
  {
    image: '/public/favicon.ico',
    name: 'Sarfo',
    time: '12:48 PM',
    message: 'This is message four',
  }
);

const Home: NextPage = () => {
  return (
    <PrimaryLayout>
      <MessageBox messageInfo={messages} />
    </PrimaryLayout>
  );
};

export default Home;
