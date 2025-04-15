"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Shield, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="pt-20 pb-12 px-6 max-w-7xl mx-auto">
        <Link href="/" className="inline-block mb-12">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <ArrowLeft size={20} />
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
            Our Story
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cyan"
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Chat Nest</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
          >
            Founded in 2025, Chat Nest was created with a simple mission: to make communication secure, fast, and beautifully simple.
          </motion.p>
        </div>
      </header>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 bg-cyan-700"></div>
        <div className="absolute bottom-1/4 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-purple-700"></div>
      </div>

      {/* Our Story Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="rounded-2xl overflow-hidden shadow-xl"
>
  <div className=" p-6 flex justify-center items-center">
    <svg
      width="180"
      height="180"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="95" fill="#06B6D4" />
      <path
        d="M60 70C60 55 72 45 90 45H110C128 45 140 55 140 70V90C140 105 128 115 110 115H95L80 130V115H90C72 115 60 105 60 90V70Z"
        fill="white"
      />
      <path
        d="M85 80C87 80 89 82 89 84C89 86 87 88 85 88C83 88 81 86 81 84C81 82 83 80 85 80ZM100 80C102 80 104 82 104 84C104 86 102 88 100 88C98 88 96 86 96 84C96 82 98 80 100 80ZM115 80C117 80 119 82 119 84C119 86 117 88 115 88C113 88 111 86 111 84C111 82 113 80 115 80Z"
        fill="#06B6D4"
      />
    </svg>
  </div>
</motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gradient-cyan">Our Journey</h2>
            <p className="text-gray-300">
              Chat Nest began when our founding team of communication experts and security engineers identified a gap in the messaging landscape. We saw that existing platforms were either secure but complex, or simple but lacked proper privacy protections.
            </p>
            <p className="text-gray-300">
              After weeks of development, we launched Chat Nest with a clear goal: to create a messaging platform that respects user privacy, delivers messages instantly, and provides an intuitive experience that anyone can use without sacrificing features.
            </p>
            <p className="text-gray-300">
              Today, Chat Nest serves over many users worldwide, all enjoying the perfect balance of security, performance, and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gradient-cyan"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg max-w-2xl mx-auto text-gray-300"
            >
              The principles that guide everything we do at Chat Nest.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="text-cyan-400" size={36} />,
                title: "Privacy First",
                description: "We believe everyone deserves communication that's free from surveillance and exploitation."
              },
              {
                icon: <Users className="text-cyan-400" size={36} />,
                title: "Community",
                description: "Technology should bring people together and foster genuine connections."
              },
              {
                icon: <Award className="text-cyan-400" size={36} />,
                title: "Excellence",
                description: "We never stop improving our platform to deliver the best possible experience."
              },
              {
                icon: <Globe className="text-cyan-400" size={36} />,
                title: "Accessibility",
                description: "Chat Nest is built to be intuitive and accessible for everyone, regardless of technical ability."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-800/70 border border-gray-700/50 text-center"
              >
                <div className="p-4 rounded-full bg-gray-900/70 inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gradient-cyan"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg max-w-2xl mx-auto text-gray-300"
            >
              The passionate people behind Chat Nest.
            </motion.p>
          </div>
          
          <div className="flex justify-center w-full">
            {[
              {
                name: "Aashir Haris",
                title: "CEO & Founder",
                image: "/api/placeholder/300/300"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50 text-center group"
              >
                <div className=" relative mb-4 rounded-full overflow-hidden w-56 h-40 mx-auto">
                 
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400">
                  {member.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan"
          >
            Join Our Community Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8 text-gray-300"
          >
            Experience the future of messaging with Chat Nest. 
            Secure, fast, and beautifully simple.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/chat">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-105 transform">
                Start Chatting
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="border-2 border-gray-700 hover:border-gray-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-md transition-all duration-300 hover:scale-105 transform">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Chat Nest
            </h3>
            <p className="text-gray-400">
              Secure messaging for everyone
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
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
      `}</style>
    </main>
  );
}