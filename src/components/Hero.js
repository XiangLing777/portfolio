// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, Palette, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-8">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-gradient-to-r from-pink-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-8">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">Digital Design & Development Student</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block">Creating</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Digital Experiences
              </span>
              <span className="block">That Inspire</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Hi, I'm a passionate Digital Design & Development student from Singapore Republic Polytechnic. 
              I craft beautiful, functional digital solutions that blend creativity with technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                <span>Learn About Me</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-16">
              {[
                { icon: Palette, label: 'UI/UX Design', color: 'text-purple-600' },
                { icon: Code, label: 'Web Development', color: 'text-blue-600' },
                { icon: Zap, label: 'Digital Solutions', color: 'text-amber-600' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-light opacity-90">Currently Working On</p>
                  <p className="text-2xl font-bold">Interactive Web Experiences</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-accent/20 to-pink-500/20 rounded-3xl blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}