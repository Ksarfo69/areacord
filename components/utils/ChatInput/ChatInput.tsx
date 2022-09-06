import { useState } from 'react';

export interface IChatInput {}

const ChatInput: React.FC<IChatInput> = () => {
  const [message, setMessage] = useState<string>('');

  const messageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  console.log(message);
  return (
    <div className="flex justify-end absolute bottom-0 left-[20vw]">
      <div className="flex flex-col w-[80vw] items-center justify-center bg-purple-600 h-[15vh]">
        <div className="flex flex-row w-5/6 justify-around">
          <input
            className="w-5/6 py-3 pl-2"
            placeholder="Sign in to write a message"
            onChange={messageHandler}
          />
          <button className="bg-purple-200 w-1/6">Send</button>
        </div>
        <div className="text-white">
          Be nice :), bad words will get you banned
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
