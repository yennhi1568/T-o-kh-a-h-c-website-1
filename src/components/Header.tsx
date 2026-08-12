import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE_PHONE, HOTLINE_LINK } from '../data/courseData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 text-center border-b border-indigo-500/20 flex items-center justify-center gap-2 flex-wrap">
        <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full font-medium border border-emerald-500/30 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-emerald-400" /> 🔥 ƯU ĐÃI ĐẶC BIỆT
        </span>
        <span className="text-slate-200">
          Tặng Ngay <strong>Bộ Prompt Thiết Kế Website 5 Phút</strong> Khi Đăng Ký Group Zalo Hôm Nay!
        </span>
        <a
          href={ZALO_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-emerald-400 hover:text-emerald-300 font-semibold ml-1 flex items-center gap-1"
        >
          Tham gia ngay &rarr;
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
            : 'bg-slate-950/70 backdrop-blur-sm py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              AI
            </div>
            <div>
              <div className="text-white font-extrabold text-base sm:text-lg tracking-tight leading-tight flex items-center gap-1.5">
                VIBECODING ACADEMY
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/30 font-normal">
                  PRO
                </span>
              </div>
              <div className="text-xs text-slate-400 font-medium hidden sm:block">
                Khóa Học Thiết Kế Web Bằng AI Studio
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#tong-quan" className="hover:text-emerald-400 transition-colors">
              Tổng Quan
            </a>
            <a href="#prompt-tang" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Bộ Prompt Tặng
            </a>
            <a href="#lo-trinh" className="hover:text-emerald-400 transition-colors">
              Lộ Trình Học
            </a>
            <a href="#san-pham-so" className="hover:text-emerald-400 transition-colors">
              Sản Phẩm Số
            </a>
            <a href="#doi-tuong" className="hover:text-emerald-400 transition-colors">
              Đối Tượng
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              Hỏi Đáp
            </a>
          </div>

          {/* Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Hotline Link */}
            <a
              href={HOTLINE_LINK}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/60 text-xs sm:text-sm font-semibold transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400 animate-bounce" />
              <span>{HOTLINE_PHONE}</span>
            </a>

            {/* Prominent Header Zalo CTA */}
            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] transition-all animate-pulse-glow"
            >
              <MessageSquare className="w-4 h-4 text-white fill-white/20" />
              <span>Vào Group Zalo Ngay</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <a
              href="#tong-quan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-emerald-400 font-medium"
            >
              Tổng Quan Khóa Học
            </a>
            <a
              href="#prompt-tang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-emerald-400 font-semibold flex items-center justify-between"
            >
              <span>🎁 Bộ Prompt Tặng Miễn Phí</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Hot</span>
            </a>
            <a
              href="#lo-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-emerald-400 font-medium"
            >
              Lộ Trình Đào Tạo (5 Học Phần)
            </a>
            <a
              href="#san-pham-so"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-emerald-400 font-medium"
            >
              Xây Dựng Web Bán Sản Phẩm Số
            </a>
            <a
              href="#doi-tuong"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-emerald-400 font-medium"
            >
              Khóa Học Dành Cho Ai?
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-emerald-400 font-medium"
            >
              Câu Hỏi Thường Gặp
            </a>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={HOTLINE_LINK}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Hotline: {HOTLINE_PHONE}
              </a>

              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold shadow-lg shadow-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4" />
                Đăng Ký Vào Group Zalo Ngay
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
