// src/App.js
import React from 'react';
import Header from './components/Header';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import { resumeData } from './data/resumeData';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header data={resumeData.personal} />
      
      <div className="container">
        <div className="resume-main">
          <div className="main-content">
            <Achievements 
              achievements={resumeData.achievements} 
              portfolioUrl={resumeData.personal.portfolio}
            />
            
            <section className="card">
              <h2 className="section-title">Образование</h2>
              {resumeData.education.map(edu => (
                <div key={edu.id} className="education-item">
                  <h3 className="experience-company">{edu.institution}</h3>
                  <p className="experience-position">{edu.degree}</p>
                  <p className="text-secondary">{edu.period}</p>
                  <p className="text-sm mt-1">{edu.details}</p>
                </div>
              ))}
            </section>
          </div>
          
          <div className="sidebar">
            <Skills skills={resumeData.skills} />
            
            <div className="card">
              <h2 className="section-title">Языки</h2>
              {resumeData.languages.map(lang => (
                <div key={lang.name} className="language-item" style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>{lang.name}</span>
                  <span style={{ color: 'var(--text-secondary)' }}> — {lang.level}</span>
                </div>
              ))}
            </div>

            {/* Блок контактов в sidebar */}
            <div className="card">
              <h2 className="section-title">Контакты</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href={`mailto:${resumeData.personal.email}`}
                  style={{ color: 'var(--primary)', textDecoration: 'none' }}
                >
                  {resumeData.personal.email}
                </a>
                <a 
                  href={`tel:${resumeData.personal.phone}`}
                  style={{ color: 'var(--primary)', textDecoration: 'none' }}
                >
                  {resumeData.personal.phone}
                </a>
                <a 
                  href={`https://${resumeData.personal.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--primary)', textDecoration: 'none' }}
                >
                  {resumeData.personal.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;