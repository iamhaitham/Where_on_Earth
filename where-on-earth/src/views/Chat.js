import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from '../styling/chat.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(70),
      width: '25%',
    },
  },
}));

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));
  const [message,setMessage]= useState("");
  const [messages,setMessages]=useState([]);
  const [senderName,setSenderName]=useState("");
  const classes = useStyles();

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
    socket.emit("send_message",`${senderName},  ${message}`);
    setMessages(messages.concat({"senderName":senderName,"content":message,"background":"#8e24aa","leftMargin":"25%"}));
  }
  console.log(messages);
  if(undefined!=="content" && messages.length>0){
      messages.map((msg)=>console.log(msg.content))
  }


  const receivedMessage=(message)=>{
    setMessages(messages.concat({"content":message,"background":"#c2185b","leftMargin":"45%"}));
  }

  socket.on("received_message",(message)=>{
    receivedMessage(message);
  });

  return ( 
    <div className="App">
      <Header/>
        <form onSubmit={(e)=>handleSendingMessage(e)} className={`${classes.root},${styles.chatFormResponsive}`}>
        <div className={styles.chatForm}>
          <TextField id="standard-basic" label="What's your name?" onChange={(e)=>setSenderName(e.target.value)}/>
          <TextField id="standard-basic" label="Say something nice..." onChange={(e)=>setMessage(e.target.value)}/>
          <input type="submit" value="send" className={styles.sendButton}/>
        </div>
        </form>
        {messages.map((msg,index)=>{
            return <p key={index} style={{backgroundColor:msg.background,marginLeft:msg.leftMargin}} className={styles.messagesInContainer}>{msg.senderName}  {msg.content}</p>
        })}
        <Footer/>
    </div>
);
}

export default App;