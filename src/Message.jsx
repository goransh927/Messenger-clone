import React ,{forwardRef} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import "./Message.css"; 
import { useStateProviderValue } from "./StateProvider";

const Message = forwardRef(({message,username},ref) => {
    const isUser=username===message.username;
    const [{ user }] = useStateProviderValue();
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
         <Card className={isUser ? "message__userCard":"message_guestCard"}>
            <CardContent>
                <Typography
                color="white"
                variant="h5"
                component="h2"
                >
                {!isUser && `${message.username || 'Unknown user'} : `}  {message.message}
                </Typography>
            </CardContent>
        </Card>
           {/* <h2>{props.username} : {props.text}</h2>  */}
        </div>
    )
})

export default Message;
