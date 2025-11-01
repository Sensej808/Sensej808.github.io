// src/components/Achievements/Achievements.js
import React from 'react';
import { ExternalLink, Github, Download, Eye } from 'lucide-react';

const Achievements = ({ achievements, portfolioUrl }) => {
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
    <section className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 className="section-title">Проекты & Достижения</h2>
        {portfolioUrl && (
          <a 
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'var(--primary)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'var(--accent)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Github size={16} />
            Все проекты на GitHub
          </a>
        )}
      </div>

      <div className="achievements-list">
        {achievements.map(achievement => (
          <div key={achievement.id} className="achievement-item" style={{
            marginBottom: '2.5rem',
            padding: '1.5rem',
            background: 'var(--background)',
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            <div className="achievement-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>{achievement.title}</h3>
                <span style={{
                  color: 'var(--primary)',
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>{achievement.period}</span>
              </div>
            </div>
            
            <ul className="achievement-description" style={{
              listStyle: 'none',
              marginBottom: '1.5rem'
            }}>
              {achievement.description.map((item, index) => (
                <li key={index} style={{
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  marginBottom: '0.5rem',
                  lineHeight: '1.5'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: 'var(--primary)'
                  }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="tech-tags" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              {achievement.technologies.map(tech => (
                <span key={tech} style={{
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>{tech}</span>
              ))}
            </div>

            {/* Ссылки на проекты */}
            {achievement.links && achievement.links.length > 0 && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border)'
              }}>
                {achievement.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'var(--surface)',
                      color: 'var(--text-primary)',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      border: '1px solid var(--border)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'var(--primary)';
                      e.target.style.color = 'white';
                      e.target.style.borderColor = 'var(--primary)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'var(--surface)';
                      e.target.style.color = 'var(--text-primary)';
                      e.target.style.borderColor = 'var(--border)';
                    }}
                  >
                    {getIcon(link.type)}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;