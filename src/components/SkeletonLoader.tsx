import React from 'react';
import { Disc3 } from 'lucide-react';

interface SkeletonLoaderProps {
  count?: number;
  compact?: boolean;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
        >
          {/* Top Hardware Card Header */}
          <div className="p-5 pb-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="h-5 w-16 bg-slate-200 rounded animate-pulse" />
                <div className="h-5 w-20 bg-red-100 rounded-full animate-pulse" />
              </div>
              <div className="h-4 w-24 bg-slate-100 rounded-full animate-pulse" />
            </div>

            <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse mb-2" />
            <div className="h-3.5 w-1/2 bg-slate-100 rounded animate-pulse mb-4" />

            <div className="flex gap-2">
              <div className="h-4 w-16 bg-slate-100 rounded" />
              <div className="h-4 w-20 bg-slate-100 rounded" />
            </div>
          </div>

          {/* Spotify Player Area Skeleton - White Style with Big Cover Art */}
          <div className="px-5 pb-3">
            <div className="w-full bg-white rounded-2xl p-5 flex flex-col items-center border border-slate-200">
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="h-3 w-28 bg-slate-200 rounded animate-pulse" />
                <div className="h-3 w-16 bg-slate-100 rounded animate-pulse" />
              </div>

              {/* Big Cover Art Skeleton */}
              <div className="w-52 h-52 sm:w-60 sm:h-60 bg-slate-100 rounded-xl animate-pulse mb-4 border border-slate-200 flex items-center justify-center">
                <Disc3 className="w-10 h-10 text-slate-300 animate-spin-slow" />
              </div>

              {/* Scrubber & Controls Skeleton */}
              <div className="w-full pt-1">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="h-2.5 w-16 bg-slate-100 rounded animate-pulse" />
                  <div className="h-2.5 w-20 bg-slate-100 rounded animate-pulse" />
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full mb-3" />
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="h-4 w-20 bg-slate-100 rounded animate-pulse" />
                  <div className="h-7 w-28 bg-slate-200 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/60 flex items-center gap-2">
            <div className="h-8 flex-1 bg-slate-200 rounded-lg animate-pulse" />
            <div className="h-8 w-24 bg-slate-200 rounded-lg animate-pulse" />
            <div className="h-8 w-8 bg-slate-200 rounded-lg animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};
