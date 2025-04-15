"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const Chat = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 text-center pb-10">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-cyan-400 text-6xl mb-6"
      >
        <FaComments />
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl font-extrabold mb-4"
      >
        Personal Chats Coming Soon!
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-gray-400 text-lg max-w-md"
      >
        We're working on something exciting! Soon you'll be able to connect
        privately with friends in real-time. Stay tuned ✨
      </motion.p>
    </div>
    </>
   
  );
};

export default Chat;