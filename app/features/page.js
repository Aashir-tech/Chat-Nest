"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Moon, Sun, Shield, Zap, Users, Cloud, Lock, Code, Sparkles, MessageSquare } from 'lucide-react';

export default function FeaturesPage() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    // Set the initial theme based on system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Features data
  const features = [
    {
      icon: <Shield className="text-cyan-400" size={32} />,
      title: "End-to-End Encryption",
      description: "All messages are encrypted from sender to receiver, ensuring your conversations remain private and secure."
    },
    {
      icon: <Zap className="text-cyan-400" size={32} />,
      title: "Lightning Fast",
      description: "Built with performance in mind, Chat Nest delivers messages instantly across any device or platform."
    },
    {
      icon: <Users className="text-cyan-400" size={32} />,
      title: "Group Conversations",
      description: "Create channels for your team or friend groups with powerful organization tools."
    },
    {
      icon: <Cloud className="text-cyan-400" size={32} />,
      title: "Cloud Sync",
      description: "Access your messages from anywhere with reliable cloud synchronization across all your devices."
    },
    {
      icon: <Lock className="text-cyan-400" size={32} />,
      title: "Self-Destructing Messages",
      description: "Set messages to automatically delete after they've been read or after a set period of time."
    },
    {
      icon: <MessageSquare className="text-cyan-400" size={32} />,
      title: "Rich Media Support",
      description: "Share images, videos, documents, and more with integrated previews and organization."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={toggleTheme}
          className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Header */}
      <header className="pt-20 pb-12 px-6 max-w-7xl mx-auto">
        <Link href="/" className="inline-block mb-12">
          <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Home</span>
          </button>
        </Link>
        
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-2 px-4 py-1 rounded-full text-sm font-medium bg-opacity-20 border border-opacity-20 backdrop-blur-sm
                      tracking-wider uppercase
                      bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/30"
          >
            Powerful Features
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-gradient-cyan' : 'text-gradient-dark'}`}
          >
            Everything You Need to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Connect</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Chat Nest combines security, speed, and simplicity to create the perfect messaging experience for teams and friends alike.
          </motion.p>
        </div>
      </header>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-cyan-700' : 'bg-cyan-500'}`}></div>
        <div className={`absolute bottom-1/4 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-purple-700' : 'bg-purple-500'}`}></div>
      </div>

      {/* Features Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm
              ${darkMode 
                ? 'bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700/50' 
                : 'bg-white/80 hover:bg-white border border-gray-200'} 
              hover:shadow-lg group`}
            >
              <div className={`p-4 rounded-xl mb-4 inline-block 
                ${darkMode ? 'bg-gray-900/70' : 'bg-gray-100'}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Advanced Features Spotlight */}
      <section className={`py-16 px-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-gradient-cyan' : 'text-gradient-dark'}`}
            >
              Advanced Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Discover what makes Chat Nest the most powerful messaging platform available today.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`rounded-3xl overflow-hidden ${darkMode ? 'bg-gray-800/70' : 'bg-white/90'} backdrop-blur-sm shadow-xl`}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  Multi-Platform Synchronization
                </h3>
                <ul className="space-y-4">
                  {[
                    "Seamless sync across desktop, mobile, and web",
                    "Real-time message delivery with offline support",
                    "Smart notification management",
                    "Continue conversations across any device"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="flex items-start"
                    >
                      <svg className="h-6 w-6 text-cyan-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} p-8 md:p-12 flex items-center justify-center`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative w-full max-w-md"
                >
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-cyan-500/20">
                    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
                      <rect width="320" height="240" fill={darkMode ? "#1e293b" : "#f1f5f9"} />
                      <rect x="20" y="20" width="80" height="200" rx="8" fill={darkMode ? "#0f172a" : "#e2e8f0"} />
                      <rect x="110" y="20" width="80" height="200" rx="8" fill={darkMode ? "#0f172a" : "#e2e8f0"} />
                      <rect x="200" y="20" width="100" height="200" rx="8" fill={darkMode ? "#0f172a" : "#e2e8f0"} />

                      {/* Device screens */}
                      <circle cx="60" cy="40" r="10" fill="#06b6d4" />
                      <rect x="30" y="60" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      <rect x="30" y="75" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      <rect x="30" y="90" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      
                      <circle cx="150" cy="40" r="10" fill="#06b6d4" />
                      <rect x="120" y="60" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      <rect x="120" y="75" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      <rect x="120" y="90" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      
                      <circle cx="250" cy="40" r="10" fill="#06b6d4" />
                      <rect x="220" y="60" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      <rect x="220" y="75" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      <rect x="220" y="90" width="60" height="8" rx="4" fill={darkMode ? "#64748b" : "#94a3b8"} />
                      
                      {/* Sync arrows */}
                      <path d="M90,130 L120,130 M120,130 L110,120 M120,130 L110,140" stroke="#06b6d4" strokeWidth="2" />
                      <path d="M180,130 L210,130 M210,130 L200,120 M210,130 L200,140" stroke="#06b6d4" strokeWidth="2" />
                      
                      {/* Connection dots */}
                      <circle cx="60" cy="130" r="5" fill="#06b6d4" />
                      <circle cx="150" cy="130" r="5" fill="#06b6d4" />
                      <circle cx="250" cy="130" r="5" fill="#06b6d4" />
                      
                      {/* Status indicators */}
                      <rect x="40" y="180" width="40" height="20" rx="10" fill="#06b6d4" />
                      <rect x="130" y="180" width="40" height="20" rx="10" fill="#06b6d4" />
                      <rect x="230" y="180" width="40" height="20" rx="10" fill="#06b6d4" />
                    </svg>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 blur-xl opacity-70"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-70"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-gradient-cyan' : 'text-gradient-dark'}`}
          >
            Ready to Experience Chat Nest?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Join thousands of teams and friends who already enjoy secure, fast, and beautiful messaging.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/chat">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 transform">
                Start Chatting
              </button>
            </Link>
            
            <Link href="/pricing">
              <button className={`px-8 py-4 rounded-xl text-lg font-medium shadow-md transition-all duration-300 hover:scale-105 transform border-2 ${darkMode ? 'border-gray-700 hover:border-gray-600 text-white' : 'border-gray-300 hover:border-gray-400 text-gray-800'}`}>
                View Pricing
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Chat Nest
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Secure messaging for everyone
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link href="about" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              About
              </Link>
              <Link href="contact" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              Contact
              </Link>
              <Link href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              Privacy
           </Link>
            <Link href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              Terms
            </Link>
          </div>
        </div>
      </footer>
      
      {/* Add this CSS to your global styles */}
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
    </main>
  );
}