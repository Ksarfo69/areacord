import Sidebar from '../../navigation/Sidebar/Sidebar';
import ChatHeader from '../../utils/ChatHeader/ChatHeader';
import ChatInput from '../../utils/ChatInput/ChatInput';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <ChatHeader roomInfo={Array({ members: 10, messages: 23 })} />
      {children}
      <ChatInput />
    </div>
  );
};

export default PrimaryLayout;
