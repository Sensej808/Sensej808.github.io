import React from 'react';
import Hero from './components/Sections/Hero';
import Projects from './components/Sections/Projects';
import Education from './components/Sections/Education';
import Skills from './components/Sections/Skills';
import Contact from './components/Sections/Contact';
import Section from './components/Common/Section';
import Card from './components/UI/Card';
import { resumeData } from './data/resumeData';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero data={resumeData.personal} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Projects 
              projects={resumeData.achievements} 
              portfolioUrl={resumeData.personal.portfolio}
            />
            <Education education={resumeData.education} />
          </div>
          
          <div className="space-y-8">
            <Skills skills={resumeData.skills} />
            <Contact data={resumeData.personal} />
            
            {resumeData.languages && (
              <Section title="Языки">
                <Card>
                  <div className="space-y-3">
                    {resumeData.languages.map(lang => (
                      <div key={lang.name} className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {lang.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;