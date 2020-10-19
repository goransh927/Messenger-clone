import React ,{ useState, useEffect } from 'react';
import { Button,FormControl,InputLabel,Input, Avatar } from '@material-ui/core';
import Message from './Message';
import firebase from 'firebase';
import  db  from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { useStateProviderValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import "./App.css";

function App() {
   
    const [input, setInput] = useState(''); 
    const [messages, setMessages] = useState([ ]);
        // {username:'goransh',text:'hey aman'},
        // {username:'Aman',text:'hey gt'}
   
    const [username, setUsername] = useState('');
    const [{ user }] = useStateProviderValue();

    // useState=variable in React
    // useEffect=run code on a condition in React

    useEffect(() => {
        db.collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
        });
    }, [])

    // useEffect(() => {
    //     //if its blank inside [] this code runs when the app componet loads
    //     setUsername(prompt('please enter your name'))
    // }, [])
            // console.log(input)
            // console.log(messages)
    const sendMessage = (event) =>{
        //all the logic to send a message
        event.preventDefault();
        db.collection('messages').add({
            message:input,
            username:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }) 
        // setMessages([...messages,{username:username,text:input}]);
        setInput('');
    }

    return (
            <div className="center_app">
        { !user ? (
            <Login />
          ) : (
            //    <div className="app__body">
                <Router>
                  {/* <Sidebar /> */}
                  <Switch>
                    {/* <Route path="/rooms/:roomId">
                      <Chat />
                    </Route> */}
                    <Route path="/">
                    
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=70&h=100"/>
            <h1>Messenger App</h1>
            <h2>Welcome {user.displayName}  <Avatar src={user?.photoURL} /></h2>
            
            <form className="app__form">
            {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
            <FormControl className="app__formControl">
                {/* <InputLabel>Enter a message</InputLabel> */}
                <Input className="app__input" placeholder="Enter a Message..." value={input} onChange={event => setInput(event.target.value)} />
                <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                <SendIcon />
                </IconButton>
                {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessaage}>Send message</Button> */}
            </FormControl>
            </form>
            <FlipMove>
            {
                messages.map(({id,message}) =>(
                    <Message 
                    key={id}
                    username={user.displayName}
                    message={message}
                    />
                ))
            }
            </FlipMove>
           
       
                    </Route>
                  </Switch>
                </Router>
            //   </div>
            )}
            </div>

       
    )
}

export default App;

