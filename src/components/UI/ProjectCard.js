import React from 'react';
import { ExternalLink, Github, Download, Eye } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'github':
        return <Github size={16} />;
      case 'live':
        return <Eye size={16} />;
      case 'demo':
        return <ExternalLink size={16} />;
      case 'download':
        return <Download size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <div className="card group">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          {/* Заголовок и период - исправленная версия */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors break-words">
                {project.title}
              </h3>
            </div>
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 sm:mt-0 mt-2 w-fit">
              {project.period}
            </span>
          </div>
          
          {/* Описание */}
          <ul className="space-y-2 mb-4">
            {project.description.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <span className="text-primary-500 mt-1 flex-shrink-0">▸</span>
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
          
          {/* Технологии */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Ссылки */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            {project.links.map((link, index) => (
              <Button
                key={index}
                href={link.url}
                external
                variant="secondary"
                className="text-sm flex-1 sm:flex-none min-w-[120px] justify-center"
              >
                {getIcon(link.type)}
                <span className="truncate">{link.label}</span>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;