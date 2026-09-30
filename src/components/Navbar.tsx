import React from 'react';
import { ActivePage } from '../types/playlist';
import { SanelowLogo } from './SanelowLogo';
import { Disc3, Info, Send, Radio, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  playlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  playlistCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      
      {/* Clean static accent line */}
      <div className="h-[2px] w-full bg-[#BE1E2F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Pure Keyboard Logo (NO WRITING beside it, no animation next to it) */}
          <div className="flex items-center">
            <SanelowLogo onClick={() => onNavigate('playlists')} />
          </div>

          {/* Zone 2: Floating Pill Navigation */}
          <nav className="hidden md:flex items-center bg-slate-50/80 border border-slate-200/80 p-1.5 rounded-full shadow-xs">
            <button
              onClick={() => onNavigate('playlists')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono-dm uppercase tracking-wider transition-all cursor-pointer ${
                activePage === 'playlists'
                  ? 'bg-slate-900 text-white font-medium shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Disc3 className={`w-3.5 h-3.5 ${activePage === 'playlists' ? 'text-[#BE1E2F]' : 'text-slate-400'}`} />
              <span>Playlists Network</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-800 font-mono-dm font-bold ml-0.5">
                {playlistCount}
              </span>
              {activePage === 'playlists' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE1E2F] ml-0.5" />
              )}
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono-dm uppercase tracking-wider transition-all cursor-pointer ${
                activePage === 'about'
                  ? 'bg-slate-900 text-white font-medium shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Info className={`w-3.5 h-3.5 ${activePage === 'about' ? 'text-[#BE1E2F]' : 'text-slate-400'}`} />
              <span>About Us</span>
              {activePage === 'about' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE1E2F] ml-0.5" />
              )}
            </button>

            <button
              onClick={() => onNavigate('submit')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono-dm uppercase tracking-wider transition-all cursor-pointer ${
                activePage === 'submit'
                  ? 'bg-slate-900 text-white font-medium shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Send className={`w-3.5 h-3.5 ${activePage === 'submit' ? 'text-[#BE1E2F]' : 'text-slate-400'}`} />
              <span>Submit Playlist</span>
              {activePage === 'submit' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#BE1E2F] ml-0.5" />
              )}
            </button>
          </nav>

          {/* Zone 3: Direct Action Hardware CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('submit')}
              className="bg-[#BE1E2F] hover:bg-[#a11624] text-white px-4 py-2 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer hover:shadow-md hover:shadow-[#BE1E2F]/20 active:translate-y-px"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Submit Playlist</span>
              <span className="sm:hidden">Submit</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Floating Pill Navigation */}
      <div className="md:hidden border-t border-slate-200 bg-slate-50/95 px-3 py-2 flex items-center justify-around gap-1 font-mono-dm text-xs">
        <button
          onClick={() => onNavigate('playlists')}
          className={`flex-1 py-1.5 px-2 rounded-full text-center transition-all cursor-pointer ${
            activePage === 'playlists'
              ? 'bg-slate-900 text-white font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Playlists ({playlistCount})
        </button>
        <button
          onClick={() => onNavigate('about')}
          className={`flex-1 py-1.5 px-2 rounded-full text-center transition-all cursor-pointer ${
            activePage === 'about'
              ? 'bg-slate-900 text-white font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          About Us
        </button>
        <button
          onClick={() => onNavigate('submit')}
          className={`flex-1 py-1.5 px-2 rounded-full text-center transition-all cursor-pointer ${
            activePage === 'submit'
              ? 'bg-[#BE1E2F] text-white font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Submit Playlist
        </button>
      </div>

    </header>
  );
};
