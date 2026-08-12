import React from 'react';
import { MessageSquare, Phone, Sparkles, CheckCircle2, ArrowRight, Flame, Shield, Users, Gift, Clock } from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE_PHONE, HOTLINE_LINK } from '../data/courseData';
import { PromptSimulator } from './PromptSimulator';

export const Hero: React.FC = () => {
  return (
    <section id="tong-quan" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Visual background lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-600/10 via-indigo-600/15 to-purple-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Copy & Registration Box */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>⚡ DÀNH CHO NGƯỜI KHÔNG BIẾT IT – KHÔNG BIẾT CODE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              KHÓA HỌC THIẾT KẾ WEBSITE BÁN TOOL & SẢN PHẨM SỐ BẰNG{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                AI STUDIO – VIBECODING
              </span>
            </h1>

            {/* Sub-headline & Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Bạn muốn sở hữu website chuyên nghiệp để{' '}
              <strong className="text-emerald-300 font-semibold">
                bán Tool, phần mềm, tài khoản, khóa học hoặc sản phẩm số
              </strong>{' '}
              nhưng không biết lập trình? Với VibeCoding, biến ý tưởng thành website hoàn chỉnh chỉ bằng
              câu lệnh Prompt đơn giản trong <span className="text-amber-300 font-bold">5 PHÚT</span>!
            </p>

            {/* Key Value Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Không cần biết IT / Không gõ code</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tặng ngay Bộ Prompt chuẩn 5 phút</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tích hợp cổng thanh toán QR tự động</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 p-2.5 rounded-xl text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gắn tên miền cá nhân TenThuongHieu.vn</span>
              </div>
            </div>

            {/* Primary CTA Action Box */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/70 p-5 sm:p-6 rounded-3xl border border-emerald-500/30 shadow-2xl space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-bold text-amber-300">
                  <Gift className="w-4 h-4 text-amber-400" /> Tặng Bộ Prompt Độc Quyền Khi Đăng Ký
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Users className="w-3.5 h-3.5 text-indigo-400" /> 380+ Thành viên đã tham gia
                </span>
              </div>

              {/* Main Button Row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={ZALO_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] transition-all animate-pulse-glow"
                >
                  <MessageSquare className="w-5 h-5 fill-white/20" />
                  <span>VÀO GROUP ZALO ĐĂNG KÝ NGAY</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={HOTLINE_LINK}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm sm:text-base border border-slate-700/80 transition-all shrink-0"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{HOTLINE_PHONE}</span>
                </a>
              </div>

              {/* Security & Guarantee Note */}
              <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 pt-1 border-t border-slate-800/80">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> Nhóm Zalo chính thức - Tham gia hoàn toàn miễn phí
                </span>
                <span className="text-emerald-400 font-semibold">Zalo Official Group &rarr;</span>
              </div>
            </div>
          </div>

          {/* Right Column: VibeCoding Simulator Widget */}
          <div className="lg:col-span-5">
            <div className="space-y-2">
              <div className="text-center lg:text-left mb-1">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                  Trải Nghiệm Thực Tế
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" /> AI Tạo Web Tự Động Trong 5 Phút
                </h3>
              </div>

              {/* The Interactive Playground */}
              <PromptSimulator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
