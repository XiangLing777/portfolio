// src/components/ProjectCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye, Image as ImageIcon } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);
  
  // 默认图片（备用）
  const defaultImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Project Image */}
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {imgError ? (
          // 图片加载失败时显示的备用内容
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
            <ImageIcon size={48} className="text-gray-300 mb-3" />
            <p className="text-gray-400 text-sm">图片加载失败</p>
          </div>
        ) : (
          <img
            src={project.imageUrl || defaultImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => {
              console.error('图片加载失败:', project.imageUrl);
              setImgError(true);
            }}
          />
        )}
        
        {/* 图片加载遮罩 */}
        {!imgError && !project.imageUrl && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        )}
        
        {/* 预览按钮 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/portfolio/${project.id}`}
            className="p-4 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:scale-110"
            aria-label="View Project Details"
          >
            <Eye size={24} className="text-gray-700" />
          </Link>
        </div>
        
        {/* 特色项目标记 */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-primary text-xs font-medium rounded-full mb-3">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
        
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies?.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* 查看详情按钮 */}
        <div className="mt-6">
          <Link
            to={`/portfolio/${project.id}`}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm"
          >
            <span>View Details</span>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;