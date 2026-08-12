import React from 'react';
import { Rocket, XCircle, CheckCircle2, ArrowRight, Brain, Zap, Sparkles } from 'lucide-react';
import { ZALO_GROUP_LINK } from '../data/courseData';

export const MindsetComparison: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold">
            <Rocket className="w-4 h-4 text-emerald-400" /> Thay Đổi Tư Duy Dùng AI
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            🚀 ĐỪNG CHỈ DÙNG AI ĐỂ HỎI ĐÁP – HÃY DÙNG AI ĐỂ TẠO RA SẢN PHẨM!
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            AI đang rút ngắn khoảng cách giữa <strong>“Có Ý Tưởng”</strong> và <strong>“Tạo Ra Sản Phẩm Thực Tế”</strong>. Bạn không cần phải là lập trình viên giỏi, chỉ cần học đúng cách!
          </p>
        </div>

        {/* Mindset Steps */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl space-y-6">
          <h3 className="text-lg font-bold text-white text-center">
            💡 Công Thức VibeCoding Mới Dành Cho Bạn:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">1</span>
              <p className="text-xs sm:text-sm font-bold text-white">Mô Tả Đúng Ý Tưởng</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">2</span>
              <p className="text-xs sm:text-sm font-bold text-white">Viết Prompt Chuẩn</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">3</span>
              <p className="text-xs sm:text-sm font-bold text-white">Yêu Cầu AI Studio</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">4</span>
              <p className="text-xs sm:text-sm font-bold text-white">Chỉnh Sửa Nhanh</p>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-gradient-to-r from-emerald-900/60 to-teal-900/60 p-4 rounded-2xl border border-emerald-500/40 space-y-2">
              <span className="text-[10px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-bold">5</span>
              <p className="text-xs sm:text-sm font-extrabold text-emerald-300">Đưa Vào Kinh Doanh!</p>
            </div>
          </div>
        </div>

        {/* Side by Side Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Old Way */}
          <div className="bg-slate-950/60 p-6 rounded-3xl border border-rose-500/20 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
              <XCircle className="w-5 h-5" />
              <span>CÁCH LÀM TRUYỀN THỐNG (CŨ)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Học lập trình HTML/CSS/JS tốn 6 - 12 tháng vật lộn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Thuê bên ngoài tốn 10 - 30 triệu đồng/website.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Mỗi lần sửa nội dung phải đợi đội kỹ thuật xử lý.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>Tốc độ ra mắt chậm, bỏ lỡ thời cơ kinh doanh tốt.</span>
              </li>
            </ul>
          </div>

          {/* New VibeCoding Way */}
          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-950 p-6 rounded-3xl border border-emerald-500/40 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>CÁCH LÀM VIBECODING BẰNG AI (MỚI)</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Tạo xong website đầy đủ tính năng chỉ trong <strong>5 Phút</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Chi phí khởi tạo gần như bằng <strong>0 ĐỒNG</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Tự tay chỉnh sửa giao diện bất cứ lúc nào chỉ với 1 câu lệnh.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Thử nghiệm không giới hạn ý tưởng kinh doanh mới!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
