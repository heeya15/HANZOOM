import './Chat.scss';
import { useEffect, useState } from 'react';
// import { ChatDump } from './ChatDump';
import { MyChatList } from './MyChatList';
import { useDispatch, useSelector } from 'react-redux';
import { getChatInfo } from '../../Reducer/chatSlice';

import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';

export const MyChat = (props) => {
  const { show, setShow } = props;
  const outSection = useRef();
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  // 바깥 화면을 클릭해도 채팅리스트를 사라지게하는 함수
  const clickOutSection = (e) => {
    if (show && outSection.current === e.target) {
      setShow(false);
    }
  };

  useEffect(() => {
    dispatch(getChatInfo());
  }, []);

  return (
    <div
      className={show ? 'myChatWrap showChatWrap' : 'myChatWrap hideChatWrap'}
      ref={outSection}
      onClick={(e) => clickOutSection(e)}>
      {console.log(props)}
      <div className={show ? 'myChat showChatList' : 'myChat hideChatList'}>
        <div className="title">
          내 채팅 목록
          <CloseIcon
            className="closeIcon"
            style={{ fontSize: '28px' }}
            onClick={() => setShow(false)}
          />
        </div>
        <div className="myChatList">
          {chat.chatInfo.map((chat, index) => (
            <MyChatList key={index} chat={chat} />
          ))}
        </div>
      </div>
    </div>
  );
};
