import React from 'react'
import AllMessage from './AllMessage';
import SendMessage from './SendMessage';
import './chatRoom.css'



function ChatRoom(props) {
  return (
    <div className='chatRoom'>
      <AllMessage  user={props.user}/>
      <SendMessage/>
    </div>
  )

}


export default ChatRoom