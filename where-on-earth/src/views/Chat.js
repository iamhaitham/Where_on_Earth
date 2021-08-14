import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));
  const [message,setMessage]= useState("");
  const [messages,setMessages]=useState([]);
  const [senderName,setSenderName]=useState("");

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on('received_message', data => console.log(data));
 
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  const handleSendingMessage =(e)=>{
    e.preventDefault();
    socket.emit("send_message",message);
    setMessages(messages.concat({"senderName":senderName,"content":message}));
  }
  console.log(messages);
  if(undefined!=="content" && messages.length>0){
      messages.map((msg)=>console.log(msg.content))
  }


  const receivedMessage=(message)=>{
    setMessages(messages.concat({"content":message}));
  }

  socket.on("received_message",(message)=>{
    receivedMessage(message);
  });

  return ( 
    <div className="App">
        <h1>Socket Test</h1>
        <form onSubmit={(e)=>handleSendingMessage(e)}>
            <input type="text" placeholder="What's your name?" onChange={(e)=>setSenderName(e.target.value)}/>
            <input type="text" placeholder="Say something nice..." onChange={(e)=>setMessage(e.target.value)}/>
            <input type="submit" value="Send"/>
        </form>
        {messages.map((msg,index)=>{
            return <p key={index}>{msg.content}</p>
        })}
    </div>
);
}

export default App;