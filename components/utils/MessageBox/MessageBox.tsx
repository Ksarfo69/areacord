import Image from 'next/image';

export interface IMessageBox {
  data: Array<{
    message_id: number;
    room_id: number;
    user_id: number;
    message: string;
    time: string;
  }>;
}

const MessageBox: React.FC<IMessageBox> = ({ data }) => {
  return (
    <div className="flex justify-end absolute top-[12vh] left-[20vw] w-[80vw] bg-red-600">
      <div className="h-[73vh] w-[80vw] overflow-y-scroll bg-purple-300 pl-5 border-y-2 border-slate-600">
        <div className="py-4 text-xl cursor-pointer underline">
          Load more messages...
        </div>
        {data?.map((message) => (
          <div
            className="flex flex-row py-1 mb-3 transition ease-in-out hover:bg-purple-600"
            key="messagebox"
          >
            <div className="w-[35px] h-[35px] relative">
              <Image src="/favicon.ico" layout="fill" alt="" key="image" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-around">
                <div className="font-bold text-md" key="name">
                  {message.user_id}
                </div>
                <div key="time">
                  {message.time.slice(11, 16)} {message.time.slice(0, 10)}
                </div>
              </div>
              <div className="pt-1 pl-8 text-md" key="message">
                {message.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBox;
