import React, { useState } from 'react';
import { Send, Mail, Check, Copy, ExternalLink, Music, Disc3, ShieldCheck, Sliders, CheckCircle2, ListMusic } from 'lucide-react';
import { SANELOW_CONTACT_EMAIL, PLAYLISTS } from '../data/playlistData';
import { TrackSubmission, PlaylistSubmission } from '../types/playlist';

interface SubmitPlaylistPageProps {
  onNotify: (msg: string) => void;
  preselectedGenre?: string;
  preselectedPlaylist?: string;
}

type SubmissionMode = 'playlist' | 'track';

export const SubmitPlaylistPage: React.FC<SubmitPlaylistPageProps> = ({
  onNotify,
  preselectedGenre,
  preselectedPlaylist,
}) => {
  const [mode, setMode] = useState<SubmissionMode>('playlist');

  // Playlist submission form state
  const [playlistForm, setPlaylistForm] = useState<PlaylistSubmission>({
    curatorName: '',
    playlistTitle: '',
    email: '',
    playlistUrl: '',
    genre: preselectedGenre || 'Deep House',
    trackCount: '50-100 tracks',
    description: '',
  });

  // Track submission form state
  const [trackForm, setTrackForm] = useState<TrackSubmission>({
    artistName: '',
    trackTitle: '',
    email: '',
    trackUrl: '',
    genre: preselectedGenre || 'Deep House',
    bpm: '122',
    targetPlaylist: preselectedPlaylist || 'Any Suitable Playlist in Network',
    notes: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SANELOW_CONTACT_EMAIL);
    setCopiedEmail(true);
    onNotify(`Copied ${SANELOW_CONTACT_EMAIL} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const generatePlaylistMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Playlist Submission] "${playlistForm.playlistTitle || 'New Playlist'}" by ${playlistForm.curatorName || 'Curator'} [${playlistForm.genre}]`
    );
    const body = encodeURIComponent(
      `Hello Sanelow Music Group Team,\n\n` +
      `I would like to submit my Spotify playlist for consideration in the Sanelow Sounds network:\n\n` +
      `• Playlist Title: "${playlistForm.playlistTitle}"\n` +
      `• Curator / Brand / Label Name: ${playlistForm.curatorName}\n` +
      `• Contact Email: ${playlistForm.email}\n` +
      `• Spotify Playlist Link: ${playlistForm.playlistUrl}\n` +
      `• Primary Genre: ${playlistForm.genre}\n` +
      `• Estimated Track Count / Cadence: ${playlistForm.trackCount}\n\n` +
      `• Playlist Concept & Description:\n${playlistForm.description || 'Curated with quality deep electronic music'}\n\n` +
      `Best regards,\n` +
      `${playlistForm.curatorName}`
    );
    return `mailto:${SANELOW_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const generateTrackMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Track Submission] ${trackForm.artistName || 'Artist'} - "${trackForm.trackTitle || 'New Track'}" [${trackForm.genre}]`
    );
    const body = encodeURIComponent(
      `Hello Sanelow Music Group A&R Team,\n\n` +
      `I would like to submit a new track to your network of playlists:\n\n` +
      `• Artist / Producer Name: ${trackForm.artistName}\n` +
      `• Track Title: "${trackForm.trackTitle}"\n` +
      `• Contact Email: ${trackForm.email}\n` +
      `• Stream / Spotify / SoundCloud Link: ${trackForm.trackUrl}\n` +
      `• Primary Genre: ${trackForm.genre}\n` +
      `• BPM: ${trackForm.bpm} BPM\n` +
      `• Target Playlist: ${trackForm.targetPlaylist}\n\n` +
      `• Production Notes & Master Specs:\n${trackForm.notes || 'Mastered and ready for review'}\n\n` +
      `Best regards,\n` +
      `${trackForm.artistName}`
    );
    return `mailto:${SANELOW_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handlePlaylistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playlistForm.playlistUrl) {
      onNotify('Please provide your Spotify playlist link.');
      return;
    }
    const mailto = generatePlaylistMailtoUrl();
    window.location.href = mailto;
    onNotify(`Opening email client addressed to ${SANELOW_CONTACT_EMAIL}...`);
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackForm.trackUrl) {
      onNotify('Please provide your streaming or Spotify track link.');
      return;
    }
    const mailto = generateTrackMailtoUrl();
    window.location.href = mailto;
    onNotify(`Opening email client addressed to ${SANELOW_CONTACT_EMAIL}...`);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hardware Studio Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-mono-dm text-white/90 font-bold tracking-wider">
              SNLW-A&amp;R-PORTAL
            </span>
            <span className="text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-semibold">
              // PLAYLIST &amp; TRACK SUBMISSIONS
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-dm text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#BE1E2F]" />
            <span>SUBMISSIONS ROUTED TO SANELOWLABEL@GMAIL.COM</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="max-w-3xl mb-10">
          <h1 className="font-hammersmith text-4xl sm:text-5xl text-slate-900 uppercase tracking-tight leading-[1.05] mb-4">
            SUBMIT PLAYLISTS &amp; TRACKS TO OUR NETWORK
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are a curator looking to list your Spotify playlist in our official network or an electronic music producer submitting an unreleased track for rotation, all submissions are reviewed directly at <span className="font-semibold text-slate-900 font-mono-dm">sanelowlabel@gmail.com</span>.
          </p>
        </div>

        {/* Quick Email Contact Hardware Card */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#BE1E2F] flex items-center justify-center shrink-0 shadow-lg shadow-[#BE1E2F]/30">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-mono-dm uppercase tracking-widest text-[#BE1E2F] font-bold">
                OFFICIAL SUBMISSION INBOX
              </div>
              <a
                href={`mailto:${SANELOW_CONTACT_EMAIL}?subject=Sanelow%20Submission`}
                className="font-mono-dm text-lg sm:text-xl font-bold text-white hover:text-rose-400 transition-colors"
              >
                {SANELOW_CONTACT_EMAIL}
              </a>
              <div className="text-xs text-slate-400 mt-0.5">
                All submissions reviewed by Sanelow Music Group curatorial board
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={handleCopyEmail}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-xs font-mono-dm font-bold uppercase tracking-wider text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
            </button>
            <a
              href={`mailto:${SANELOW_CONTACT_EMAIL}?subject=Sanelow%20Playlist%20Submission`}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-lg bg-[#BE1E2F] hover:bg-[#a11624] text-white text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>

        {/* Submission Mode Selector Tabs */}
        <div className="flex items-center gap-3 p-1.5 bg-slate-100 rounded-xl mb-8 border border-slate-200 w-full sm:w-max">
          <button
            onClick={() => setMode('playlist')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-xs font-mono-dm uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mode === 'playlist'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <ListMusic className="w-4 h-4 text-[#BE1E2F]" />
            <span>Submit a Playlist</span>
          </button>
          <button
            onClick={() => setMode('track')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-xs font-mono-dm uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mode === 'track'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Music className="w-4 h-4 text-[#BE1E2F]" />
            <span>Submit a Track</span>
          </button>
        </div>

        {/* Main 2-Column Form & Checklist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Submission Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-bold">
                    // {mode === 'playlist' ? 'PLAYLIST SUBMISSION FORM' : 'TRACK SUBMISSION FORM'}
                  </span>
                  <h2 className="font-hammersmith text-xl text-slate-900 uppercase tracking-tight mt-0.5">
                    {mode === 'playlist' ? 'Spotify Playlist Intake' : 'Track Audio Intake'}
                  </h2>
                </div>
                <span className="text-xs font-mono-dm text-slate-400">
                  SENDS TO SANELOWLABEL@GMAIL.COM
                </span>
              </div>

              {/* MODE 1: PLAYLIST SUBMISSION */}
              {mode === 'playlist' && (
                <form onSubmit={handlePlaylistSubmit} className="space-y-4">
                  
                  {/* Curator Name & Playlist Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Curator / Brand / DJ Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={playlistForm.curatorName}
                        onChange={(e) => setPlaylistForm({ ...playlistForm, curatorName: e.target.value })}
                        placeholder="e.g., Deep Groove Curation"
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Playlist Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={playlistForm.playlistTitle}
                        onChange={(e) => setPlaylistForm({ ...playlistForm, playlistTitle: e.target.value })}
                        placeholder="e.g., Late Night Dub Techno Sessions"
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      />
                    </div>
                  </div>

                  {/* Submitter Email */}
                  <div>
                    <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={playlistForm.email}
                      onChange={(e) => setPlaylistForm({ ...playlistForm, email: e.target.value })}
                      placeholder="curator@network.com"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                    />
                  </div>

                  {/* Spotify Playlist URL */}
                  <div>
                    <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Spotify Playlist URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={playlistForm.playlistUrl}
                      onChange={(e) => setPlaylistForm({ ...playlistForm, playlistUrl: e.target.value })}
                      placeholder="https://open.spotify.com/playlist/..."
                      className="w-full text-xs font-mono-dm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                    />
                  </div>

                  {/* Genre & Track Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Genre *
                      </label>
                      <select
                        value={playlistForm.genre}
                        onChange={(e) => setPlaylistForm({ ...playlistForm, genre: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      >
                        <option value="Deep House">Deep House</option>
                        <option value="Dub Techno">Dub Techno</option>
                        <option value="Afro House">Afro House</option>
                        <option value="Melodic & Minimal">Melodic &amp; Minimal</option>
                        <option value="Studio Selections">Studio Selections / Hardware</option>
                        <option value="Ambient Electronic">Ambient Electronic</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Track Count &amp; Update Cadence
                      </label>
                      <input
                        type="text"
                        value={playlistForm.trackCount}
                        onChange={(e) => setPlaylistForm({ ...playlistForm, trackCount: e.target.value })}
                        placeholder="e.g., 60 tracks, updated bi-weekly"
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      />
                    </div>
                  </div>

                  {/* Description / Concept */}
                  <div>
                    <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Playlist Description &amp; Theme
                    </label>
                    <textarea
                      rows={3}
                      value={playlistForm.description}
                      onChange={(e) => setPlaylistForm({ ...playlistForm, description: e.target.value })}
                      placeholder="Describe the sonic atmosphere, target audience, and why it belongs in the Sanelow network..."
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#BE1E2F] hover:bg-[#a11624] text-white font-mono-dm font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-[#BE1E2F]/20 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Playlist Submission to sanelowlabel@gmail.com</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2 font-mono-dm">
                      Formats and directs your submission directly to {SANELOW_CONTACT_EMAIL}.
                    </p>
                  </div>

                </form>
              )}

              {/* MODE 2: TRACK SUBMISSION */}
              {mode === 'track' && (
                <form onSubmit={handleTrackSubmit} className="space-y-4">
                  
                  {/* Artist Name & Track Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Artist / DJ Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={trackForm.artistName}
                        onChange={(e) => setTrackForm({ ...trackForm, artistName: e.target.value })}
                        placeholder="e.g., Kaelen / Minimal Dub"
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Track Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={trackForm.trackTitle}
                        onChange={(e) => setTrackForm({ ...trackForm, trackTitle: e.target.value })}
                        placeholder="e.g., Subterranean Echoes"
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      />
                    </div>
                  </div>

                  {/* Submitter Email */}
                  <div>
                    <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={trackForm.email}
                      onChange={(e) => setTrackForm({ ...trackForm, email: e.target.value })}
                      placeholder="producer@studio.com"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                    />
                  </div>

                  {/* Track Link */}
                  <div>
                    <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Spotify / SoundCloud / Streaming Link *
                    </label>
                    <input
                      type="url"
                      required
                      value={trackForm.trackUrl}
                      onChange={(e) => setTrackForm({ ...trackForm, trackUrl: e.target.value })}
                      placeholder="https://open.spotify.com/track/... or soundcloud.com/..."
                      className="w-full text-xs font-mono-dm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                    />
                  </div>

                  {/* Genre & BPM */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Genre *
                      </label>
                      <select
                        value={trackForm.genre}
                        onChange={(e) => setTrackForm({ ...trackForm, genre: e.target.value })}
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      >
                        <option value="Deep House">Deep House</option>
                        <option value="Dub Techno">Dub Techno</option>
                        <option value="Afro House">Afro House</option>
                        <option value="Melodic & Minimal">Melodic &amp; Minimal</option>
                        <option value="Studio Selections">Studio Selections / Hardware</option>
                        <option value="Ambient Electronic">Ambient Electronic</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Tempo (BPM)
                      </label>
                      <input
                        type="text"
                        value={trackForm.bpm}
                        onChange={(e) => setTrackForm({ ...trackForm, bpm: e.target.value })}
                        placeholder="e.g., 122"
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                      />
                    </div>
                  </div>

                  {/* Target Playlist Preference */}
                  <div>
                    <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Network Playlist (Optional)
                    </label>
                    <select
                      value={trackForm.targetPlaylist}
                      onChange={(e) => setTrackForm({ ...trackForm, targetPlaylist: e.target.value })}
                      className="w-full text-xs font-mono-dm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                    >
                      <option value="Any Suitable Playlist in Network">Any Suitable Playlist in Network (Curator Choice)</option>
                      {PLAYLISTS.slice(0, 15).map((pl) => (
                        <option key={pl.id} value={`${pl.catalogCode} - ${pl.title}`}>
                          {pl.catalogCode} &middot; {pl.title} ({pl.genre})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Notes / Master Specs */}
                  <div>
                    <label className="block text-xs font-mono-dm font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Production Notes &amp; Release Info
                    </label>
                    <textarea
                      rows={3}
                      value={trackForm.notes}
                      onChange={(e) => setTrackForm({ ...trackForm, notes: e.target.value })}
                      placeholder="Mention hardware gear used, unreleased vs released status, label affiliation or release date..."
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#BE1E2F] focus:ring-1 focus:ring-[#BE1E2F]"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#BE1E2F] hover:bg-[#a11624] text-white font-mono-dm font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-[#BE1E2F]/20 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Track Submission to sanelowlabel@gmail.com</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2 font-mono-dm">
                      Formats and directs your submission directly to {SANELOW_CONTACT_EMAIL}.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Submission Guidelines & Audio Specs (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h3 className="font-hammersmith text-base text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#BE1E2F]" />
                <span>{mode === 'playlist' ? 'Playlist Curation Criteria' : 'Audio Master Checklist'}</span>
              </h3>
              
              {mode === 'playlist' ? (
                <ul className="space-y-3 text-xs text-slate-600 leading-relaxed font-mono-dm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Sonic Focus:</strong> Cohesive flow focusing on Deep House, Dub Techno, Afro House, or Minimal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Active Curation:</strong> Regularly maintained with fresh updates and verified track selections.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Quality Art &amp; Title:</strong> Clear branding, high-res artwork, and informative playlist description.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Community Driven:</strong> Free network collaboration with no pay-to-play schemes.</span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-3 text-xs text-slate-600 leading-relaxed font-mono-dm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Headroom:</strong> Proper dynamic range with no excessive clipping or master bus squashing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Genre Cohesion:</strong> Fits our core sonic identity in Deep House, Dub Techno, or Afro House.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Valid Links:</strong> Ensure private SoundCloud links have permissions enabled or Spotify tracks are live.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#BE1E2F] shrink-0 mt-0.5" />
                    <span><strong>Zero Fees:</strong> 100% free submissions. We do not sell spots or solicit payments.</span>
                  </li>
                </ul>
              )}
            </div>

            <div className="bg-slate-950 text-white rounded-2xl border border-slate-800 p-6">
              <div className="flex items-center gap-2 text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-bold mb-2">
                <Disc3 className="w-4 h-4 text-[#BE1E2F] animate-spin-slow" />
                <span>SANELOW CURATORIAL BOARD</span>
              </div>
              <h4 className="font-hammersmith text-lg text-white uppercase mb-2">
                48 TO 72 HOURS
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-mono-dm mb-4">
                Our resident curators test playlists and track submissions twice a week. You will receive a direct reply from our team when your playlist or track is approved for the network.
              </p>
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono-dm text-slate-400">
                Direct email: <span className="text-white font-bold">{SANELOW_CONTACT_EMAIL}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
