import React from 'react';

const ContactItem = ({ icon: Icon, children, href, className = '' }) => {
  const content = (
    <div className={`flex items-center gap-3 text-gray-600 dark:text-gray-400 ${className}`}>
      <Icon size={18} className="text-primary-500 flex-shrink-0" />
      <span className="text-sm">{children}</span>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="hover:text-primary-500 transition-colors duration-200"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactItem;