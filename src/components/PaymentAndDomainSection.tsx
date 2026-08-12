import React from 'react';
import { CreditCard, Globe, QrCode, CheckCircle2, ShieldCheck, Zap, ArrowRight, Lock, Sparkles } from 'lucide-react';
import { ZALO_GROUP_LINK } from '../data/courseData';

export const PaymentAndDomainSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Module 4: Payment Flow */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold">
              <CreditCard className="w-4 h-4 text-amber-400" /> Học Phần 4: Thanh Toán Tự Động
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              4️⃣ KẾT NỐI HỆ THỐNG THANH TOÁN 💳
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Website đẹp thôi chưa đủ — mục tiêu cuối cùng là <strong className="text-emerald-400 font-bold">BÁN ĐƯỢC HÀNG</strong>.
              Bạn sẽ được hướng dẫn kết nối quy trình thanh toán tự động giúp khách mua hàng dễ dàng:
            </p>

            {/* Step-by-Step Purchasing Flow */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Quy Trình Mua Hàng Tối Ưu Tỷ Lệ Chuyển Đổi:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">Bước 1</span>
                  <p className="text-xs font-bold text-white">Chọn Sản Phẩm</p>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">Bước 2</span>
                  <p className="text-xs font-bold text-white">Đặt Mua</p>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">Bước 3</span>
                  <p className="text-xs font-bold text-emerald-400">Quét QR Code</p>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-mono">Bước 4</span>
                  <p className="text-xs font-bold text-indigo-300">Nhận Hàng Tuần Tự</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hiển thị mã QR Thanh toán Ngân hàng / MoMo tức thì</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Xác nhận thông tin đơn hàng và gửi link tải file / tài khoản</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tự động hóa giúp bạn bán hàng ngay cả khi đang ngủ</span>
              </div>
            </div>
          </div>

          {/* Right Card: Payment Mockup Preview */}
          <div className="lg:col-span-6 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">Thanh Toán Đơn Hàng #8829</span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
                  Tự Động 24/7
                </span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl text-center space-y-3">
                <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl flex items-center justify-center shadow-inner">
                  {/* Mock QR graphic */}
                  <div className="w-full h-full border-2 border-dashed border-slate-900 flex items-center justify-center text-slate-900 font-bold text-[10px] text-center p-1">
                    [ MÃ QR BANK / MOMO AUTOMATED ]
                  </div>
                </div>
                <div className="text-xs text-slate-300">
                  <p className="font-bold text-emerald-400 text-sm">Số tiền: 199.000đ</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Nội dung CK: HD8829 - [SĐT của bạn]</p>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Khách quét QR ➔ Hệ thống kiểm tra ➔ Tự động gửi sản phẩm số!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/80 my-12" />

        {/* Module 5: Custom Domain */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Card: Domain Preview */}
          <div className="lg:col-span-6 order-2 lg:order-1 bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-400 block uppercase">Thương Hiệu Xuất Bản Chuyên Nghiệp:</span>
              <div className="flex items-center gap-2 bg-slate-900 p-3 rounded-xl border border-indigo-500/40 text-emerald-300 font-mono text-sm sm:text-base font-bold shadow-inner">
                <Globe className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>https://TenThuongHieu.vn</span>
                <span className="ml-auto text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                  SSL Bảo Mật
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-emerald-400 font-bold text-sm">100% Chủ Động</span>
                  <p className="text-[11px] text-slate-400">Sở hữu thương hiệu dài hạn</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-indigo-400 font-bold text-sm">Tối Ưu Ads</span>
                  <p className="text-[11px] text-slate-400">Tăng tỷ lệ duyệt quảng cáo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text: Module 5 Description */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold">
              <Globe className="w-4 h-4 text-cyan-400" /> Học Phần 5: Kết Nối Tên Miền
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              5️⃣ KẾT NỐI TÊN MIỀN CÁ NHÂN 🌐
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Thay vì sử dụng một đường link khó nhớ, bạn sẽ được hướng dẫn trỏ website lên tên miền riêng (VD:{' '}
              <strong className="text-emerald-300">TenThuongHieu.vn</strong>).
            </p>

            <div className="space-y-3">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lợi Ích Khi Sử Dụng Tên Miền Riêng:</h5>
              <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Xây dựng uy tín thương hiệu cá nhân & doanh nghiệp trong mắt khách hàng.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Chuyên nghiệp hơn khi chạy quảng cáo Facebook, Google Ads & TikTok Ads.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dễ nhớ, dễ chia sẻ, chủ động phát triển hệ thống lâu dài không phụ thuộc bên thứ 3.</span>
                </div>
              </div>
            </div>

            <a
              href={ZALO_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/20"
            >
              <span>Tham Gia Group Hướng Dẫn Tên Miền</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
