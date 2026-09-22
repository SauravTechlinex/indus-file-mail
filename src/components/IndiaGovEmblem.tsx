import React from 'react';

interface IndiaGovEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export default function IndiaGovEmblem({ className = '', size = 'md', showText = true }: IndiaGovEmblemProps) {
  // Sizing definitions to balance perfectly next to the company logo
  const sizeClasses = {
    sm: { height: 'h-10', width: 'w-8', textClass: 'text-[9px] tracking-wide' },
    md: { height: 'h-14', width: 'w-11', textClass: 'text-[11px] tracking-wide' },
    lg: { height: 'h-20', width: 'w-16', textClass: 'text-sm tracking-wide' },
    xl: { height: 'h-32', width: 'w-24', textClass: 'text-lg tracking-wide' },
  };

  const activeSize = sizeClasses[size];

  return (
    <div 
      className={`flex items-center gap-2.5 ${className}`} 
      id="india-gov-emblem-container"
      title="National Emblem of India - Official State Emblem"
    >
      {/* High-Fidelity Official State Emblem of India Image */}
      <div className={`relative flex items-center justify-center ${activeSize.height} ${activeSize.width}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
          alt="State Emblem of India"
          referrerPolicy="no-referrer"
          className="h-full w-full object-contain filter drop-shadow-sm select-none"
          id="india-emblem-img"
        />
      </div>

      {showText && (
        <div className="flex flex-col border-l border-slate-200 pl-2.5 leading-none animate-fade-in" id="india-gov-text-branding">
          <span className={`${activeSize.textClass} font-sans font-extrabold text-slate-800 tracking-tight leading-normal`}>
            Government of India
          </span>
          <span className="text-[10px] font-mono font-bold text-[#E87A15] tracking-[0.05em] uppercase mt-0.5">
            West Bengal State Authority
          </span>
        </div>
      )}
    </div>
  );
}
