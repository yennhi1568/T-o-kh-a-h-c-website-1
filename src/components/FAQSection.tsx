import React, { useState } from 'react';
import { FAQS, ZALO_GROUP_LINK } from '../data/courseData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold">
            <HelpCircle className="w-4 h-4 text-indigo-400" /> Giải Đáp Thắc Mắc
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            ❓ CÂU HỎI THƯỜNG GẶP VỀ KHÓA HỌC
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Mọi thắc mắc của bạn về lộ trình, kỹ thuật VibeCoding và hình thức học trong Group Zalo.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-900/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2.5">
                    <span className="text-emerald-400 text-xs font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Q{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-900 leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-900">
                      <span>Chủ đề: {faq.category}</span>
                      <a
                        href={ZALO_GROUP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        Hỏi thêm trong Group Zalo &rarr;
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
