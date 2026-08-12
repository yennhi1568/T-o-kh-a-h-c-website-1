import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Flame, Clock, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Copy } from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE_PHONE, HOTLINE_LINK } from '../data/courseData';
import confetti from 'canvas-confetti';

export const RegistrationCTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45,
  });
  const [phoneCopied, setPhoneCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(HOTLINE_PHONE.replace(/\s/g, ''));
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section id="dang-ky" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-6 sm:p-10 lg:p-12 rounded-3xl border-2 border-emerald-500/40 shadow-2xl space-y-8 text-center relative overflow-hidden">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-bold border border-emerald-500/40">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" /> ĐĂNG KÝ VÀO NHÓM ZALO LỚP HỌC NGAY HÔM NAY
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              SỞ HỮU WEBSITE BÁN SẢN PHẨM SỐ TRONG 5 PHÚT
            </h2>
            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto">
              Nhấn nút bên dưới để tham gia trực tiếp nhóm Zalo học viên, nhận ngay{' '}
              <strong className="text-amber-300">Bộ Prompt Thiết Kế Website Miễn Phí</strong> và lịch hỗ trợ trực tiếp.
            </p>
          </div>

          {/* Countdown timer */}
          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 inline-block max-w-md mx-auto space-y-2">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" /> Thời Gian Nhận ƯU ĐÃI Nhóm Zalo Còn Lại:
            </div>
            <div className="flex items-center justify-center gap-3 font-mono font-black text-2xl sm:text-3xl text-emerald-400">
              <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                {String(timeLeft.hours).padStart(2, '0')}<span className="text-[10px] block font-sans text-slate-400 font-normal">Giờ</span>
              </div>
              <span>:</span>
              <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                {String(timeLeft.minutes).padStart(2, '0')}<span className="text-[10px] block font-sans text-slate-400 font-normal">Phút</span>
              </div>
              <span>:</span>
              <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-amber-400">
                {String(timeLeft.seconds).padStart(2, '0')}<span className="text-[10px] block font-sans text-slate-400 font-normal">Giây</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerCelebration}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-lg sm:text-xl shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-[1.02] transition-all animate-pulse-glow"
            >
              <MessageSquare className="w-6 h-6 fill-white/20" />
              <span>THAM GIA GROUP ZALO ĐĂNG KÝ NGAY</span>
              <ArrowRight className="w-6 h-6" />
            </a>

            {/* Hotline Call Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={HOTLINE_LINK}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span>HOTLINE ĐĂNG KÝ: {HOTLINE_PHONE}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="text-xs text-slate-400 hover:text-slate-200 underline flex items-center gap-1 cursor-pointer py-2"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{phoneCopied ? 'Đã chép SĐT!' : 'Sao chép Hotline'}</span>
              </button>
            </div>
          </div>

          {/* Slogans Checklist */}
          <div className="pt-6 border-t border-slate-800/80 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left text-xs text-slate-200">
            <div className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>👉 Học để tự làm.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>👉 Làm để hiểu AI.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>👉 Dùng AI tạo sản phẩm.</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>👉 Kinh doanh không giới hạn!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
