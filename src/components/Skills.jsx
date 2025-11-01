// src/components/Skills/Skills.js
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="card">
      <h2 className="section-title">Навыки</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skills-category" style={{marginBottom: '1.5rem'}}>
            <h4 style={{
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
              fontWeight: '600'
            }}>{category}</h4>
            <div className="skills-list" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
              {skillList.map(skill => (
                <span key={skill} className="skill-tag" style={{
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;