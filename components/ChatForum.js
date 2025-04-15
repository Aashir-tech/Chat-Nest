// "use client"

// import { useState, useEffect } from 'react';
// import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

// import 'stream-chat-react/dist/css/v2/index.css';

// const user = {
//   id: userId,
//   name: userName,
//   image: `https://getstream.io/random_png/?name=${userName}`,
// };

// const ChatForum = ({slug}) => {
//   const [channel, setChannel] = useState();
//   const client = useCreateChatClient({
//     apiKey,
//     tokenOrProvider: userToken,
//     userData: user,
//   });

//   function formatChannelName(slug) {
//     return slug
//       .split('-')                   // split by dash
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // capitalize each word
//       .join(' ');                   // join with space
//   }

//    console.log(slug)

//   useEffect(() => {
//     if (!client) return;

//     const channel = client.channel('messaging', slug , {
//       image: 'https://getstream.io/random_png/?name=react',
//       name: formatChannelName(slug),
//       members: [userId],
//     });

//     setChannel(channel);
//   }, [client]);

//   if (!client) return <div>Connecting to Forum</div>;

//   return (
//     <Chat client={client}>
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   );
// };

// export default ChatForum;
"use client"

import React from "react";
import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import 'stream-chat-react/dist/css/v2/index.css';
import '../app/layout.css';



const ChatForum = ({ clerkUser, slug }) => {
  
  const apiKey = "zpcfhjwcrb3f";
  // const apiKey = apiKey;
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user =  {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };
  

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const initChannel = async () => {
      const channel = client.channel('messaging', slug, {
        image: `https://getstream.io/random_png/?name=react`,
        name: `${slug.toUpperCase()} Discussion`,
        members: [userId],
      });
  
      await channel.watch(); //  connects and loads the channel
  
      setChannel(channel);   // Now it's ready to render
    };
  
    initChannel();
  }, [client]);

  if (!client || !channel) return <div className="min-h-screen bg-gray-950 text-white text-2xl flex justify-center items-center flex-col">JOINING THE {slug.toUpperCase()} FORUM </div>;

  return (
    <Chat client={client} theme='str-chat__theme-dark'>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
