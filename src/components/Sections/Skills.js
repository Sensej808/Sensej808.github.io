import React from 'react';
import Section from '../Common/Section';
import Card from '../UI/Card';

const Skills = ({ skills }) => {
  return (
    <Section title="Навыки">
      <Card>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default Skills;