import { IChatHeader } from './ChatHeader';

const base: IChatHeader = {
  sampleTextProp: 'Hello world!',
  roomInfo: Array({ members: 10, messages: 23 }),
};

export const mockChatHeaderProps = {
  base,
};
