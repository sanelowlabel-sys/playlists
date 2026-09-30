import React from 'react';
import { ActivePage } from '../types/playlist';
import { SANELOW_CONTACT_EMAIL } from '../data/playlistData';
import {
  Disc3,
  Sliders,
  Radio,
  ShieldCheck,
  Send,
  Zap,
  Globe,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const hardwareGear = [
    { name: 'Roland Juno-106 & TR-909', type: 'Analog Synthesis & Beat Division' },
    { name: 'Studer A800 2-Inch Tape', type: 'Harmonic Saturation & Master Summing' },
    { name: 'Neve 8068 Vintage Console', type: 'Discrete Preamps & Analog EQ Curve' },
    { name: 'Moog Sub 37 & Voyager', type: 'Subterranean Bassline Architecture' },
    { name: 'Eventide H9000 & Space Reverbs', type: 'Spatial Cavernous Dub Reflections' },
    { name: 'Genelec 8351B & Subwoofers', type: 'Pristine Reference Studio Monitoring' },
  ];

  const labelDivisions = [
    {
      code: 'SNLW-DEP',
      name: 'Sanelow Deep',
      genre: 'Deep House / Soulful Chords',
      bpm: '120 - 124 BPM',
      description: 'Warm analog chords, delicate low-ends, and golden-hour sunset grooves designed for intimate club spaces.',
    },
    {
      code: 'SNLW-UBT',
      name: 'Sanelow Underground',
      genre: 'Dub Techno / Minimal / Tape Loops',
      bpm: '118 - 123 BPM',
      description: 'Echoing chords, sub-bass weight, and hypnotic delay matrices inspired by Berlin warehouses and Detroit minimalism.',
    },
    {
      code: 'SNLW-GLB',
      name: 'Sanelow Global Series',
      genre: 'Afro House / Ancestral Rhythms',
      bpm: '122 - 126 BPM',
      description: 'Wooden percussive synthesis, organic polyrhythms, and soulful electronic chanting connecting continental dancefloors.',
    },
    {
      code: 'SNLW-LAB',
      name: 'Sanelow Sound Labs',
      genre: 'Hardware Demos / Studio Cuts',
      bpm: '120 - 128 BPM',
      description: 'Direct studio cuts, raw tape experiments, and reference track selections currently tested on our studio monitors.',
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Studio Hardware Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[11px] font-mono-dm text-white/90 font-bold tracking-wider">
              SNLW-DOC-01
            </span>
            <span className="text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-semibold">
              // STUDIO DOSSIER &amp; ARCHIVE
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-dm text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#BE1E2F] animate-pulse" />
            <span>EST. UNDERGROUND ELECTRONIC LABEL</span>
          </div>
        </div>

        {/* Main Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <h1 className="font-hammersmith text-4xl sm:text-5xl lg:text-6xl text-slate-900 uppercase tracking-tight leading-[1.05] mb-6">
              ABOUT SANELOW MUSIC GROUP
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed font-normal mb-6">
              Sanelow Music Group is an independent underground electronic record label collective, analog hardware studio, and worldwide Spotify playlist curation network.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Born from a dedication to acoustic depth, tactile analog hardware, and timeless groove structures, we champion producers who construct sonic journeys rather than disposable trends. Across Deep House, Dub Techno, and Afro House, our curated network reaches hundreds of thousands of dedicated listeners across the globe.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('submit')}
                className="bg-[#BE1E2F] hover:bg-[#a11624] text-white px-5 py-2.5 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit New Tracks to Network</span>
              </button>
              <button
                onClick={() => onNavigate('playlists')}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Disc3 className="w-3.5 h-3.5 text-[#BE1E2F]" />
                <span>Stream 30+ Curated Playlists</span>
              </button>
            </div>
          </div>

          {/* Concentric Vinyl Artwork Graphic Badge */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-square w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center select-none border border-slate-800 shadow-2xl"
              style={{
                background: 'radial-gradient(circle at center, #BE1E2F33 0%, #020617 90%)',
              }}
            >
              {/* Concentric Grooves */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-[#BE1E2F]/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#BE1E2F] flex items-center justify-center shadow-lg shadow-[#BE1E2F]/40">
                      <Disc3 className="w-8 h-8 text-white animate-spin-slow" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hardware Catalog Chip */}
              <div className="mt-4">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/15 text-[11px] font-mono-dm text-white/90 font-bold tracking-wider inline-block">
                  SANELOW-DISC-33RPM
                </span>
                <p className="text-[10px] font-mono-dm text-white/60 uppercase tracking-widest mt-1">
                  100% Curated Analog &amp; Electronic Vaults
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-16">
          <div>
            <div className="font-hammersmith text-3xl sm:text-4xl font-black text-slate-900 tabular-nums">
              37+
            </div>
            <div className="text-xs font-mono-dm uppercase tracking-wider text-slate-500 mt-1">
              Active Spotify Playlists
            </div>
          </div>
          <div>
            <div className="font-hammersmith text-3xl sm:text-4xl font-black text-[#BE1E2F] tabular-nums">
              250K+
            </div>
            <div className="text-xs font-mono-dm uppercase tracking-wider text-slate-500 mt-1">
              Monthly Stream Reach
            </div>
          </div>
          <div>
            <div className="font-hammersmith text-3xl sm:text-4xl font-black text-slate-900 tabular-nums">
              4
            </div>
            <div className="text-xs font-mono-dm uppercase tracking-wider text-slate-500 mt-1">
              Specialized Sub-Labels
            </div>
          </div>
          <div>
            <div className="font-hammersmith text-3xl sm:text-4xl font-black text-[#BE1E2F] tabular-nums">
              0%
            </div>
            <div className="text-xs font-mono-dm uppercase tracking-wider text-slate-500 mt-1">
              Zero Payola / Pure Taste
            </div>
          </div>
        </div>

        {/* Label Divisions / Imprints */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-semibold">
                // LABEL CATALOG &amp; SUB-IMPRINTS
              </span>
              <h2 className="font-hammersmith text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight mt-1">
                OUR CURATORIAL IMPRINTS
              </h2>
            </div>
            <span className="hidden sm:inline-block bg-slate-100 text-slate-700 font-mono-dm text-xs px-3 py-1 rounded-full">
              4 ACTIVE ROSTERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labelDivisions.map((div) => (
              <div
                key={div.code}
                className="sanelow-artist-card p-6 bg-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-slate-900 text-white font-mono-dm text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {div.code}
                  </span>
                  <span className="font-mono-dm text-xs text-[#BE1E2F] font-semibold bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                    {div.bpm}
                  </span>
                </div>
                <h3 className="font-hammersmith text-xl text-slate-900 uppercase tracking-tight mb-1">
                  {div.name}
                </h3>
                <div className="text-xs font-semibold text-slate-400 font-mono-dm mb-3">
                  {div.genre}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {div.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Studio & Audio Engineering */}
        <div className="mb-16 bg-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-bold">
              // STUDIO HARDWARE &amp; MASTERING
            </span>
            <h2 className="font-hammersmith text-2xl sm:text-3xl text-white uppercase tracking-tight mt-2 mb-4">
              TACTILE HARDWARE &amp; TAPE MATRIX
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We believe electronic music reaches its truest character when it passes through discrete analog circuits, tape heads, and physical faders. Our mastering lab evaluates all track submissions for dynamic punch, headroom, and stereo separation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardwareGear.map((gear, idx) => (
              <div
                key={gear.name}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-[#BE1E2F]/40 transition-colors"
              >
                <div className="text-[10px] font-mono-dm text-[#BE1E2F] uppercase tracking-wider mb-1 font-bold">
                  GEAR RACK 0{idx + 1}
                </div>
                <div className="font-bold text-sm text-white mb-1">
                  {gear.name}
                </div>
                <div className="text-xs text-slate-400">
                  {gear.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curation Ethics & Submission Guidelines */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-semibold">
              // CODE OF CONDUCT
            </span>
            <h2 className="font-hammersmith text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight mt-1 mb-3">
              ZERO PAY-TO-PLAY CURATION
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never solicit or accept payment for playlist placements, rotations, or reviews. We believe that listener trust and underground music integrity are non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <ShieldCheck className="w-6 h-6 text-[#BE1E2F] mb-3" />
              <h3 className="font-hammersmith text-base text-slate-900 uppercase mb-2">
                Purely Merit-Based
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your track has groove, depth, and proper mixing, our A&amp;R will place it regardless of follower count.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <Radio className="w-6 h-6 text-[#BE1E2F] mb-3" />
              <h3 className="font-hammersmith text-base text-slate-900 uppercase mb-2">
                Weekly Rotations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Playlists are refreshed on a regular cadence to keep listeners engaged and ensure new tracks receive active visibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <Globe className="w-6 h-6 text-[#BE1E2F] mb-3" />
              <h3 className="font-hammersmith text-base text-slate-900 uppercase mb-2">
                Worldwide Network
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Curated across London, Berlin, Johannesburg, and Detroit, connecting producers with international selectors.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to submit tracks */}
        <div className="bg-[#FEF2F2] border border-red-200 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono-dm text-[#BE1E2F] uppercase tracking-wider font-bold">
              // READY FOR AIRPLAY
            </span>
            <h3 className="font-hammersmith text-xl sm:text-2xl text-slate-900 uppercase tracking-tight mt-1 mb-2">
              SUBMIT PLAYLISTS &amp; TRACKS TO OUR NETWORK
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Send your Spotify playlists or unreleased demos directly to our curation and A&amp;R team at{' '}
              <a href={`mailto:${SANELOW_CONTACT_EMAIL}`} className="text-[#BE1E2F] font-mono-dm font-bold underline">
                {SANELOW_CONTACT_EMAIL}
              </a>.
            </p>
          </div>
          <button
            onClick={() => onNavigate('submit')}
            className="bg-[#BE1E2F] hover:bg-[#a11624] text-white px-6 py-3.5 rounded-lg text-xs font-mono-dm font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-md shadow-[#BE1E2F]/20"
          >
            <Send className="w-4 h-4" />
            <span>Submit Playlist Now</span>
          </button>
        </div>

      </div>
    </div>
  );
};
