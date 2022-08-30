import Image from 'next/image';

export interface ISidebar {
  sampleTextProp: string;
}

const Sidebar: React.FC<ISidebar> = ({ sampleTextProp }) => {
  return (
    <div className="flex flex-col w-0 md:w-1/4 lg:w-1/5 h-screen bg-gradient-to-t from-purple-200 to-purple-600">
      <div className="flex flex-col items-center justify-center w-full h-1/2 text-white">
        <div className="relative w-1/4 h-1/4">
          <Image src="favicon.ico" alt="" layout="fill" />
        </div>
        <div className="text-4xl md:text-3xl">Areacord</div>
        <div className="3xl text-center">
          A community chat app {sampleTextProp}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;