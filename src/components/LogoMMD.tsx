import React from 'react';

interface LogoMMDProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LogoMMD: React.FC<LogoMMDProps> = ({ 
  className = '', 
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle - Blue in light mode, White in dark mode */}
        <circle
          cx="50"
          cy="50"
          r="48"
          className="fill-blue-600 dark:fill-white"
          stroke="none"
        />
        
        {/* MMD Letters - White in light mode, Blue in dark mode */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          className="fill-white dark:fill-blue-600 font-bold"
          style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}
        >
          MMD
        </text>
        
        {/* Network Connection Lines - White in light mode, Blue in dark mode */}
        <path
          d="M20 30 L35 25 L50 30 L65 25 L80 30"
          className="stroke-white dark:stroke-blue-600"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M20 70 L35 75 L50 70 L65 75 L80 70"
          className="stroke-white dark:stroke-blue-600"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Connection Dots - White in light mode, Blue in dark mode */}
        <circle cx="20" cy="30" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="35" cy="25" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="50" cy="30" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="65" cy="25" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="80" cy="30" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        
        <circle cx="20" cy="70" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="35" cy="75" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="50" cy="70" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="65" cy="75" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
        <circle cx="80" cy="70" r="2" className="fill-white dark:fill-blue-600" opacity="0.8" />
      </svg>
    </div>
  );
};

export default LogoMMD;