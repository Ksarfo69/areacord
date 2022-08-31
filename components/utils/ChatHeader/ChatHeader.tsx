export interface IChatHeader {
  sampleTextProp?: string;
  roomInfo: Array<{ members: number; messages?: number }>;
}

const ChatHeader: React.FC<IChatHeader> = ({ roomInfo }) => {
  return (
    <div className="flex justify-end absolute top-0 left-[20vw]">
      <div className="flex flex-col w-[80vw] justify-center w-screen bg-purple-600 h-[12vh] text-white">
        <div className="text-3xl pl-5">Welcome to Ejisu Community Chat</div>
        <div className="pl-5">
          members: {roomInfo[0].members} | messages: {roomInfo[0].messages}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
