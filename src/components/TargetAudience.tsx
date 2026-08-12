import React from 'react';
import { TARGET_AUDIENCE, ZALO_GROUP_LINK } from '../data/courseData';
import { Users, UserX, Store, Cpu, Zap, Building, Rocket, CheckCircle2 } from 'lucide-react';

const TARGET_ICON_MAP: Record<string, React.ReactNode> = {
  UserX: <UserX className="w-6 h-6 text-rose-400" />,
  Store: <Store className="w-6 h-6 text-amber-400" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
  Zap: <Zap className="w-6 h-6 text-emerald-400" />,
  Building: <Building className="w-6 h-6 text-purple-400" />,
  Rocket: <Rocket className="w-6 h-6 text-indigo-400" />,
};

export const TargetAudience: React.FC = () => {
  return (
    <section id="doi-tuong" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold">
            <Users className="w-4 h-4 text-indigo-400" /> Đối Tượng Phù Hợp
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            🎯 KHÓA HỌC NÀY DÀNH CHO AI?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Cho dù bạn chưa từng chạm vào một dòng code nào, khóa học vẫn đảm bảo giúp bạn tự tạo thành công website đầu tay!
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCE.map((aud, idx) => (
            <div
              key={idx}
              className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 space-y-3 group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {TARGET_ICON_MAP[aud.icon]}
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {aud.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 p-6 rounded-3xl border border-emerald-500/30 space-y-3">
          <p className="text-white font-bold text-sm sm:text-base">
            👉 Bạn thuộc một trong các đối tượng trên? Đừng chần chừ, cơ hội sở hữu kỹ năng VibeCoding đang chờ bạn!
          </p>
          <a
            href={ZALO_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/20"
          >
            Đăng Ký Vào Group Zalo Lớp Học Ngay &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
