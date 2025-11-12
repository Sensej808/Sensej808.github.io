import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import Section from '../Common/Section';
import Button from '../UI/Button';
import { Github } from 'lucide-react';

const Projects = ({ projects, portfolioUrl }) => {
  return (
    <Section title="Проекты & Достижения" className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Мои ключевые проекты, демонстрирующие навыки fullstack-разработки
        </p>
        {portfolioUrl && (
          <Button
            href={portfolioUrl}
            external
            variant="primary"
            className="whitespace-nowrap"
          >
            <Github size={18} />
            Все проекты на GitHub
          </Button>
        )}
      </div>

      <div className="grid gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;