// src/pages/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Linkedin,
  Github,
  Instagram,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: '24008149@myrp.edu.sg',
      action: 'mailto:24008149@myrp.edu.sg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+65 8876 2516',
      action: 'tel:+6588762516',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Singapore',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      info: 'Within 24 hours',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/xiangling-su-68013b339',
      color: 'hover:bg-blue-100 hover:text-blue-600'
    },
    {
      platform: 'GitHub',
      icon: Github,
      url: 'https://github.com/XiangLing777',
      color: 'hover:bg-gray-100 hover:text-gray-900'
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6">
              <MessageSquare size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to new challenges and collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                Feel free to reach out through any of the following channels. I'll get back to you as soon as possible.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    {item.action ? (
                      <a
                        href={item.action}
                        className="block p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <item.icon size={28} className="text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 text-lg">{item.info}</p>
                      </a>
                    ) : (
                      <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6`}>
                          <item.icon size={28} className="text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 text-lg">{item.info}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Connect on <span className="text-gradient">Social Media</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                Follow me on social media to see my latest work and updates.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 max-w-lg mx-auto">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-8 py-4 rounded-full bg-gray-50 ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={24} />
                    <span className="font-medium text-lg">{social.platform}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

   </div>
  );
}