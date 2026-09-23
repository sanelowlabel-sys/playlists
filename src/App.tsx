import React, { useState, useMemo } from 'react';
import { GenreCategory, ActivePage } from './types/playlist';
import { PLAYLISTS } from './data/playlistData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlaylistGrid } from './components/PlaylistGrid';
import { AboutPage } from './components/AboutPage';
import { SubmitPlaylistPage } from './components/SubmitPlaylistPage';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('playlists');
  const [selectedGenre, setSelectedGenre] = useState<GenreCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Pre-selected metadata when submitting from a specific playlist
  const [targetPlaylistContext, setTargetPlaylistContext] = useState<{
    playlistName?: string;
    genre?: string;
  }>({});

  // Filtered playlists
  const filteredPlaylists = useMemo(() => {
    return PLAYLISTS.filter((pl) => {
      const matchesGenre =
        selectedGenre === 'All' || pl.genre === selectedGenre;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pl.title.toLowerCase().includes(q) ||
        pl.subtitle.toLowerCase().includes(q) ||
        pl.catalogCode.toLowerCase().includes(q) ||
        pl.bpmRange.toLowerCase().includes(q) ||
        pl.curator.name.toLowerCase().includes(q) ||
        pl.genre.toLowerCase().includes(q) ||
        pl.tags.some((t) => t.toLowerCase().includes(q));

      return matchesGenre && matchesSearch;
    });
  }, [selectedGenre, searchQuery]);

  const handleSimulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showNotification('Spotify playlist CDN connections verified!');
    }, 1100);
  };

  const showNotification = (msg: string) => {
    setToastMessage(msg);
  };

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitToPlaylist = (playlistName: string, genre: string) => {
    setTargetPlaylistContext({ playlistName, genre });
    setActivePage('submit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showNotification(`Submitting new track for "${playlistName}"`);
  };

  return (
    <div className="min-h-screen bg-light-canvas text-slate-900 font-exo selection:bg-[#BE1E2F] selection:text-white flex flex-col">
      
      {/* Floating Pill Top Navigation with Live Equalizer & Keyboard Silhouette Logo */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        playlistCount={PLAYLISTS.length}
      />

      <main className="flex-1">
        {activePage === 'playlists' && (
          <>
            {/* Hero Section */}
            <HeroSection
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              isLoading={isLoading}
              onSimulateLoading={handleSimulateLoading}
              totalPlaylists={PLAYLISTS.length}
              onSubmitClick={() => handleNavigate('submit')}
            />

            {/* Playlists Grid (All 37 official Spotify embeds) */}
            <PlaylistGrid
              playlists={filteredPlaylists}
              isLoading={isLoading}
              selectedGenre={selectedGenre}
              searchQuery={searchQuery}
              onResetFilters={() => {
                setSelectedGenre('All');
                setSearchQuery('');
              }}
              onNotify={showNotification}
              onSubmitToPlaylist={handleSubmitToPlaylist}
            />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {activePage === 'submit' && (
          <SubmitPlaylistPage
            onNotify={showNotification}
            preselectedGenre={targetPlaylistContext.genre}
            preselectedPlaylist={targetPlaylistContext.playlistName}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNotify={showNotification}
        onNavigate={handleNavigate}
      />

      {/* Notifications */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
