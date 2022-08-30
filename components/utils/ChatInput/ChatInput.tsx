export interface IChatInput {
  sampleTextProp: string;
}

const ChatInput: React.FC<IChatInput> = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-600 h-[15vh]">
      <div className="flex flex-row w-5/6 justify-around">
        <input
          className="w-5/6 py-3 pl-2"
          placeholder="Sign in to write a message"
        />
        <button className="bg-purple-200 w-1/6">Send</button>
      </div>
      <div className="text-white">
        Be nice :), bad words will get you banned
      </div>
    </div>
  );
};

export default ChatInput;
