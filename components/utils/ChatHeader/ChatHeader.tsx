export interface IChatHeader {
  sampleTextProp: string;
  roomInfo: Array<{ members: number; messages: number }>;
}

const ChatHeader: React.FC<IChatHeader> = ({ roomInfo }) => {
  return (
    <div className="flex flex-col justify-center w-screen bg-purple-600 h-12vh text-white">
      <div className="text-3xl pl-5">Welcome to Ejisu Community Chat</div>
      <div className="pl-5">
        members: {roomInfo[0].members} | messages: {roomInfo[0].messages}
      </div>
    </div>
  );
};

export default ChatHeader;
