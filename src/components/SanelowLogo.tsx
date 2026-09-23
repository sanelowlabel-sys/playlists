import React from 'react';

interface SanelowLogoProps {
  className?: string;
  onClick?: () => void;
}

export const SanelowLogo: React.FC<SanelowLogoProps> = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center focus:outline-none cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      aria-label="Sanelow Music Group Home"
      title="Sanelow Music Group"
    >
      {/* Synthesizer Keyboard Silhouette Icon - exact match to uploaded avatar, without any writing */}
      <div className="relative w-12 h-10 sm:w-14 sm:h-11 flex items-center justify-center">
        <svg
          viewBox="0 0 500 360"
          className="w-full h-full drop-shadow-xs group-hover:brightness-105 transition-all"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-Left Module Tab (Pitch bend / mod housing) */}
          <path
            d="M 50 100 L 50 56 A 10 10 0 0 1 60 46 L 175 46 A 10 10 0 0 1 185 56 L 185 100 Z"
            fill="#BE1E2F"
          />
          {/* Main Synthesizer Enclosure */}
          <rect x="50" y="86" width="400" height="218" rx="14" fill="#BE1E2F" />
          
          {/* White Keys Bed */}
          <rect x="68" y="104" width="364" height="178" rx="3" fill="#FFFFFF" />

          {/* White Keys Red Dividers */}
          <line x1="120" y1="104" x2="120" y2="282" stroke="#BE1E2F" strokeWidth="4.5" />
          <line x1="172" y1="104" x2="172" y2="282" stroke="#BE1E2F" strokeWidth="4.5" />
          <line x1="224" y1="104" x2="224" y2="282" stroke="#BE1E2F" strokeWidth="4.5" />
          <line x1="276" y1="104" x2="276" y2="282" stroke="#BE1E2F" strokeWidth="4.5" />
          <line x1="328" y1="104" x2="328" y2="282" stroke="#BE1E2F" strokeWidth="4.5" />
          <line x1="380" y1="104" x2="380" y2="282" stroke="#BE1E2F" strokeWidth="4.5" />

          {/* Black Keys (Red tabs hanging down: 2 + 3 pattern) */}
          <rect x="105" y="104" width="30" height="106" rx="4" fill="#BE1E2F" />
          <rect x="157" y="104" width="30" height="106" rx="4" fill="#BE1E2F" />

          {/* Natural octave gap between keys 3 and 4 */}

          <rect x="261" y="104" width="30" height="106" rx="4" fill="#BE1E2F" />
          <rect x="313" y="104" width="30" height="106" rx="4" fill="#BE1E2F" />
          <rect x="365" y="104" width="30" height="106" rx="4" fill="#BE1E2F" />

          {/* Bottom Red Base Border */}
          <rect x="50" y="278" width="400" height="26" rx="6" fill="#BE1E2F" />
        </svg>
      </div>
    </button>
  );
};
