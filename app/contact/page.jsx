"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function ContactPage() {

    const socialMedia = [
        {
          title: "twitter",
          url: "https://twitter.com",
          icon: FaTwitter,
        },
        {
          title: "facebook",
          url: "https://facebook.com",
          icon: FaFacebook,
        },
        {
          title: "instagram",
          url: "https://instagram.com",
          icon: FaInstagram,
        },
        {
          title: "linkedin",
          url: "https://linkedin.com",
          icon: FaLinkedin,
        },
      ];

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
    // You would typically send this to an API
    alert('Thank you for your message! We will get back to you shortly.');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
            Get in Touch
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cyan"
          >
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Us</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
          >
            Have questions or feedback? We'd love to hear from you. Our team is always ready to help.
          </motion.p>
        </div>
      </header>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 bg-cyan-700"></div>
        <div className="absolute bottom-1/4 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-purple-700"></div>
      </div>

      {/* Contact Form & Info Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gradient-cyan">Contact Information</h2>
              <p className="text-gray-300">
                Reach out to us through any of the following channels. We're available Monday through Friday, 9am to 6pm EST.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gray-800">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email Us</h3>
                  <p className="text-gray-300">support@chatnest.com</p>
                  <p className="text-gray-300">info@chatnest.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gray-800">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gray-800">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Visit Us</h3>
                  <p className="text-gray-300">Ajeenkya DY Patil University</p>
                  <p className="text-gray-300">Pune , India</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
  <h3 className="font-medium text-white mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    {socialMedia.map(({ title, url, icon: Icon }, index) => (
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 text-2xl hover:text-white transition-colors"
        aria-label={title}
      >
        <Icon />
      </a>
    ))}
  </div>
</div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-gradient-cyan">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Aashir Haris"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="aashir@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-cyan-500/30"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <div className="h-96 bg-gray-800 relative">
              {/* Placeholder for a real map - in production you'd use Google Maps, Mapbox, etc. */}
              {/* <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <p>Interactive map would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gradient-cyan"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg max-w-2xl mx-auto text-gray-300"
            >
              Quick answers to common questions about Chat Nest.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How secure is Chat Nest?",
                answer: "Chat Nest uses end-to-end encryption for all messages, ensuring that only you and your intended recipients can read them. We also offer additional security features like two-factor authentication and message expiration."
              },
              {
                question: "Is Chat Nest free to use?",
                answer: "Chat Nest offers a free basic plan with core messaging features. We also offer premium plans for teams and businesses that require advanced features like unlimited history, priority support, and admin controls."
              },
              {
                question: "Can I use Chat Nest for my business?",
                answer: "Absolutely! Chat Nest has solutions for businesses of all sizes. Our Business and Enterprise plans include features specifically designed for team collaboration, compliance, and administration."
              },
              {
                question: "What platforms does Chat Nest support?",
                answer: "Chat Nest is available on iOS, Android, Windows, macOS, and as a web application. Your messages sync seamlessly across all your devices."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300">
              Still have questions? <Link href="/faq" className="text-cyan-400 hover:text-cyan-300 transition-colors">Visit our complete FAQ</Link> or <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">contact our support team</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900">
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
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
      
      {/* Add this CSS to your global styles */}
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