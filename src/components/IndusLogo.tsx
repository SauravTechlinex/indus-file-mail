import React from 'react';

interface IndusLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function IndusLogo({ className = '', iconOnly = false, size = 'md' }: IndusLogoProps) {
  // Dimensions based on size
  const sizeClasses = {
    sm: { box: 'w-8 h-12', textClass: 'text-lg', subtextClass: 'text-[9px] tracking-[0.2em]', textGap: 'ml-2.5' },
    md: { box: 'w-10 h-14', textClass: 'text-2xl', subtextClass: 'text-[11px] tracking-[0.25em]', textGap: 'ml-3' },
    lg: { box: 'w-14 h-20', textClass: 'text-3xl', subtextClass: 'text-xs tracking-[0.3em]', textGap: 'ml-4' },
    xl: { box: 'w-24 h-32', textClass: 'text-5xl', subtextClass: 'text-lg tracking-[0.3em]', textGap: 'ml-6' },
  };

  const activeSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${className}`} id="indus-logo-container">
      {/* Green rectangle block with the white stylized unicorn */}
      <div 
        className={`relative ${activeSize.box} bg-[#007a3e] rounded-[4px] shrink-0 overflow-hidden flex items-center justify-center shadow-sm`}
        id="indus-logo-emblem"
      >
        <svg 
          viewBox="0 0 100 150" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full p-1.5"
        >
          {/* Spiraled Horn pointing straight up */}
          <path 
            d="M50 10 L50 45 L48 44 L49 35 L47 34 L48 24 L46 23 L47 13 Z" 
            fill="#ffffff"
          />
          {/* Detailed ridges matching spiral effect of original unicorn horn */}
          <path d="M48 40 L52 38" stroke="#007a3e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M47 32 L51 30" stroke="#007a3e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M48 24 L51 22" stroke="#007a3e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M48 16 L51 14" stroke="#007a3e" strokeWidth="1.5" strokeLinecap="round" />

          {/* Unicorn head silhouette */}
          <path 
            d="M50 45 
               C53 45, 58 50, 68 50 
               C75 50, 85 50, 88 52 
               C90 53, 90 58, 88 59 
               L84 59 
               L84 62 
               L88 62 
               C89 62, 89 64, 88 64 
               L84 64 
               C72 65, 68 70, 60 75 
               C56 78, 54 84, 56 90 
               C58 96, 68 104, 69 105 
               C63 105, 59 108, 57 113 
               C54 120, 52 125, 48 128 
               C45 130, 41 123, 40 120 
               C39 118, 38 122, 36 125 
               C34 128, 32 122, 33 118 
               C32 117, 30 119, 28 121 
               C26 123, 22 122, 23 118 
               C24 114, 28 111, 29 108 
               C30 105, 26 109, 21 112 
               C18 114, 16 112, 17 109 
               C18 105, 23 102, 27 98 
               C29 96, 26 98, 22 101 
               C19 104, 16 102, 17 99 
               C18 95, 24 92, 32 87 
               C37 84, 30 87, 24 91 
               C21 93, 19 90, 21 87 
               C24 82, 34 77, 43 76 
               C47 75, 42 74, 39 74 
               C36 74, 39 71, 41 70 
               C44 68, 48 64, 48 58 
               C48 52, 45 49, 50 45 Z" 
            fill="#ffffff" 
          />
          
          {/* Eye */}
          <circle cx="58" cy="57" r="2.5" fill="#007a3e" />
          
          {/* Mane Highlights inside head body */}
          <path 
            d="M48 58 Q43 65 47 76" 
            stroke="#007a3e" 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M46 64 Q41 71 45 80" 
            stroke="#007a3e" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none" 
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className={`flex flex-col ${activeSize.textGap} leading-none`} id="indus-text-branding">
          {/* "indus" in lower case custom green */}
          <span 
            className={`${activeSize.textClass} font-sans font-normal tracking-tight text-[#007a3e] lowercase`}
            style={{ fontWeight: 500 }}
          >
            indus
          </span>
          {/* "LIMITED" block capitals gray */}
          <span className={`${activeSize.subtextClass} font-sans font-bold uppercase text-slate-500`}>
            LIMITED
          </span>
        </div>
      )}
    </div>
  );
}
