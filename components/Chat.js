// "use client"

// import React from "react";
// import { motion } from "framer-motion";
// import { FaComments } from "react-icons/fa";
// import Navbar from "@/components/Navbar";

// const Chat = () => {
//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 text-center pb-10">
//       {/* Animated Icon */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="text-cyan-400 text-6xl mb-6"
//       >
//         <FaComments />
//       </motion.div>

//       {/* Animated Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="text-4xl font-extrabold mb-4"
//       >
//         Personal Chats Coming Soon!
//       </motion.h1>

//       {/* Sub Text */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//         className="text-gray-400 text-lg max-w-md"
//       >
//         We&apos;re working on something exciting! Soon you&apos;ll be able to connect
//         privately with friends in real-time. Stay tuned ✨
//       </motion.p>
//     </div>
//     </>
   
//   );
// };

// export default Chat;

// app/chat/page.js or components/ChatPage.js

"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";
import 'stream-chat-react/dist/css/v2/index.css';

const ChatPage = ({ clerkUser }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [totalUsers, setTotalUsers] = useState(0);
    const USERS_PER_PAGE = 8;

  const apiKey = "zpcfhjwcrb3f";
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const [clientUsers, setClientUsers] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const chatClient = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });


  // 🟢 Fetch all users except current
//   useEffect(() => {
//     const fetchUsers = async () => {
//       if (!chatClient) return;

//       // 🟢 Add this to recreate the user if deleted
//     await chatClient.upsertUser({
//         id: userId,
//         name: userName,
//         image: `https://getstream.io/random_png/?name=${userName}`,
//       });

//       const response = await chatClient.queryUsers({ id: { $ne: userId } });
//       console.log("All users from Stream:", response.users);

//       setClientUsers(response.users);
//     };

//     fetchUsers();

//   }, [chatClient]);

useEffect(() => {
    const fetchUsers = async () => {
      if (!chatClient) return;
      setIsLoading(true);
  
      const filters = {
        id: { $ne: userId },
        ...(searchTerm && { name: { $autocomplete: searchTerm } }),
      };
  
      try {
        const response = await chatClient.queryUsers(filters, {
          limit: USERS_PER_PAGE,
          offset: page * USERS_PER_PAGE,
        });
  
        const countResponse = await chatClient.queryUsers(filters, {
          limit: 1,
          offset: 0,
        });

        console.log("All Users from stream " , response.users)

  
        setClientUsers(response.users);

        // console.log("Client Users " , clientUsers)

        setTotalUsers(countResponse.total); // This gives you total matched users
      } catch (error) {
        console.error("Error fetching users:", error);
        setClientUsers([]);
        setTotalUsers(0);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUsers();
  }, [chatClient, searchTerm, page]);
  

  // 🔵 Create or reuse 1-on-1 chat
  const startPrivateChat = async (otherUserId) => {
    if (!chatClient) return;

    const sortedIds = [userId, otherUserId].sort();
    // const uniqueChannelId = `private__${sortedIds.join('__')}`;

    const channel = chatClient.channel("messaging", {
      members: sortedIds,
    });

    await channel.watch();
    setSelectedChannel(channel);
  };

  if (!chatClient)
    return (
      <div className="h-screen bg-gray-900 text-white flex justify-center items-center text-2xl">
        Connecting to Chat...
      </div>
    );

  return (
    <Chat client={chatClient} theme="str-chat__theme-dark">
    <div className="min-h-screen w-full bg-gray-950 text-white">
    <Link href={"/"} className="bg-gray-950 w-full mt-2 inline-block">
          <button
             className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Home</span>
          </button>
        </Link>
        <div className="absolute top-6 right-6 z-50 scale-160">
        <UserButton />
        </div>
      {selectedChannel ? (
        <Channel channel={selectedChannel}>
          <div className="flex flex-col h-screen w-full">
            {/* Back Button */}
          
             
            <div className="bg-gray-900 p-2 inline-block mb-2">
          <button onClick={() => setSelectedChannel(null)}
             className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-950 hover:bg-gray-700 transition-colors`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Users</span>
          </button>
        </div>
  
            {/* Chat Window */}
            <div className="flex-1 w-full md:w-1/2 mx-auto flex flex-col">
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
              </Window>
              <Thread />
            </div>
          </div>
        </Channel>
      ) : (
        <div className="flex flex-col items-center px-4 py-6 gap-6 min-h-screen bg-gray-950">
          {/* 🔍 Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(0); // Reset page on search
            }}
            placeholder="Search users you want to chat"
            className="w-full max-w-md px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-300 focus:outline-none"
          />
  
          {/* 👥 Users List */}
          <div className="flex flex-wrap justify-center gap-4 min-h-[200px]">
            {isLoading ? (
              <div className="text-white text-lg animate-pulse">Loading users...</div>
            ) : clientUsers.length === 0 ? (
              <div className="text-white text-lg">No users found.</div>
            ) : (
              clientUsers.map((u) => (
                <div
                  key={u.id}
                  onClick={() => startPrivateChat(u.id)}
                  className="cursor-pointer bg-gray-800 p-6 rounded-lg w-50 hover:bg-gray-700"
                >
                  <img
                    src={u.image || `https://getstream.io/random_png/?name=${u.name}`}
                    alt={u.name}
                    className="w-16 h-16 mx-auto rounded-full mb-2"
                  />
                  <h3 className="text-lg text-center font-semibold">{u.name}</h3>
                </div>
              ))
            )}
          </div>
  
          {/* ⏮️ Pagination Controls */}
          {!isLoading && clientUsers.length > 0 && (
            <div className="flex gap-4 mt-4">
              {page > 0 && (
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                  className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  Previous
                </button>
              )}
              {(page + 1) * USERS_PER_PAGE < totalUsers && (
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  </Chat>
  

  );
};

export default ChatPage;
