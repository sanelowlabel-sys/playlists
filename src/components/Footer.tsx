import React, { useState } from 'react';
import { Mail, Check, Send, Disc3, ExternalLink } from 'lucide-react';
import { ActivePage } from '../types/playlist';
import { SANELOW_CONTACT_EMAIL } from '../data/playlistData';
import { SanelowLogo } from './SanelowLogo';

interface FooterProps {
  onNotify: (msg: string) => void;
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNotify, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    onNotify('Subscribed to Sanelow Music Group release dispatch!');
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <SanelowLogo onClick={() => onNavigate('playlists')} />
            </div>
            <p className="text-xs font-mono-dm text-slate-400 leading-relaxed mb-4">
              Underground electronic record label, hardware sound laboratory, and global Spotify playlist network.
            </p>
            <div className="text-xs font-mono-dm text-slate-300">
              A&amp;R Desk: <a href={`mailto:${SANELOW_CONTACT_EMAIL}`} className="text-[#BE1E2F] hover:text-rose-400 font-bold">{SANELOW_CONTACT_EMAIL}</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono-dm font-bold uppercase tracking-widest text-[#BE1E2F] mb-4">
              // NETWORK PORTAL
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-dm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('playlists')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Curated Spotify Playlists (37)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Sanelow Music Group
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('submit')}
                  className="hover:text-white transition-colors cursor-pointer text-[#BE1E2F] font-bold"
                >
                  Submit Playlists &amp; Tracks
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${SANELOW_CONTACT_EMAIL}?subject=Curator%20Inquiry`}
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Curator Inquiries</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Curated Sub-Labels */}
          <div>
            <h4 className="text-xs font-mono-dm font-bold uppercase tracking-widest text-[#BE1E2F] mb-4">
              // SUB-IMPRINTS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-dm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('playlists')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sanelow Deep [SNLW-DEP]
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('playlists')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sanelow Underground [SNLW-UBT]
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('playlists')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sanelow Global Series [SNLW-GLB]
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('playlists')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sanelow Sound Labs [SNLW-LAB]
                </button>
              </li>
            </ul>
          </div>

          {/* A&R Dispatch */}
          <div>
            <h4 className="text-xs font-mono-dm font-bold uppercase tracking-widest text-[#BE1E2F] mb-2">
              // STUDIO DISPATCH
            </h4>
            <p className="text-xs font-mono-dm text-slate-400 mb-3">
              Receive notifications when new Spotify playlists and track rotations go live.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="producer@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs font-mono-dm px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#BE1E2F]"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#BE1E2F] hover:bg-[#a11624] text-white font-mono-dm font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>Join Dispatch</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-dm text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Sanelow Music Group. Underground Electronic Imprint.
          </div>
          <div className="flex items-center gap-3">
            <span>Catalog: 37 Playlists</span>
            <span>&middot;</span>
            <span>Submissions: <a href={`mailto:${SANELOW_CONTACT_EMAIL}`} className="text-white hover:text-[#BE1E2F]">{SANELOW_CONTACT_EMAIL}</a></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
