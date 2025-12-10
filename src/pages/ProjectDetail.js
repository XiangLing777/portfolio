// src/pages/ProjectDetail.js
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  Folder, 
  Code, 
  ChevronRight,
  Globe,
  Target,
  Award,
  Clock,
  User,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);
  
  // 查找项目
  const project = projects.find(p => p.id === projectId);
  
  // 相关项目（同分类的其他项目）
  const relatedProjects = projects
    .filter(p => p.id !== projectId && p.category === project?.category)
    .slice(0, 2);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg transition-all"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const defaultImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop';

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category & Year */}
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-primary text-sm font-medium rounded-full">
                <Folder size={16} />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                <Calendar size={16} />
                {project.year}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 text-sm font-medium rounded-full">
                  <Award size={16} />
                  Featured Project
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={project.imageUrl || defaultImage}
                alt={project.title}
                className="w-full h-auto max-h-[600px] object-contain mx-auto p-8"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImage;
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-xl hover:shadow-primary/25 transition-all"
                >
                  <Globe size={20} />
                  <span>View Project</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Target size={24} className="text-primary" />
                  Project Overview
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  {/* 显示项目目标 */}
                  {project.objectives && project.objectives.length > 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Objectives</h3>
                      <ul className="space-y-3 mb-8">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {/* 显示项目挑战 */}
                  {project.challenges && project.challenges.length > 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Challenges & Solutions</h3>
                      <ul className="space-y-4 mb-8">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <AlertTriangle size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {/* 如果没有目标和挑战，显示默认描述 */}
                  {(!project.objectives || project.objectives.length === 0) && 
                   (!project.challenges || project.challenges.length === 0) && (
                    <p className="text-gray-600 mb-6">
                      This project showcases my skills in {project.category.toLowerCase()}, 
                      utilizing modern design principles and technologies to create an engaging user experience.
                    </p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="sticky top-24 space-y-8"
              >
                {/* Technologies */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Code size={24} className="text-secondary" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Folder size={14} />
                        <span>Category</span>
                      </div>
                      <div className="font-medium text-gray-900">{project.category}</div>
                    </div>
                    
                    {/* Year */}
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Calendar size={14} />
                        <span>Year</span>
                      </div>
                      <div className="font-medium text-gray-900">{project.year}</div>
                    </div>
                    
                    {/* Duration */}
                    {project.duration && (
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Clock size={14} />
                          <span>Duration</span>
                        </div>
                        <div className="font-medium text-gray-900">{project.duration}</div>
                      </div>
                    )}
                    
                    {/* Role */}
                    {project.role && (
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <User size={14} />
                          <span>Role</span>
                        </div>
                        <div className="font-medium text-gray-900">{project.role}</div>
                      </div>
                    )}
                    
                    {/* Status */}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Status</div>
                      <div className={`font-medium ${
                        project.year === '2025' ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {project.year === '2025' ? 'In Progress' : 'Completed'}
                      </div>
                    </div>
                    
                    {/* Live Demo Link */}
                    {project.link && project.link !== '#' && (
                      <div>
                        <div className="text-sm text-gray-500 mb-2">Live Demo</div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                          <span>Visit Project</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={relatedProject.imageUrl || defaultImage}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = defaultImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <Link
                        to={`/portfolio/${relatedProject.id}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm"
                      >
                        <span>View Project</span>
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <Link
              to="/portfolio"
              className="group flex items-center justify-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
              <div>
                <div className="text-sm text-gray-500">Back to</div>
                <div className="text-xl font-bold text-gray-900">Portfolio</div>
              </div>
            </Link>
            
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-4 px-8 py-6 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-right">
                <div className="text-sm opacity-90">Start a Project?</div>
                <div className="text-xl font-bold">Get in Touch</div>
              </div>
              <ArrowLeft size={24} className="rotate-180 opacity-90" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}