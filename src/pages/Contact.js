// src/pages/Contact.js
import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // 这里替换为实际的API端点
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY', // 从 web3forms.com 获取
          ...formData
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // 3秒后重置提交状态
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send a <span className="text-gradient">Message</span>
              </h2>

              {status.submitted ? (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={24} />
                    <div>
                      <p className="font-medium text-green-900">Message sent successfully!</p>
                      <p className="text-sm text-green-700 mt-1">
                        I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              ) : status.error ? (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-red-600" size={24} />
                    <div>
                      <p className="font-medium text-red-900">Something went wrong</p>
                      <p className="text-sm text-red-700 mt-1">{status.error}</p>
                    </div>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-4 rounded-xl font-medium text-white transition-all ${
                    status.submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/25'
                  }`}
                >
                  {status.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={20} />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact <span className="text-gradient">Information</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
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
                          className="block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} className="text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.info}</p>
                        </a>
                      ) : (
                        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                            <item.icon size={24} className="text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.info}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Connect on <span className="text-gradient">Social</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={24} className="mb-2" />
                      <span className="text-sm font-medium">{social.platform}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to start your <span className="text-gradient">project?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:student@example.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              >
                <Mail size={20} />
                Send Email Directly
              </a>
              <a
                href="tel:+6512345678"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-200"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}