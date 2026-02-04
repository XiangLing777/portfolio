// src/components/ProjectCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Image as ImageIcon, FileText, Calendar, Clock, User } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();
  
  // 默认图片（备用）
  const defaultImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop';

  // 处理卡片点击
  const handleCardClick = (e) => {
    // 防止在点击内部链接时触发卡片点击
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    navigate(`/portfolio/${project.id}`);
  };

  // 处理键盘事件（可访问性）
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* 可点击的卡片容器 */}
      <div
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View ${project.title} project details`}
        className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 active:scale-[0.98]"
      >
        {/* Project Image */}
        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {imgError ? (
            // 图片加载失败时显示的备用内容
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <ImageIcon size={48} className="text-gray-300 mb-3" />
              <p className="text-gray-400 text-sm">Image not available</p>
            </div>
          ) : (
            <img
              src={project.imageUrl || defaultImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => {
                console.error('图片加载失败:', project.imageUrl);
                setImgError(true);
              }}
            />
          )}
          
          {/* 年份标签 */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <Calendar size={14} />
              {project.year}
            </span>
          </div>
          
          {/* 特色项目标记 */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium rounded-full shadow-lg flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Featured
            </div>
          )}

          {/* 技术栈标签 */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.technologies?.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies && project.technologies.length > 3 && (
              <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-medium rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            
            {/* 附件数量显示 */}
            {project.attachments && project.attachments.length > 0 && (
              <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                <FileText size={14} className="text-gray-500" />
                <span className="text-xs text-gray-600">{project.attachments.length}</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* 项目元信息 */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={14} className="text-gray-400" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User size={14} className="text-gray-400" />
              <span className="text-primary font-medium">{project.role}</span>
            </div>
          </div>

          {/* 目标预览（只显示前2个） */}
          {project.objectives && project.objectives.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Objectives:</h4>
              <ul className="space-y-1">
                {project.objectives.slice(0, 2).map((obj, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    <span className="line-clamp-1">{obj}</span>
                  </li>
                ))}
                {project.objectives.length > 2 && (
                  <li className="text-xs text-gray-400 pl-3.5">
                    +{project.objectives.length - 2} more
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* 点击提示（仅在悬停时显示） */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
            Click to view
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;