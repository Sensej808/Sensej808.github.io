import React from 'react';
import Section from '../Common/Section';
import Card from '../UI/Card';

const Education = ({ education }) => {
  return (
    <Section title="Образование" className="mb-8">
      <Card>
        <div className="space-y-6">
          {education.map(edu => (
            <div key={edu.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                {edu.institution}
              </h3>
              <p className="text-primary-500 font-medium mb-2">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{edu.period}</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.details}</p>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default Education;