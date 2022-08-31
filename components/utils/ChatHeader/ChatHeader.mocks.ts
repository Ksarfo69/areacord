import { IChatHeader } from './ChatHeader';

const base: IChatHeader = {
  roomInfo: Array({ members: 10, messages: 23 }),
};

export const mockChatHeaderProps = {
  base,
};
