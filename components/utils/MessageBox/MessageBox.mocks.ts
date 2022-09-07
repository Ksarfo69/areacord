import { IMessageBox } from './MessageBox';

const base: IMessageBox = {
  data: Array(
    {
      user_id: 2,
      time: '12:48 PM',
      message: 'This is message one',
    },
    {
      user_id: 333,
      time: '12:48 PM',
      message: 'This is message two',
    },
    {
      user_id: 4,
      time: '12:48 PM',
      message: 'This is message three',
    },
    {
      user_id: 55,
      time: '12:48 PM',
      message: 'This is message four',
    },
    {
      user_id: 5,
      time: '12:48 PM',
      message: 'This is message four',
    },
    {
      user_id: 6,
      time: '12:48 PM',
      message: 'This is message four',
    }
  ),
};

export const mockMessageBoxProps = {
  base,
};
