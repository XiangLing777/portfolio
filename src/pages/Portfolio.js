// src/pages/Portfolio.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects, categories } from '../data/projects'; 

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  // 筛选项目
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // 特色项目
  const featuredProjects = projects.filter(project => project.featured);

  
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
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-gray-700">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              My <span className="text-gradient">Creative</span> Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects that showcase my skills in design, development, 
              and problem-solving across various domains.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { number: projects.length, label: 'Projects Completed' },
              { number: categories.length - 1, label: 'Categories' },
              { number: '2+', label: 'Years Experience' },
              { number: featuredProjects.length, label: 'Featured Projects' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'
                }`}
              >
                <Grid size={20} className={viewMode === 'grid' ? 'text-primary' : 'text-gray-600'} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'
                }`}
              >
                <List size={20} className={viewMode === 'list' ? 'text-primary' : 'text-gray-600'} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* 移除了 isLoading 检查，直接显示项目 */}
          <motion.div
            layout
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later.</p>
            </div>
          )}

          {/* Year Breakdown */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Projects by Year</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['2026','2025', '2024', 'Older'].map((year) => {
                const yearProjects = projects.filter(p => 
                  year === 'Older' ? p.year < '2024' : p.year === year
                );
                return (
                  <div key={year} className="bg-gray-50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-gray-900 mb-2">{year}</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-2">
                      {yearProjects.length}
                    </div>
                    <div className="text-sm text-gray-600">projects</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure every project delivers maximum value and impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding goals and user needs' },
              { step: '02', title: 'Design', description: 'Creating wireframes and prototypes' },
              { step: '03', title: 'Development', description: 'Building with modern technologies' },
              { step: '04', title: 'Delivery', description: 'Testing, launch, and support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}