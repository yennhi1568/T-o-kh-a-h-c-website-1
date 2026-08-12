import React, { useState } from 'react';
import { Sparkles, Play, CheckCircle2, Copy, RefreshCw, Eye, Monitor, Smartphone, Layers, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PromptPreset {
  id: string;
  name: string;
  prompt: string;
  previewTitle: string;
  badgeText: string;
  elements: {
    hero: string;
    feature1: string;
    feature2: string;
    price: string;
    ctaText: string;
  };
}

const PRESETS: PromptPreset[] = [
  {
    id: 'preset-tool',
    name: 'Website Bán Tool AI',
    prompt: 'Tạo website bán Tool AI tự động hóa với giao diện Dark Mode, bảng giá 3 gói dịch vụ, nút thanh toán qua QR ngân hàng và nút chat Zalo.',
    previewTitle: 'AI Tool Hub - Chuyên Tool AI & Automation',
    badgeText: 'Live Demo Web Tool AI',
    elements: {
      hero: 'Hệ Thống Bán Tool AI Tự Động 24/7',
      feature1: '⚡ Tự động kích hoạt tài khoản trong 30 giây',
      feature2: '🛡️ Bảo hành 1 đổi 1 suốt thời gian sử dụng',
      price: 'Từ 99.000đ / tháng',
      ctaText: 'Mua Ngay Qua QR Code',
    },
  },
  {
    id: 'preset-course',
    name: 'Landing Page Khóa Học',
    prompt: 'Tạo Landing Page bán khóa học Online chuyển đổi cao. Có lộ trình 5 chương, đánh giá học viên, đếm ngược ưu đãi và form đăng ký.',
    previewTitle: 'Khóa Học Master AI Studio - VibeCoding 2026',
    badgeText: 'Live Demo Landing Page',
    elements: {
      hero: 'Tự Tạo Website Kinh Doanh Trong 5 Phút Khôn Cần Code',
      feature1: '📚 Tặng ngay Bộ 100+ Prompt thiết kế web độc quyền',
      feature2: '👥 Hỗ trợ cầm tay chỉ chuột 1-1 trong Group Zalo',
      price: 'Ưu đãi Group Zalo: Miễn Phí Đăng Ký',
      ctaText: 'Đăng Ký Tham Gia Ngay',
    },
  },
  {
    id: 'preset-prompt',
    name: 'Chợ Bán Prompt & Ebook',
    prompt: 'Thiết kế trang web Marketplace bán bộ thư viện Prompt AI, Template Canva và Ebook PDF. Cho phép xem trước prompt và mua tức thì.',
    previewTitle: 'PromptVault - Kho Thư Viện Prompt & Template',
    badgeText: 'Live Demo Digital Store',
    elements: {
      hero: 'Thư Viện 1,000+ Prompt AI Chuyên Nghiệp',
      feature1: '🎨 Template Canva / Notion sẵn dùng ngay',
      feature2: '📥 Tải file tự động ngay sau khi thanh toán',
      price: 'Từ 49.000đ / Bộ Prompt',
      ctaText: 'Xem & Tải Mẫu Ngay',
    },
  },
];

export const PromptSimulator: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<PromptPreset>(PRESETS[0]);
  const [customPrompt, setCustomPrompt] = useState(PRESETS[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState<number>(0);
  const [hasGenerated, setHasGenerated] = useState(true);
  const [copied, setCopied] = useState(false);
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const handleSelectPreset = (preset: PromptPreset) => {
    setSelectedPreset(preset);
    setCustomPrompt(preset.prompt);
    triggerAIBuild(preset);
  };

  const triggerAIBuild = (preset = selectedPreset) => {
    setIsGenerating(true);
    setGenStep(1);
    setHasGenerated(false);

    setTimeout(() => {
      setGenStep(2);
    }, 600);

    setTimeout(() => {
      setGenStep(3);
    }, 1200);

    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
      });
    }, 1800);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(customPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Background glow behind simulator */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Simulator Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> AI Studio VibeCoding Engine
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setDeviceView('desktop')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition-colors ${
              deviceView === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> Desktop
          </button>
          <button
            onClick={() => setDeviceView('mobile')}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg flex items-center gap-1 transition-colors ${
              deviceView === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Mobile
          </button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="mb-4">
        <label className="text-xs font-semibold text-slate-400 mb-2 block uppercase tracking-wider">
          Chọn Mẫu Ý Tưởng Hoặc Nhập Prompt Riêng:
        </label>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedPreset.id === preset.id
                  ? 'bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-lg shadow-emerald-500/20 font-semibold'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Textarea Box */}
      <div className="relative mb-4">
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          rows={3}
          className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl p-3.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-mono transition-colors resize-none leading-relaxed"
          placeholder="Nhập câu lệnh thiết kế website của bạn..."
        />
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            onClick={handleCopyPrompt}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 border border-slate-700 transition-colors"
            title="Sao chép Prompt này"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Đã chép</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Chép Prompt</span>
              </>
            )}
          </button>

          <button
            onClick={() => triggerAIBuild()}
            disabled={isGenerating}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/20 disabled:opacity-50 transition-all cursor-pointer"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Đang Tạo...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Thử Tạo Web</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* AI Build Status / Live Output Simulation */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden min-h-[220px] flex flex-col justify-between">
        {/* Mock Browser Title Bar */}
        <div className="bg-slate-900/80 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            {selectedPreset.previewTitle}
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-semibold">
            {selectedPreset.badgeText}
          </span>
        </div>

        {/* Inner Content Display */}
        <div className="p-4 flex-1 flex flex-col justify-center">
          {isGenerating ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 animate-spin">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-200">
                  {genStep === 1 && '🤖 AI đang phân tích Prompt VibeCoding...'}
                  {genStep === 2 && '⚡ AI Studio đang dựng giao diện & Tailwind CSS...'}
                  {genStep === 3 && '✨ Đang hoàn thiện các nút bấm & tính năng tự động!'}
                </p>
                <div className="w-48 mx-auto bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-indigo-500 h-full transition-all duration-500"
                    style={{ width: `${(genStep / 3) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ) : hasGenerated ? (
            <div
              className={`transition-all duration-300 ${
                deviceView === 'mobile' ? 'max-w-xs mx-auto border border-slate-800 p-3 rounded-2xl' : ''
              }`}
            >
              {/* Simulated Generated Web Frame */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {selectedPreset.elements.hero}
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    5 Phút Tạo Web
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {selectedPreset.elements.feature1}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    {selectedPreset.elements.feature2}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/60">
                  <span className="text-xs font-bold text-emerald-400">
                    {selectedPreset.elements.price}
                  </span>
                  <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs shadow hover:opacity-90 flex items-center gap-1">
                    {selectedPreset.elements.ctaText}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="mt-3 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Toàn bộ giao diện trên được AI Studio tạo ra tự động từ Prompt tiếng Việt!</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
