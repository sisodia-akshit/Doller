import React, { useState } from 'react'
import { ChatApi } from '../../../Context/Chat_API'
import { useParams } from 'react-router-dom'


function SendMessage(props) {
    const {id} = useParams()
    const [message,setMessages]     = useState('')
    
    

    const  handleSendMessage = async(e) => {
        e.preventDefault();
        // console.log(message)
        const messageText={
            messageText:message
        }
        try {
            fetch(`${ChatApi}/rooms/${id}`,{
                method: 'PATCH',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'authorization': document.cookie
                }),
                body: JSON.stringify(messageText)
            })
            console.log(JSON.stringify(messageText))
            setMessages('')
            
        } catch (e) {
            console.log(e)
        }



    }


  return (
    <form className='sendMsg' onSubmit={handleSendMessage}>
        <input type="text" value={message} onChange={(e) => setMessages(e.target.value)} placeholder='Type here'/>
        <button type="submit">Send</button>
    </form>
  )
}

export default SendMessage