import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
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
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#gradient)"
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Network Lines */}
        <path
          d="M25 35 L50 25 L75 35 M25 50 L75 50 M25 65 L50 75 L75 65"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Connection Nodes */}
        <circle cx="25" cy="35" r="3" fill="white" />
        <circle cx="50" cy="25" r="3" fill="white" />
        <circle cx="75" cy="35" r="3" fill="white" />
        <circle cx="25" cy="50" r="3" fill="white" />
        <circle cx="50" cy="50" r="4" fill="white" />
        <circle cx="75" cy="50" r="3" fill="white" />
        <circle cx="25" cy="65" r="3" fill="white" />
        <circle cx="50" cy="75" r="3" fill="white" />
        <circle cx="75" cy="65" r="3" fill="white" />
        
        {/* Signal Waves */}
        <path
          d="M40 40 Q45 35 50 40 Q55 45 60 40"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M40 60 Q45 65 50 60 Q55 55 60 60"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;