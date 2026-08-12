import React from 'react';
import { MessageSquare, Phone, Shield, Sparkles } from 'lucide-react';
import { ZALO_GROUP_LINK, HOTLINE_PHONE, HOTLINE_LINK } from '../data/courseData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 pb-24 sm:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl">
                AI
              </div>
              <span className="text-white font-extrabold text-lg">VIBECODING ACADEMY</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              Chương trình đào tạo Thiết Kế Website Bán Tool & Sản Phẩm Số Bằng AI Studio – VibeCoding dành cho người không biết IT. Biến mọi ý tưởng kinh doanh thành sản phẩm số thực tế chỉ trong 5 phút!
            </p>

            <div className="pt-2 text-slate-300 font-semibold space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" /> Hotline Đăng Ký:{' '}
                <a href={HOTLINE_LINK} className="text-emerald-400 hover:underline">
                  {HOTLINE_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" /> Group Zalo Chính Thức:{' '}
                <a
                  href={ZALO_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Tham gia ngay &rarr;
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Danh Mục Lộ Trình</h4>
            <ul className="space-y-2">
              <li>
                <a href="#tong-quan" className="hover:text-emerald-400 transition-colors">
                  Tổng Quan Khóa Học
                </a>
              </li>
              <li>
                <a href="#prompt-tang" className="hover:text-emerald-400 transition-colors">
                  Bộ Prompt Tặng Miễn Phí
                </a>
              </li>
              <li>
                <a href="#lo-trinh" className="hover:text-emerald-400 transition-colors">
                  Lộ Trình 5 Học Phần
                </a>
              </li>
              <li>
                <a href="#san-pham-so" className="hover:text-emerald-400 transition-colors">
                  Các Mặt Hàng Sản Phẩm Số
                </a>
              </li>
              <li>
                <a href="#doi-tuong" className="hover:text-emerald-400 transition-colors">
                  Đối Tượng Phù Hợp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="md:col-span-3 space-y-3 bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" /> Tham Gia Ngay
            </h4>
            <p className="text-xs text-slate-400">
              Nhóm Zalo hỗ trợ giải đáp 24/7, cập nhật các mẫu Prompt VibeCoding mới nhất hoàn toàn miễn phí.
            </p>
            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-center text-xs transition-colors"
            >
              Vào Group Zalo Trực Tiếp
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-2">
          <p>© 2026 VibeCoding Academy. All rights reserved. Khóa học Thiết Kế Website Bằng AI Studio.</p>
          <p className="text-[11px] text-slate-600">
            Hotline hỗ trợ: {HOTLINE_PHONE} | Đường dẫn Group Zalo: {ZALO_GROUP_LINK}
          </p>
        </div>
      </div>
    </footer>
  );
};
