"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLock,
  FaRocket,
  FaPaintBrush,
  FaCheck,
  FaQuoteLeft,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const testinomials = [
    {
      name: "Azeem Khan",
      quote:
        "Chat Nest is my go-to app for staying in touch with my team. Fast, clean, and secure.",
    },
    {
      name: "Ankit Pasi",
      quote:
        "I love the design and real-time experience. The Pro plan is totally worth it!",
    },
    {
      name: "Ladaf Rehan",
      quote:
        "Best chatting platform I've used — feels modern and super easy to use.",
    },
  ];

  // const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set the initial theme based on system preference or localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <>
    <Navbar darkMode={darkMode} />
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Theme Toggle */}
      <div className="absolute sm:top-20 top-20 sm:right-5 right-2 z-10">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-200 hover:bg-gray-300"
          } transition-colors`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

       {/* Hero Section */}
       <div className="max-w-8xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/3 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-purple-700' : 'bg-purple-500'}`}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 space-y-8 z-10"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mb-2 px-4 py-1 rounded-full text-sm font-medium bg-opacity-20 border border-opacity-20 backdrop-blur-sm
                         tracking-wider uppercase
                         bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/30"
            >
              Next generation messaging
            </motion.div>

            <motion.h1
              className={`text-5xl md:text-6xl font-extrabold leading-tight ${
                darkMode ? "text-gradient-cyan" : "text-gradient-dark"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Chat Nest
              </span>
            </motion.h1>
          </div>

          <motion.p
            className={`text-lg md:text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Connect instantly with your friends and team — secure, fast, and
            beautifully simple.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/chat">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 transform">
                Start Chatting
              </button>
            </Link>

            <Link href="/features">
              <button
                className={`px-8 py-4 rounded-xl text-lg font-medium shadow-md transition-all duration-300 hover:scale-105 transform border-2 ${
                  darkMode
                    ? "border-gray-700 hover:border-gray-600 text-white"
                    : "border-gray-300 hover:border-gray-400 text-gray-800"
                }`}
              >
                Explore Features
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative z-10"
        >
          <div
            className={`p-4 rounded-3xl ${
              darkMode ? "bg-gray-800/40" : "bg-white/80"
            } backdrop-blur-sm shadow-xl border ${
              darkMode ? "border-gray-700/50" : "border-gray-200"
            }`}
          >
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div
                className={`absolute -inset-0.5 rounded-3xl blur opacity-30 ${
                  darkMode ? "bg-cyan-500" : "bg-cyan-400"
                }`}
              ></div>
              <img
                src="/images/chat-interface.svg"
                alt="Chat Interface Illustration"
                className="w-full max-w-md h-auto rounded-2xl relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
        .text-gradient-cyan {
          background: linear-gradient(to right, #67e8f9, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .text-gradient-dark {
          background: linear-gradient(to right, #0891b2, #0e7490);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      {/* Why Chat nest section */}
      <section className={`${
        darkMode ? "bg-gray-950 text-gray-900" : "bg-gray-50 text-gray-900"
      } py-16 px-6`}>
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-cyan-400">Why Chat Nest?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaRocket />,
                title: "Fast & Real-time",
                desc: "Experience lightning-fast messaging with real-time updates.",
              },
              {
                icon: <FaLock />,
                title: "Secure Messaging",
                desc: "End-to-end encryption keeps your conversations private.",
              },
              {
                icon: <FaPaintBrush />,
                title: "Beautiful UI",
                desc: "Modern, clean design for a joyful chatting experience.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"}  p-6  rounded-2xl shadow-md`}
              >
                <div className={`${darkMode ? "text-cyan-400" : "text-gray-950"} text-3xl mb-2`}>{icon}</div>
                <h3 className="text-xl font-semibold  ">{title}</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-950"} mt-2 `}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className= {`${darkMode ? "bg-gray-950" : "bg-gray-50"} py-20 px-6`}>
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-cyan-400">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                title: "Free",
                price: "$0",
                features: ["Unlimited Chats", "Basic Support", "Public Rooms"],
              },
              {
                title: "Pro",
                price: "$9/mo",
                features: [
                  "Private Rooms",
                  "Media Sharing",
                  "Priority Support",
                ],
              },
              {
                title: "Team",
                price: "$29/mo",
                features: ["Team Management", "Analytics", "Premium Support"],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className= {`${darkMode ? "bg-gray-800 text-cyan-400" : "bg-gray-200 text-gray-950"}rounded-2xl p-8 shadow-md`}
              >
                <h3 className="text-xl font-bold  ">
                  {plan.title}
                </h3>
                <p className="text-3xl font-extrabold my-4">{plan.price}</p>
                <ul className={`space-y-2 ${darkMode ? "text-gray-50" : "text-gray-950"} text-left`}>
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <FaCheck className="text-green-400" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 py-2 rounded-xl font-medium">
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${darkMode ? "bg-gray-950" : "bg-gray-50"} py-20 px-6`}>
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold text-cyan-400">What Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6 ">
            {testinomials.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className={`${darkMode ? "bg-gray-800 " : "bg-gray-300"} rounded-xl p-6 text-left shadow-md`}
              >
                <p className={`${darkMode ? "text-white" : "text-gray-950"} mb-4`}>
                  <FaQuoteLeft className="inline mr-2" />
                  <span className="italic">{testimonial.quote}</span>
                </p>
                <h4 className={`${darkMode ? "text-gray-50" : "text-gray-900"} font-semibold text-center`}>
                  {testimonial.name}
                </h4>
                <button className="mt-4 text-sm bg-cyan-600 w-full py-2 rounded-xl hover:bg-cyan-700 ">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? "bg-gray-950" : "bg-gray-50 hover:text-black"} py-10 px-6 `}>
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
          <h3 className="text-2xl text-cyan-400 font-bold">
            Subscribe to our Newsletter
          </h3>
          <form
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md "
            action="https://formsubmit.co/aashirharis8@gmail.com"
            method="POST"
          >
            
              <input
                type="email"
                placeholder="Enter your email"
                className={`${darkMode ? "text-white-950" : "text-gray-950"} bg-gray-200 w-full px-5 py-2 rounded-xl `}
                required
              />


            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-xl font-medium"
            >
              Subscribe
            </button>
          </form>

          <div className={`${darkMode ? "text-gray-400" : "text-gray-700"
          }  flex space-x-6 `}>
            <Link href="#" className={`${darkMode ? "hover:text-white" : "hover:text-gray-950"}`}>
              Privacy
            </Link>
            <Link href="/about" className={`${darkMode ? "hover:text-white" : "hover:text-gray-950"}`}>
              About us
            </Link>
            <Link href="/contact" className={`${darkMode ? "hover:text-white" : "hover:text-gray-950"}`}>
              Contact
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} Chat Nest. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}


