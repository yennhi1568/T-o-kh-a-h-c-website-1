import React, { useState } from 'react';
import { Gift, Copy, CheckCircle2, ArrowRight, Sparkles, Code2, Cpu, Globe, Layers, Download } from 'lucide-react';
import { PROMPT_TEMPLATES, ZALO_GROUP_LINK } from '../data/courseData';
import confetti from 'canvas-confetti';

export const PromptGiftSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="prompt-tang" className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Gift className="w-4 h-4 text-amber-400" /> Quà Tặng Độc Quyền Dành Cho Học Viên
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            🎁 TẶNG BỘ PROMPT THIẾT KẾ WEBSITE CHUẨN KINH DOANH
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Bạn không cần tự mò mẫm hay nghĩ từ câu chữ. Chúng tôi chuẩn bị sẵn bộ Prompt mẫu chuẩn xác. Chỉ cần
            thực hiện theo quy trình <span className="text-emerald-400 font-bold">5 phút siêu tốc</span>:
          </p>
        </div>

        {/* 5-Step Process Visual Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-16">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center relative space-y-2 group hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform">
              1
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">Copy Prompt</h4>
            <p className="text-slate-400 text-[11px]">Sao chép câu lệnh mẫu có sẵn</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center relative space-y-2 group hover:border-indigo-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform">
              2
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">Nhập Yêu Cầu</h4>
            <p className="text-slate-400 text-[11px]">Dán vào khung AI Studio</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center relative space-y-2 group hover:border-purple-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform">
              3
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">AI Tạo Website</h4>
            <p className="text-slate-400 text-[11px]">Tự sinh code & giao diện</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center relative space-y-2 group hover:border-amber-500/50 transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform">
              4
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">Chỉnh Sửa</h4>
            <p className="text-slate-400 text-[11px]">Thay đổi nội dung bằng AI</p>
          </div>

          <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-emerald-900/40 to-slate-950 p-4 rounded-2xl border border-emerald-500/40 text-center relative space-y-2 group">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold text-base group-hover:scale-110 transition-transform">
              5
            </div>
            <h4 className="text-emerald-300 font-extrabold text-xs sm:text-sm">Lên Internet 🌐</h4>
            <p className="text-emerald-200/80 text-[11px]">Hoàn tất & bắt đầu bán hàng</p>
          </div>
        </div>

        {/* Prompt Showcase Library */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROMPT_TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {tpl.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">⚡ Tạo xong trong 5 Phút</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">{tpl.title}</h3>

                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed relative">
                  "{tpl.promptText}"
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {tpl.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopy(tpl.id, tpl.promptText)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
                >
                  {copiedId === tpl.id ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Đã Chép Prompt!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-indigo-400" />
                      <span>Copy Prompt Mẫu</span>
                    </>
                  )}
                </button>

                <a
                  href={ZALO_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Nhận bộ full trong Zalo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 text-center bg-gradient-to-r from-emerald-950/60 via-slate-950 to-indigo-950/60 p-6 rounded-3xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
              <Download className="w-5 h-5 text-emerald-400" /> Nhận Trọn Bộ 50+ Prompt Thiết Kế Web Bán Hàng
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Tham gia Group Zalo để tải trọn bộ tài liệu Prompt đã được tinh chỉnh cho từng lĩnh vực sản phẩm số.
            </p>
          </div>

          <a
            href={ZALO_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 whitespace-nowrap"
          >
            Vào Zalo Lấy Bộ Prompt &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
