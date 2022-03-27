
import React from 'react'
// import { useState } from 'react'
// import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'
// import axios from 'axios'
const Chat = () => {


    // const [email,setEmail]=useState("");
    // const [chat,setChat]=useState(null);
    // function getOrCreateUser(callback) {
    //     axios.put(
    //         'https://api.chatengine.io/users/',
    //         {username: email, email: email, secret: email},
    //         {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
    //     )
    //     .then(r => callback(r.data))
    //     .catch(e => console.log('Get or create user error', e))
    // }

    // function getOrCreateChat(callback) {
    //     axios.put(
    //         'https://api.chatengine.io/chats/',
    //         {usernames: [email, 'Adam La Morre'], is_direct_chat: true},
    //         {headers: {
    //             "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
    //             "User-Name": email,
    //             "User-Secret": email,
    //         }}
    //     )
    //     .then(r => callback(r.data))
    //     .catch(e => console.log('Get or create chat error', e))
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();

    //     console.log('Sending Email', email)

    //     getOrCreateUser(
    //         user => {
                 
    //             getOrCreateChat(chat => {
    //                 setChat(chat)
    //             })
    //         }
    //     )
    // }

  return (
    <div>

 {/* <form onSubmit={e => handleSubmit(e)}>
                    <input 
                        placeholder='Your Email'
                        onChange={e => setEmail(e.target.value)}/>
                </form>
      <ChatEngineWrapper>
                    <Socket 
                        projectID={process.env.REACT_APP_CE_PROJECT_ID}
                        userName={email}
                        userSecret={email}
                    />
                    <ChatFeed activeChat={chat.id} />
                </ChatEngineWrapper> */}
    </div>
  )
}

export default Chat
