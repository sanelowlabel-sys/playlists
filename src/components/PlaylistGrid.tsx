import React from 'react';
import { Playlist, GenreCategory } from '../types/playlist';
import { PlaylistCard } from './PlaylistCard';
import { SkeletonLoader } from './SkeletonLoader';
import { Disc3, Send, Sliders } from 'lucide-react';

interface PlaylistGridProps {
  playlists: Playlist[];
  isLoading: boolean;
  selectedGenre: GenreCategory;
  searchQuery: string;
  onResetFilters: () => void;
  onNotify: (msg: string) => void;
  onSubmitToPlaylist: (playlistName: string, genre: string) => void;
}

export const PlaylistGrid: React.FC<PlaylistGridProps> = ({
  playlists,
  isLoading,
  selectedGenre,
  searchQuery,
  onResetFilters,
  onNotify,
  onSubmitToPlaylist,
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Sub-Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-semibold">
              // CATALOG BROADCAST
            </div>
            <h2 className="font-hammersmith text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight mt-0.5">
              {selectedGenre === 'All' ? 'ALL CURATED SPOTIFY PLAYLISTS' : `${selectedGenre} SELECTIONS`}
            </h2>
            <p className="text-xs font-mono-dm text-slate-500 mt-1">
              Active Network: {playlists.length} Playlists loaded &middot; Spotify Direct Iframe Audio
            </p>
          </div>

          <div className="flex items-center gap-3">
            {(selectedGenre !== 'All' || searchQuery) && (
              <button
                onClick={onResetFilters}
                className="text-xs font-mono-dm font-bold text-[#BE1E2F] hover:text-slate-900 uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            )}
            <button
              onClick={() => onSubmitToPlaylist('Featured Network Selection', selectedGenre === 'All' ? 'Deep House' : selectedGenre)}
              className="bg-slate-900 hover:bg-[#BE1E2F] text-white px-3.5 py-1.5 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Track</span>
            </button>
          </div>
        </div>

        {/* Playlists Grid */}
        {isLoading ? (
          <SkeletonLoader count={6} compact={false} />
        ) : playlists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onNotify={onNotify}
                onSubmitToPlaylist={onSubmitToPlaylist}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-red-100 text-[#BE1E2F] flex items-center justify-center mx-auto mb-4">
              <Disc3 className="w-6 h-6 animate-spin-slow" />
            </div>
            <h3 className="font-hammersmith text-lg text-slate-900 uppercase mb-1">
              No matching playlists in catalog
            </h3>
            <p className="text-xs font-mono-dm text-slate-500 mb-6 max-w-sm mx-auto">
              We couldn't find any playlists matching &ldquo;{searchQuery}&rdquo; in {selectedGenre}.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={onResetFilters}
                className="px-4 py-2 bg-slate-900 text-white hover:bg-[#BE1E2F] text-xs font-mono-dm font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Clear Search &amp; Show All (37)
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
