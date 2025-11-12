import React from 'react';
import { Mail, Phone, MapPin, Globe, Github } from 'lucide-react';
import ContactItem from '../Common/ContactItem';
import ThemeToggle from '../UI/ThemeToggle';

const Hero = ({ data }) => {
  return (
    <header className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {data.name}
            </h1>
            <p className="text-xl text-primary-500 dark:text-primary-400 mb-4">
              {data.title}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {data.summary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactItem icon={Mail} href={`mailto:${data.email}`}>
                {data.email}
              </ContactItem>
              <ContactItem icon={Phone} href={`tel:${data.phone}`}>
                {data.phone}
              </ContactItem>
              <ContactItem icon={MapPin}>
                {data.location}
              </ContactItem>
              <ContactItem icon={Globe} href={`https://${data.website}`} external>
                {data.website}
              </ContactItem>
              <ContactItem icon={Github} href={`https://${data.github}`} external>
                {data.github}
              </ContactItem>
            </div>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Hero;