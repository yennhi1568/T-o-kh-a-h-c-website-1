import React, { useState } from 'react';
import { WEBSITE_EXAMPLES, ZALO_GROUP_LINK } from '../data/courseData';
import { Layers, Clock, CheckCircle2, ArrowRight, Sparkles, Layout, Monitor } from 'lucide-react';

export const WebsiteExamplesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(WEBSITE_EXAMPLES[0].id);

  return (
    <section className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold">
            <Layers className="w-4 h-4 text-indigo-400" /> Tư Duy VibeCoding Đột Phá
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            💰 HỌC MỘT LẦN – ỨNG DỤNG CHO NHIỀU WEBSITE
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Điểm mạnh nhất của VibeCoding không phải chỉ tạo ra 01 website. Khi đã làm chủ tư duy gõ Prompt, mọi ý tưởng kinh doanh mới đều có thể biến thành website tức thì!
          </p>

          <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 inline-block font-mono text-xs sm:text-sm text-emerald-300 font-bold shadow-lg">
            ⚡ Ý tưởng thay đổi ➔ Prompt thay đổi ➔ Website mới được tạo ra!
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {WEBSITE_EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setActiveTab(ex.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === ex.id
                  ? 'bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>{ex.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Showcase Display */}
        {WEBSITE_EXAMPLES.filter((item) => item.id === activeTab).map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br ${item.imageBg} rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 max-w-4xl mx-auto`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.category}</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">{item.title}</h3>
              </div>

              <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs font-semibold text-emerald-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Thời gian AI tạo: {item.timeToBuild}</span>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">{item.description}</p>

            <div className="space-y-2">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tính Năng Được AI Tự Động Sinh Ra:</h5>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" /> Mẫu Prompt cho loại website này có sẵn trong khóa học!
              </span>

              <a
                href={ZALO_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm text-center shadow-lg transition-colors"
              >
                Nhận Prompt Mẫu Website Này &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
