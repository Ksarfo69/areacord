import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import PrimaryLayout from '../components/layouts/PrimaryLayout/PrimaryLayout';
import Login from '../components/utils/Login/Login';
import MessageBox from '../components/utils/MessageBox/MessageBox';
import axiosInstance from '../config/axiosInstance';

export interface IMessageBox {
  data: Array<{
    message_id: number;
    room_id: number;
    user_id: number;
    message: string;
    time: string;
  }>;
}

const Home: NextPage<IMessageBox> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Areadcord Community Chat</title>
        <meta name="description" content="Areacord community chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PrimaryLayout>
          <MessageBox data={data} />
        </PrimaryLayout>
        <Login />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const room = {
    room_id: 1,
  };
  const res: IMessageBox = await axiosInstance.post('/room/showRoom', room);
  return {
    props: {
      data: res.data,
    },
  };
};

export default Home;
