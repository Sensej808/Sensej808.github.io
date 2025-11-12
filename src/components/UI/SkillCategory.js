import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-6 last:mb-0">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;