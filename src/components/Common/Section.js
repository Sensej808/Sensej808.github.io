import React from 'react';

const Section = ({ title, children, className = '' }) => {
  return (
    <section className={className}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
};

export default Section;