import React from 'react';

interface LogoMMDProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'horizontal' | 'vertical';
}

const LogoMMD: React.FC<LogoMMDProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true,
  variant = 'horizontal'
}) => {
  const sizeClasses = {
    sm: showText ? 'h-8' : 'w-8 h-8',
    md: showText ? 'h-12' : 'w-12 h-12',
    lg: showText ? 'h-16' : 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const subtextSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  if (!showText) {
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
            fill="url(#gradientMMD)"
            stroke="currentColor"
            strokeWidth="2"
          />
          
          {/* MMD Letters */}
          <text
            x="50"
            y="58"
            textAnchor="middle"
            className="fill-white font-bold text-2xl"
            style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}
          >
            MMD
          </text>
          
          {/* Network Connection Lines */}
          <path
            d="M20 30 L35 25 L50 30 L65 25 L80 30"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M20 70 L35 75 L50 70 L65 75 L80 70"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          
          {/* Connection Dots */}
          <circle cx="20" cy="30" r="2" fill="white" opacity="0.8" />
          <circle cx="35" cy="25" r="2" fill="white" opacity="0.8" />
          <circle cx="50" cy="30" r="2" fill="white" opacity="0.8" />
          <circle cx="65" cy="25" r="2" fill="white" opacity="0.8" />
          <circle cx="80" cy="30" r="2" fill="white" opacity="0.8" />
          
          <circle cx="20" cy="70" r="2" fill="white" opacity="0.8" />
          <circle cx="35" cy="75" r="2" fill="white" opacity="0.8" />
          <circle cx="50" cy="70" r="2" fill="white" opacity="0.8" />
          <circle cx="65" cy="75" r="2" fill="white" opacity="0.8" />
          <circle cx="80" cy="70" r="2" fill="white" opacity="0.8" />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradientMMD" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className={sizeClasses[size]}>
          <svg
            viewBox="0 0 200 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* MMD Text */}
            <text
              x="100"
              y="45"
              textAnchor="middle"
              className="fill-current font-bold"
              style={{ fontSize: '36px', fontFamily: 'Arial, sans-serif' }}
            >
              MMD
            </text>
            
            {/* Network Lines */}
            <path
              d="M20 20 L40 15 L60 20 L80 15 L100 20 L120 15 L140 20 L160 15 L180 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M20 60 L40 65 L60 60 L80 65 L100 60 L120 65 L140 60 L160 65 L180 60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
            
            {/* Connection Dots */}
            <circle cx="40" cy="15" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="80" cy="15" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="120" cy="15" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="160" cy="15" r="2" fill="currentColor" opacity="0.7" />
            
            <circle cx="40" cy="65" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="80" cy="65" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="120" cy="65" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="160" cy="65" r="2" fill="currentColor" opacity="0.7" />
          </svg>
        </div>
        <div className="text-center mt-2">
          <div className={`${textSizes[size]} font-bold text-blue-600 dark:text-blue-400`}>
            Mitra Media Data
          </div>
          <div className={`${subtextSizes[size]} text-gray-500 dark:text-gray-400`}>
            Partner Internet Terpercaya Anda
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={sizeClasses[size]}>
        <svg
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* MMD Text */}
          <text
            x="100"
            y="45"
            textAnchor="middle"
            className="fill-current font-bold"
            style={{ fontSize: '36px', fontFamily: 'Arial, sans-serif' }}
          >
            MMD
          </text>
          
          {/* Network Lines */}
          <path
            d="M20 20 L40 15 L60 20 L80 15 L100 20 L120 15 L140 20 L160 15 L180 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M20 60 L40 65 L60 60 L80 65 L100 60 L120 65 L140 60 L160 65 L180 60"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          
          {/* Connection Dots */}
          <circle cx="40" cy="15" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="80" cy="15" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="120" cy="15" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="160" cy="15" r="2" fill="currentColor" opacity="0.7" />
          
          <circle cx="40" cy="65" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="80" cy="65" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="120" cy="65" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="160" cy="65" r="2" fill="currentColor" opacity="0.7" />
        </svg>
      </div>
      <div>
        <div className={`${textSizes[size]} font-bold text-blue-600 dark:text-blue-400`}>
          Mitra Media Data
        </div>
        <div className={`${subtextSizes[size]} text-gray-500 dark:text-gray-400`}>
          Partner Internet Terpercaya Anda
        </div>
      </div>
    </div>
  );
};

export default LogoMMD;