import React, { useState } from 'react';
import { Playlist } from '../types/playlist';
import {
  ExternalLink,
  Share2,
  Check,
  Disc3,
  Clock,
  Send,
  Sliders,
  Radio,
  Music,
  Loader2,
  Play,
  Volume2,
} from 'lucide-react';

interface PlaylistCardProps {
  playlist: Playlist;
  onNotify: (message: string) => void;
  onSubmitToPlaylist: (playlistName: string, genre: string) => void;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({
  playlist,
  onNotify,
  onSubmitToPlaylist,
}) => {
  const [showIframePlayer, setShowIframePlayer] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(playlist.spotifyUrl);
    setCopied(true);
    onNotify(`Copied link for "${playlist.title}" [${playlist.catalogCode}] to clipboard!`);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <article className="sanelow-artist-card overflow-hidden flex flex-col justify-between group">
      
      {/* Top Studio Hardware Header */}
      <div className="p-5 pb-3">
        
        {/* Catalog Code & BPM Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white font-mono-dm text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs">
              {playlist.catalogCode}
            </span>
            <span className="bg-red-50 text-[#BE1E2F] border border-red-100 font-mono-dm text-[11px] font-semibold px-2 py-0.5 rounded-full">
              {playlist.bpmRange}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono-dm text-slate-500">
            <Clock className="w-3 h-3 text-[#BE1E2F]" />
            <span>{playlist.updateFrequency}</span>
          </div>
        </div>

        {/* Playlist Title & Curator */}
        <div className="mb-3">
          <h2 className="font-hammersmith text-xl text-slate-900 uppercase tracking-tight group-hover:text-[#BE1E2F] transition-colors leading-snug">
            {playlist.title}
          </h2>
          <p className="text-xs text-slate-500 font-normal mt-1 line-clamp-1">
            {playlist.subtitle}
          </p>

          <div className="flex items-center gap-2 mt-2 text-xs font-mono-dm text-slate-600">
            <span className="text-slate-400">Curated by:</span>
            <span className="font-bold text-slate-800">{playlist.curator.name}</span>
            <span className="text-slate-300">&middot;</span>
            <span className="text-slate-500">{playlist.trackCount} Tracks</span>
          </div>
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-1.5">
          {playlist.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono-dm uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Official Spotify Embed Player Area - Always Clean White Style */}
      <div className="px-5 pb-3">
        {showIframePlayer ? (
          <div className="relative rounded-[12px] overflow-hidden bg-white border border-slate-200 shadow-xs">
            <div className="p-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <span className="text-[11px] font-mono-dm uppercase text-slate-600 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1DB954]" />
                <span>Spotify Web Stream</span>
              </span>
              <button
                onClick={() => setShowIframePlayer(false)}
                className="text-[11px] font-mono-dm font-bold text-[#BE1E2F] hover:underline uppercase flex items-center gap-1 cursor-pointer"
              >
                <span>&larr; Back to White Style</span>
              </button>
            </div>
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '0 0 12px 12px' }}
              src={playlist.embedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Spotify Playlist: ${playlist.title}`}
            />
          </div>
        ) : (
          /* Permanent White Embed Card with Big High-Resolution Cover Art */
          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex flex-col items-center p-5 select-none text-slate-800">
            {/* Top Player Header */}
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs font-mono-dm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1DB954]" />
                <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Spotify Curated
                </span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                {playlist.catalogCode} // MASTER
              </span>
            </div>

            {/* Featured Big Cover Art */}
            <div className="relative group/art w-full flex justify-center mb-4">
              <a
                href={playlist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-52 h-52 sm:w-60 sm:h-60 rounded-xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-50 transition-all duration-300 group-hover/art:shadow-xl group-hover/art:border-slate-300"
                title={`Listen to ${playlist.title} on Spotify`}
              >
                {playlist.thumbnailUrl ? (
                  <img
                    src={playlist.thumbnailUrl}
                    alt={playlist.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/art:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <Music className="w-12 h-12 mb-2 text-slate-300" />
                    <span className="font-mono-dm text-xs uppercase">No Artwork</span>
                  </div>
                )}

                {/* Floating Sanelow Red Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/art:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="w-14 h-14 rounded-full bg-[#BE1E2F] text-white flex items-center justify-center shadow-2xl transform transition-transform duration-200 group-hover/art:scale-110">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </a>
            </div>

            {/* Audio Scrubber & Controls */}
            <div className="w-full pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono-dm text-slate-500 mb-1.5">
                <span className="text-[#BE1E2F] font-semibold">{playlist.bpmRange}</span>
                <span>{playlist.updateFrequency}</span>
              </div>

              {/* Progress Scrub Bar */}
              <div className="relative w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                <div className="absolute top-0 left-0 h-full w-2/5 bg-[#BE1E2F] rounded-full" />
              </div>

              {/* Action Buttons inside White Card */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setShowIframePlayer(true)}
                  className="text-[11px] font-mono-dm text-slate-500 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Switch to embedded Spotify Web Player"
                >
                  <Sliders className="w-3.5 h-3.5 text-[#BE1E2F]" />
                  <span>Web Player</span>
                </button>

                <a
                  href={playlist.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#BE1E2F] hover:bg-slate-900 text-white px-3.5 py-1.5 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>Play in Spotify</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/60 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          
          {/* Open on Spotify Button */}
          <a
            href={playlist.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-900 hover:bg-[#BE1E2F] text-white py-2 px-3 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors duration-200 shadow-xs"
          >
            <span>Open Spotify</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Submit Track to this specific playlist */}
          <button
            onClick={() => onSubmitToPlaylist(playlist.title, playlist.genre)}
            className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 hover:border-[#BE1E2F] hover:text-[#BE1E2F] py-2 px-3 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            title="Submit a track to this specific playlist"
          >
            <Send className="w-3.5 h-3.5 text-[#BE1E2F]" />
            <span className="hidden sm:inline">Submit Track</span>
          </button>

          {/* Share Link */}
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-lg border border-slate-300 bg-white text-slate-600 hover:text-[#BE1E2F] hover:border-[#BE1E2F] transition-colors cursor-pointer"
            title="Copy playlist Spotify URL"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

    </article>
  );
};
