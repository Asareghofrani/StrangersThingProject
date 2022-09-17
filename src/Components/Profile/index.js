import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchMessages as getMessages } from "../../api.js";
import Message from "../Message";

export default function Profile({ loggedInUsername }) {
  const [messages, setMessages] = useState([]);
  console.log(loggedInUsername);
  useEffect(() => {
    const fetchMessages = async () => {
      const result = await getMessages(localStorage.getItem("token"));
      setMessages(result.messages);
      console.log(result.messages);
    };
    fetchMessages();
  }, []);
  return (
    <div>
      <Typography variant="h3">Welcome {loggedInUsername}</Typography>;
      <Typography variant="body2">Messages to Me:</Typography>;
      {messages.map((message) => {
        <Message
          key={message._id}
          fromUsername={message.fromUser.username}
          content={message.content}
          id={message._id}
        />;
      })}
      <Typography variant="body2">Messages from Me:</Typography>;
    </div>
  );
}
