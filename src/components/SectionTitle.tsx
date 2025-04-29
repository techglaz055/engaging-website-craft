
import React from 'react';

interface SectionTitleProps {
  accent: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ accent, title, subtitle, align = 'left' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <div className="inline-flex items-center">
        <span className="text-infine-teal font-medium">//{` ${accent}`}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
        {title.split(' ').map((word, index, array) => (
          <React.Fragment key={index}>
            {index === array.length - 2 || index === array.length - 1 ? (
              <span className="gradient-text">{word} </span>
            ) : (
              `${word} `
            )}
          </React.Fragment>
        ))}
      </h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
