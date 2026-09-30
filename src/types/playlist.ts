export type GenreCategory =
  | 'All'
  | 'Deep House'
  | 'Dub Techno'
  | 'Afro House'
  | 'Melodic & Minimal'
  | 'Studio Selections';

export interface Curator {
  name: string;
  role: string;
  label: string;
  verified: boolean;
}

export interface Playlist {
  id: string;
  catalogCode: string;
  spotifyId: string;
  embedUrl: string;
  title: string;
  subtitle: string;
  curator: Curator;
  genre: GenreCategory;
  bpmRange: string;
  tags: string[];
  trackCount: number;
  updateFrequency: string;
  spotifyUrl: string;
  thumbnailUrl?: string;
}

export interface TrackSubmission {
  artistName: string;
  trackTitle: string;
  email: string;
  trackUrl: string;
  genre: string;
  bpm: string;
  targetPlaylist: string;
  notes: string;
}

export interface PlaylistSubmission {
  curatorName: string;
  playlistTitle: string;
  email: string;
  playlistUrl: string;
  genre: string;
  trackCount: string;
  description: string;
}

export type ActivePage = 'playlists' | 'about' | 'submit';
