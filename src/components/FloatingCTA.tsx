import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, X, ShieldCheck } from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE_PHONE, HOTLINE_LINK, SOCIAL_PROOF_NOTIFS } from '../data/courseData';
import { SocialNotification } from '../types';

export const FloatingCTA: React.FC = () => {
  const [currentNotif, setCurrentNotif] = useState<SocialNotification | null>(null);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    // Show periodic social proof notification
    let notifIndex = 0;
    const interval = setInterval(() => {
      setCurrentNotif(SOCIAL_PROOF_NOTIFS[notifIndex]);
      setShowNotif(true);

      setTimeout(() => {
        setShowNotif(false);
      }, 5000);

      notifIndex = (notifIndex + 1) % SOCIAL_PROOF_NOTIFS.length;
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Social Proof Toast Notification (Bottom Left) */}
      {showNotif && currentNotif && (
        <div className="fixed bottom-20 left-4 z-40 max-w-xs bg-slate-900/95 border border-emerald-500/40 p-3 rounded-2xl shadow-2xl backdrop-blur-md animate-float flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
            {currentNotif.name[0]}
          </div>
          <div className="space-y-0.5 text-xs text-slate-200">
            <p className="font-bold text-white leading-tight">
              {currentNotif.name} <span className="text-slate-400 font-normal">({currentNotif.location})</span>
            </p>
            <p className="text-emerald-400 text-[11px] font-medium">{currentNotif.action}</p>
            <p className="text-[10px] text-slate-500">{currentNotif.timeAgo}</p>
          </div>
          <button
            onClick={() => setShowNotif(false)}
            className="text-slate-400 hover:text-white text-xs ml-auto"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 p-3 shadow-2xl sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href={HOTLINE_LINK}
            className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold text-center flex items-center justify-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Gọi {HOTLINE_PHONE}</span>
          </a>

          <a
            href={ZALO_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-extrabold text-center flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/30 animate-pulse-glow"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Vào Group Zalo Ngay</span>
          </a>
        </div>
      </div>

      {/* Floating Side Button (Desktop Only) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={HOTLINE_LINK}
          className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-xl flex items-center gap-2 text-xs font-bold transition-all group"
          title="Gọi Hotline"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <span>{HOTLINE_PHONE}</span>
        </a>

        <a
          href={ZALO_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all flex items-center gap-2 animate-pulse-glow"
        >
          <MessageSquare className="w-5 h-5 fill-white/20" />
          <span>Vào Group Zalo Ngay</span>
        </a>
      </div>
    </>
  );
};
