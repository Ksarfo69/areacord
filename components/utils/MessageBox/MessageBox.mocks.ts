import { IMessageBox } from './MessageBox';

const base: IMessageBox = {
  messageInfo: Array(
    {
      image: 'favicon.ico',
      name: 'Kwame',
      time: '12:48 PM',
      message: 'This is message one',
    },
    {
      image: 'favicon.ico',
      name: 'Adu',
      time: '12:48 PM',
      message: 'This is message two',
    },
    {
      image: 'favicon.ico',
      name: 'Poku',
      time: '12:48 PM',
      message: 'This is message three',
    },
    {
      image: 'favicon.ico',
      name: 'Sarfo',
      time: '12:48 PM',
      message: 'This is message four',
    },
    {
      image: 'favicon.ico',
      name: 'Sarfo',
      time: '12:48 PM',
      message: 'This is message four',
    },
    {
      image: 'favicon.ico',
      name: 'Sarfo',
      time: '12:48 PM',
      message: 'This is message four',
    }
  ),
};

export const mockMessageBoxProps = {
  base,
};
