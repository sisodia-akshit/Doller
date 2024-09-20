import React, { useEffect, useState } from 'react'
import { ChatApi } from '../../../Context/Chat_API'
import { NavLink, useParams } from 'react-router-dom';

function AllMessage(props) {
    const { id } = useParams();
    const [messages, setMessages] = useState();


    const getMessage = async () => {

        try {
            const response = await fetch(`${ChatApi}/rooms/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': document.cookie
                }
            });
            const data = await response.json();
            if (data.status === "success") {
                setMessages(data.message);
                // console.log(data)
            }
            let chatBox = document.getElementById('chatBox')
            chatBox.scrollTop = chatBox.scrollHeight;

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getMessage()
    }, [messages])

    if(!props.user)return <NavLink to={`/rooms`}>Go Back</NavLink>

    if (!messages) return <div>Loading...</div>;


    return (
        <div className='chatBox' id='chatBox'>
            {messages.map((curr, i) => {
                if(curr.user.userName  == props.user.userName){

                    return (
                        <div className='SendMsg' key={i}>
                         <span>{curr.messageText}</span>
                        </div>
                    )
                }
                return (
                    <div className='chatMsg' key={i}>
                        <span className='sender'>{curr.user.userName}: </span>
                        <span className='senderMsg'>{curr.messageText}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default AllMessage
