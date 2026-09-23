import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-200">
      <div className="bg-black text-white px-4 py-3 rounded-xl border border-gray-800 shadow-2xl flex items-center gap-3 max-w-sm">
        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-white" />
        </div>
        <span className="text-xs font-semibold leading-snug">{message}</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 rounded-md"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
