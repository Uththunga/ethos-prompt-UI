import React from 'react';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className = '', href }) => {
  const styles = {
    '@keyframes floatMole': {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-1mm)' },
      '100%': { transform: 'translateY(0)' }
    },
    '.animate-float-mole': {
      animation: 'floatMole 4s ease-in-out infinite'
    },
    '@keyframes star-border': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    '.animate-star-border': {
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden'
    },
    '.animate-star-border::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      inset: '-12px',
      background: 'conic-gradient(from 0deg, transparent, rgba(116, 9, 197, 0.4), rgba(116, 9, 197, 0.6), rgba(116, 9, 197, 0.6), transparent 180deg, rgba(116, 9, 197, 0.4), rgba(116, 9, 197, 0.6), rgba(116, 9, 197, 0.6), transparent 360deg)',
      borderRadius: 'inherit',
      opacity: 0,
      transform: 'rotate(0deg)',
      transition: 'opacity 0.3s ease'
    },
    '.animate-star-border:hover::before': {
      opacity: 0.25,
      animation: 'star-border 12s linear infinite'
    },
    '.animate-star-border::after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      inset: '1px',
      background: 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
      borderRadius: 'inherit'
    }
  } as const;

  // Convert styles to a style tag content
  const styleContent = Object.entries(styles).map(([selector, rules]) => {
    const ruleContent = Object.entries(rules)
      .map(([prop, value]) => `  ${prop.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}: ${value};`)
      .join('\n');
    return `${selector} {\n${ruleContent}\n}`;
  }).join('\n\n');

  const content = (
    <div className="relative group">
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      
      <div className={`animate-star-border bg-white rounded-xl p-6 md:p-7 lg:p-8 h-full flex flex-col ${className} ${href ? 'cursor-pointer' : ''}`}>
        {icon && (
          <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mb-4 md:mb-5 lg:mb-6 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
        <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
          {description.split('\n').map((point, index) => (
            <li key={index} className="leading-relaxed">
              {point.replace('• ', '')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default ServiceCard;
