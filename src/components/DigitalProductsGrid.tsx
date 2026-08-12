import React from 'react';
import { DIGITAL_PRODUCTS, ZALO_GROUP_LINK } from '../data/courseData';
import { Bot, Code2, KeyRound, GraduationCap, BookOpen, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

const PRODUCT_ICON_MAP: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  KeyRound: <KeyRound className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

export const DigitalProductsGrid: React.FC = () => {
  return (
    <section id="san-pham-so" className="py-16 lg:py-24 bg-slate-900 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold">
            <ShoppingBag className="w-4 h-4 text-emerald-400" /> Hệ Sinh Thái Sản Phẩm Digital
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            💻 BẠN CÓ THỂ XÂY DỰNG WEBSITE BÁN NHỮNG MẶT HÀNG GÌ?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Chỉ với quy trình VibeCoding, bạn tự do tạo lập trang bán hàng cho hơn 10+ loại sản phẩm số lợi nhuận cao nhất thị trường hiện nay:
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGITAL_PRODUCTS.map((prod, idx) => (
            <div
              key={idx}
              className={`bg-slate-950 p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 space-y-4 shadow-xl ${prod.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {PRODUCT_ICON_MAP[prod.icon]}
                </div>
                <span className="text-[11px] font-mono bg-slate-900 text-slate-300 px-2.5 py-1 rounded-full border border-slate-800">
                  Lợi Nhuận Cao
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{prod.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{prod.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">Ví dụ sản phẩm:</span>
                <ul className="space-y-1">
                  {prod.examples.map((ex, exIdx) => (
                    <li key={exIdx} className="text-xs text-slate-200 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-12 text-center">
          <a
            href={ZALO_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Tạo Website Bán Sản Phẩm Số Ngay</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
