// src/pages/NotFound.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Compass, Search, Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Number with Icon */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-gray-200 opacity-50">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Compass size={120} className="text-gray-300 animate-spin-slow" />
            </div>
            <div className="absolute -right-4 -top-4">
              <Frown size={48} className="text-yellow-500 animate-bounce" />
            </div>
          </div>

          {/* Title and Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Oops! <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Page Lost</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital wilderness.
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <Search size={16} className="text-blue-600" />
              <span className="text-sm text-blue-700">Error Code: 404 - Page Not Found</span>
            </div>
          </div>

          {/* Suggested Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Here are some helpful links:</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: Home, label: 'Home Page', path: '/', color: 'from-blue-500 to-cyan-500' },
                { icon: ArrowLeft, label: 'Go Back', action: () => window.history.back(), color: 'from-purple-500 to-pink-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`block p-4 bg-gradient-to-r ${item.color} text-white rounded-xl hover:shadow-lg transition-all`}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <item.icon size={24} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className={`w-full p-4 bg-gradient-to-r ${item.color} text-white rounded-xl hover:shadow-lg transition-all`}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <item.icon size={24} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Navigation */}
            <div className="border-t border-gray-100 pt-6">
              <p className="text-gray-600 mb-4">Or explore these sections:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['About', 'Portfolio', 'Contact'].map((section) => (
                  <Link
                    key={section}
                    to={`/${section.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-colors text-sm font-medium"
                  >
                    {section}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-100">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-900">Fun Fact:</span> Even the best explorers get lost sometimes! 
              This 404 page is part of the adventure.
            </p>
          </div>

          {/* Search Suggestion */}
          <div className="mt-6">
            <p className="text-gray-500 text-sm mb-4">Try searching for what you need:</p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search the portfolio..."
                  className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.location.href = `/search?q=${e.target.value}`;
                    }
                  }}
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}