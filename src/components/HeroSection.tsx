import React from 'react';
import { GenreCategory } from '../types/playlist';
import { Search, Send, Disc3, Radio, RefreshCw, Sliders } from 'lucide-react';

interface HeroSectionProps {
  selectedGenre: GenreCategory;
  onSelectGenre: (genre: GenreCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isLoading: boolean;
  onSimulateLoading: () => void;
  totalPlaylists: number;
  onSubmitClick: () => void;
}

const GENRE_TABS: GenreCategory[] = [
  'All',
  'Deep House',
  'Dub Techno',
  'Afro House',
  'Melodic & Minimal',
  'Studio Selections',
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedGenre,
  onSelectGenre,
  searchQuery,
  onSearchChange,
  isLoading,
  onSimulateLoading,
  totalPlaylists,
  onSubmitClick,
}) => {
  return (
    <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Studio Hardware Header Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-mono-dm text-white/90 font-bold tracking-wider">
              SNLW-NET-37
            </span>
            <span className="font-mono-dm text-xs font-semibold text-[#BE1E2F] uppercase tracking-wider">
              // SPOTIFY CURATION &amp; AUDIO MATRIX
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-dm text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#BE1E2F] animate-pulse" />
            <span>37 OFFICIAL PLAYLIST EMBEDS ACTIVE</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl mb-10">
          <h1 className="font-hammersmith text-4xl sm:text-6xl text-slate-900 uppercase tracking-tight leading-[1.03] mb-5">
            CURATED PLAYLISTS &amp; ELECTRONIC SOUNDS
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-6 font-normal">
            Direct streams from our underground label rosters, hardware studio recordings, and global selectors. Stream in full on Spotify or submit your new tracks to our A&amp;R board.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onSubmitClick}
              className="bg-[#BE1E2F] hover:bg-[#a11624] text-white px-5 py-2.5 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer active:translate-y-px"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Playlist to Network</span>
            </button>
            <div className="text-xs font-mono-dm text-slate-500 pl-3 border-l border-slate-200">
              Submissions: <span className="text-slate-900 font-bold">sanelowlabel@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Filtering & Search Toolbar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Genre Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {GENRE_TABS.map((genre) => {
              const isActive = selectedGenre === genre;
              return (
                <button
                  key={genre}
                  onClick={() => onSelectGenre(genre)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-mono-dm uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{genre}</span>
                  {isActive && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#BE1E2F] ml-1.5" />}
                </button>
              );
            })}
          </div>

          {/* Search Box & Reload */}
          <div className="flex items-center gap-2.5 shrink-0 justify-between md:justify-end">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search catalog or BPM..."
                className="w-full pl-9 pr-7 py-2 text-xs font-mono-dm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-800"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={onSimulateLoading}
              disabled={isLoading}
              title="Refresh audio embeds"
              className="p-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:text-[#BE1E2F] hover:border-[#BE1E2F] transition-colors flex items-center justify-center shrink-0 disabled:opacity-50"
              aria-label="Refresh Embeds"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#BE1E2F]' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
