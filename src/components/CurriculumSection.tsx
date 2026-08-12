import React, { useState } from 'react';
import { CURRICULUM_MODULES, ZALO_GROUP_LINK } from '../data/courseData';
import { Cpu, Workflow, ShoppingBag, CreditCard, Globe, CheckCircle2, ChevronDown, Sparkles, BookOpen } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-white" />,
  Workflow: <Workflow className="w-6 h-6 text-white" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-white" />,
  CreditCard: <CreditCard className="w-6 h-6 text-white" />,
  Globe: <Globe className="w-6 h-6 text-white" />,
};

export const CurriculumSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(1);

  return (
    <section id="lo-trinh" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold">
            <BookOpen className="w-4 h-4 text-indigo-400" /> Lộ Trình Đào Tạo Thực Chiến
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            💻 BẠN SẼ ĐƯỢC HỌC NHỮNG GÌ TRONG KHÓA HỌC?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nội dung thiết kế chuẩn mực 5 module, đi từ chưa biết gì đến khi sở hữu hệ thống website kinh doanh hoàn chỉnh.
          </p>
        </div>

        {/* Modules List Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Module Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {CURRICULUM_MODULES.map((mod) => {
              const isActive = activeModule === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-slate-900 border-emerald-500/60 shadow-xl shadow-emerald-500/10 translate-x-1'
                      : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${mod.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                      {ICON_MAP[mod.iconName]}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                        Module 0{mod.id} • {mod.badge}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">{mod.title}</h4>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${isActive ? 'rotate-90 text-emerald-400' : ''}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Module Details Card */}
          <div className="lg:col-span-7">
            {CURRICULUM_MODULES.filter((m) => m.id === activeModule).map((mod) => (
              <div
                key={mod.id}
                className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="bg-emerald-500/10 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                      Chi Tiết Module {mod.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-2">{mod.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">{mod.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nội Dung Thực Hành Chi Tiết:</h5>
                  <div className="space-y-2.5">
                    {mod.points.map((pt, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module Footer CTA */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Được hướng dẫn trực tiếp trong Group Zalo
                  </span>

                  <a
                    href={ZALO_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-emerald-500/20"
                  >
                    Đăng Ký Học Module Này &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
