import styles from './ChatHeader.module.css';

export interface IChatHeader {
  sampleTextProp: string;
}

const ChatHeader: React.FC<IChatHeader> = ({ sampleTextProp }) => {
  return (
    <div className={styles.container}>
      <div>Welcome to Ejisu Community Chat</div>
      {sampleTextProp}
    </div>
  );
};

export default ChatHeader;
