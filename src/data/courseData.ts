import {
  PromptTemplate,
  CurriculumModule,
  DigitalProductCategory,
  WebsiteExample,
  FAQItem,
  SocialNotification,
} from '../types';

export const ZALO_GROUP_LINK = 'https://zalo.me/g/fbw33tsa4vcldzmv4ncr';
export const HOTLINE_PHONE = '0983 456 828';
export const HOTLINE_LINK = 'tel:0983456828';

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'p1',
    title: 'Website Bán Tool AI & Tài Khoản Số Automated',
    category: 'Website Bán Tool',
    promptText:
      'Tạo website chuyên nghiệp bán Tool AI và Tài khoản số (ChatGPT Plus, Midjourney, Canva Pro). Giao diện Dark Theme hiện đại, có bảng giá theo tháng/năm, tính năng tìm kiếm sản phẩm, giỏ hàng, form đặt hàng tự động và nút chat Zalo hỗ trợ 24/7.',
    previewImageName: 'tool_website',
    tags: ['Tool AI', 'Tài Khoản Số', 'Giao Diện Dark Mode', 'Giỏ Hàng'],
  },
  {
    id: 'p2',
    title: 'Landing Page Bán Khóa Học Online & Ebook',
    category: 'Khóa Học & Ebook',
    promptText:
      'Thiết kế Landing Page chuyển đổi cao bán Khóa học Online & Ebook. Bao gồm Video intro hero header, Lộ trình học 5 chương chi tiết, Đánh giá của học viên (Testimonials), Bảng so sánh gói học, Đồng hồ đếm ngược ưu đãi và Form đăng ký tư vấn trực tiếp.',
    previewImageName: 'course_landing',
    tags: ['Khóa Học Online', 'Ebook', 'Đồng Hồ Đếm Ngược', 'Review'],
  },
  {
    id: 'p3',
    title: 'Website Bán Prompt AI, Template & Canva Files',
    category: 'Sản Phẩm Digital',
    promptText:
      'Tạo trang web bán bộ thư viện Prompt AI và Template Canva/Notion độc quyền. Thiết kế dạng lưới sản phẩm (Grid Card), nút "Xem trước Prompt" (Live Preview), lọc sản phẩm theo chủ đề (Marketing, Thiết Kế, Code) và nút thanh toán QR Code nhanh chóng.',
    previewImageName: 'prompt_market',
    tags: ['Bộ Prompt AI', 'Template Canva', 'Thanh Toán QR', 'Xem Trước'],
  },
  {
    id: 'p4',
    title: 'Trang Giới Thiệu Dịch Vụ Marketing & IT Freelancer',
    category: 'Dịch Vụ Online',
    promptText:
      'Thiết kế website Showcase dịch vụ dành cho Freelancer & Agency. Có phần Portfolio dự án đã làm, Báo giá dịch vụ minh bạch, Quy trình làm việc 4 bước, Nút đặt lịch tư vấn và Tích hợp Zalo/Messenger.',
    previewImageName: 'freelancer_site',
    tags: ['Freelancer', 'Agency', 'Báo Giá Dịch Vụ', 'Portfolio'],
  },
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 1,
    title: '1. Tạo Website Bằng AI Studio – VibeCoding',
    subtitle: 'Nắm vững quy trình chuyển đổi ý tưởng thành mã lệnh chuẩn',
    iconName: 'Cpu',
    badge: 'Cốt Lõi AI',
    gradient: 'from-blue-600 to-indigo-600',
    points: [
      'Cách biến ý tưởng kinh doanh thành Prompt chi tiết chuẩn xác',
      'Kỹ thuật yêu cầu AI Studio thiết kế giao diện website theo đúng ý muốn',
      'Tạo đầy đủ Trang chủ, Trang sản phẩm, Bảng giá, Form đăng nhập/đăng ký',
      'Tạo website chuyên bán Tool & Sản phẩm số ấn tượng',
      'Chỉnh sửa & tùy biến giao diện linh hoạt bằng câu lệnh AI',
      'Tuyệt đối KHÔNG cần tự tay viết Code từ đầu!',
    ],
  },
  {
    id: 2,
    title: '2. Cầm Tay Chỉ Chuột Từng Bước',
    subtitle: 'Quy trình chuẩn hóa 7 bước đưa sản phẩm lên Internet',
    iconName: 'Workflow',
    badge: 'Thực Hành 100%',
    gradient: 'from-emerald-600 to-teal-600',
    points: [
      'Lộ trình rõ ràng: Ý tưởng ➔ Prompt ➔ Tạo Web ➔ Chỉnh sửa ➔ Kiểm tra ➔ Hoàn thiện ➔ Đưa lên Internet',
      'Hướng dẫn tỉ mỉ từng cú click chuột cho người hoàn toàn mới',
      'Giải thích chi tiết nguyên nhân và cách xử lý khi AI tạo chưa đúng ý',
      'Phương pháp tối ưu Prompt nâng cao để AI hiểu chính xác 100% yêu cầu',
      'Từng bước nâng cấp và hoàn thiện tính năng theo đà phát triển kinh doanh',
    ],
  },
  {
    id: 3,
    title: '3. Xây Dựng Website Bán Tool & Sản Phẩm Số',
    subtitle: 'Làm chủ công thức bán 10+ loại mặt hàng digital lợi nhuận cao',
    iconName: 'ShoppingBag',
    badge: 'Ứng Dụng Thực Tế',
    gradient: 'from-purple-600 to-pink-600',
    points: [
      'Website bán các dòng Tool AI (Viết bài, tạo ảnh, dựng video...)',
      'Website phân phối phần mềm, bản quyền & tài khoản số',
      'Trang bán Khóa học Online, Ebook & tài liệu chuyên ngành',
      'Kho bán bộ Prompt AI, Template Canva, File thiết kế & Source code',
      'Cung cấp trang giới thiệu Dịch vụ Online chuyên nghiệp',
    ],
  },
  {
    id: 4,
    title: '4. Kết Nối Hệ Thống Thanh Toán 自動 💳',
    subtitle: 'Tối ưu trải nghiệm mua hàng - Biến khách truy cập thành doanh thu',
    iconName: 'CreditCard',
    badge: 'Quy Trình Tự Động',
    gradient: 'from-amber-500 to-orange-600',
    points: [
      'Xây dựng luồng mua hàng mượt mà: Chọn sản phẩm ➔ Đặt mua ➔ Thanh toán ➔ Nhận sản phẩm',
      'Tích hợp trang hiển thị mã QR Thanh toán Ngân hàng / MoMo / ZaloPay',
      'Thiết lập biểu mẫu xác nhận đơn hàng tự động',
      'Xây dựng hệ thống bán sản phẩm số tự động giao file/tài khoản 24/7',
    ],
  },
  {
    id: 5,
    title: '5. Kết Nối Tên Miền Cá Nhân 🌐',
    subtitle: 'Đưa website xuất bản trên tên miền riêng chuẩn thương hiệu',
    iconName: 'Globe',
    badge: 'Thương Hiệu Riêng',
    gradient: 'from-cyan-600 to-blue-600',
    points: [
      'Hướng dẫn trỏ tên miền cá nhân (Ví dụ: TenThuongHieu.vn)',
      'Xây dựng độ uy tín thương hiệu vượt trội trong mắt khách hàng',
      'Tối ưu hóa hình ảnh chuyên nghiệp khi chạy quảng cáo Facebook/Google/TikTok',
      'Dễ nhớ, dễ chia sẻ, làm chủ hệ thống kinh doanh bền vững lâu dài',
    ],
  },
];

export const DIGITAL_PRODUCTS: DigitalProductCategory[] = [
  {
    title: 'Tool AI & Automation',
    icon: 'Bot',
    description: 'Các công cụ tự động hóa, tool viết bài, tool làm video AI.',
    examples: ['Tool AI Copywriting', 'Tool Tự Động Đăng Bài', 'Tool SEO Automation'],
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
  },
  {
    title: 'Phần Mềm & App',
    icon: 'Code2',
    description: 'Phần mềm desktop, ứng dụng web, extension trình duyệt.',
    examples: ['Extension Chrome Useful', 'SaaS App Tự Động', 'Script Tự Động Hóa'],
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400',
  },
  {
    title: 'Tài Khoản Số',
    icon: 'KeyRound',
    description: 'Nâng cấp tài khoản bản quyền, dịch vụ giải trí & công việc.',
    examples: ['ChatGPT Plus / Claude Pro', 'Canva Pro / Midjourney', 'CapCut Pro / CapCut PC'],
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
  },
  {
    title: 'Khóa Học Online',
    icon: 'GraduationCap',
    description: 'Video khóa học đóng gói sẵn, lộ trình đào tạo chuyên sâu.',
    examples: ['Khóa AI Marketing', 'Khóa Thiết Kế Bằng AI', 'Khóa Xây Kênh TikTok'],
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
  },
  {
    title: 'Ebook & Tài Liệu',
    icon: 'BookOpen',
    description: 'Sách điện tử PDF, tài liệu hướng dẫn, checklist công việc.',
    examples: ['Sách 100+ Chiến Lược AI', 'Checklist Xây Kênh', 'Tài Liệu Marketing 2026'],
    color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400',
  },
  {
    title: 'Prompt AI & Templates',
    icon: 'Sparkles',
    description: 'Bộ Prompt AI độc quyền, Template Canva, Notion Workspace.',
    examples: ['Bộ 500+ Prompt Midjourney', 'Notion Planner Bán Hàng', 'Canva UI Kit'],
    color: 'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30 text-violet-400',
  },
];

export const WEBSITE_EXAMPLES: WebsiteExample[] = [
  {
    id: 'w1',
    title: 'Website Bán Tool & Tài Khoản AI Auto',
    category: 'Website Bán Tool',
    description: 'Trang bán hàng tự động tích hợp danh mục sản phẩm, tính năng chọn gói 1 tháng / 6 tháng / 1 năm, popup thanh toán QR ngân hàng tức thì.',
    features: ['Giao diện Dark Theme hiện đại', 'Bộ lọc sản phẩm thông minh', 'Tích hợp Nút Chat Zalo Hỗ Trợ', 'Thanh toán QR nhanh'],
    timeToBuild: '5 - 10 Phút',
    imageBg: 'from-slate-900 to-blue-950',
    accentColor: 'text-blue-400',
  },
  {
    id: 'w2',
    title: 'Landing Page Khóa Học High-Converting',
    category: 'Khóa Học Online',
    description: 'Tối ưu từng vị trí đặt nút CTA, hiển thị lộ trình khóa học dạng Timeline, đánh giá của học viên cũ và đồng hồ đếm ngược gia tăng chuyển đổi.',
    features: ['Video Intro sắc nét', 'Timeline khóa học 5 chương', 'Bảng so sánh Học phần', 'Đếm ngược nhận ưu đãi'],
    timeToBuild: '5 Phút',
    imageBg: 'from-slate-900 to-purple-950',
    accentColor: 'text-purple-400',
  },
  {
    id: 'w3',
    title: 'Kho Thư Viện Prompt AI & Template Canva',
    category: 'Sản Phẩm Digital',
    description: 'Thiết kế chuẩn Marketplace cho phép khách hàng xem trước mẫu Prompt, copy mẫu thử và bấm mua trọn bộ kho Prompt tức thì.',
    features: ['Thẻ xem trước Prompt', 'Tìm kiếm theo từ khóa', 'Giỏ hàng siêu tốc', 'Link tải file tự động'],
    timeToBuild: '7 Phút',
    imageBg: 'from-slate-900 to-emerald-950',
    accentColor: 'text-emerald-400',
  },
  {
    id: 'w4',
    title: 'Website Báo Giá & Showroom Dịch Vụ IT',
    category: 'Doanh Nghiệp & Agency',
    description: 'Dành cho Freelancer và Agency nhận thiết kế web, làm dịch vụ Marketing. Hiển thị báo giá gói dịch vụ, dự án tiêu biểu và nút đặt hẹn.',
    features: ['Trang Portfolio chuyên nghiệp', 'Bảng tính giá tự động', 'Form nhận thông tin tư vấn', 'Tên miền cá nhân riêng'],
    timeToBuild: '8 Phút',
    imageBg: 'from-slate-900 to-cyan-950',
    accentColor: 'text-cyan-400',
  },
];

export const TARGET_AUDIENCE = [
  {
    title: 'Người Hoàn Toàn KHÔNG Biết IT',
    desc: 'Chưa từng biết lập trình, sợ code phức tạp. Khóa học thiết kế chuẩn "cầm tay chỉ chuột", bạn chỉ cần biết gõ tiếng Việt!',
    icon: 'UserX',
  },
  {
    title: 'Người Đang Kinh Doanh Online',
    desc: 'Muốn có website bán hàng riêng để tăng uy tín, giảm chi phí phụ thuộc sàn thương mại điện tử hoặc chạy quảng cáo Facebook.',
    icon: 'Store',
  },
  {
    title: 'Người Bán Tool & Sản Phẩm Số',
    desc: 'Đang sở hữu phần mềm, tài khoản số, khóa học hay tài liệu nhưng chưa có website tự động hóa quy trình nhận đơn.',
    icon: 'Cpu',
  },
  {
    title: 'Freelancer & Marketer',
    desc: 'Muốn tăng tốc độ tạo Landing Page cho chiến dịch Marketing của khách hàng chỉ trong vài phút thay vì tốn nhiều ngày.',
    icon: 'Zap',
  },
  {
    title: 'Chủ Shop & Doanh Nghiệp Nhỏ',
    desc: 'Cần tự chủ việc cập nhật giao diện, bài viết, sản phẩm mới trên trang web mà không tốn chi phí thuê kỹ thuật hàng tháng.',
    icon: 'Building',
  },
  {
    title: 'Người Muốn Ứng Dụng AI Vào Thực Tế',
    desc: 'Không dừng lại ở việc hỏi đáp ChatGPT thông thường — sử dụng AI Studio để thực sự tạo ra sản phẩm kinh doanh kiếm ra tiền!',
    icon: 'Rocket',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Tôi hoàn toàn không biết gì về IT hay Code thì có làm được không?',
    answer:
      'Hoàn toàn ĐƯỢC! Khóa học được thiết kế dành riêng cho người không có nền tảng IT. Phương pháp VibeCoding giúp bạn giao tiếp với AI bằng tiếng Việt tự nhiên. AI sẽ tự tay tạo toàn bộ mã code cho bạn!',
    category: 'Cơ Bản',
  },
  {
    question: 'Tôi sẽ nhận được gì khi tham gia Group Zalo khóa học?',
    answer:
      'Khi bấm vào link Group Zalo (https://zalo.me/g/fbw33tsa4vcldzmv4ncr), bạn sẽ được: Tặng ngay bộ Prompt thiết kế Website 5 phút, Nhận lịch học mới nhất, Hướng dẫn từng bước từ giảng viên và được hỗ trợ giải đáp thắc mắc 24/7.',
    category: 'Đăng Ký',
  },
  {
    question: 'Sử dụng AI Studio có tốn chi phí gì không?',
    answer:
      'Google AI Studio cung cấp hạn mức miễn phí vô cùng rộng rãi cho người dùng phát triển ứng dụng. Bạn hoàn toàn có thể bắt đầu và xây dựng website mà không tốn chi phí phần mềm ban đầu!',
    category: 'Kỹ Thuật',
  },
  {
    question: 'Sau khóa học tôi có tự làm được nhiều website khác không?',
    answer:
      'Chắc chắn! Bạn học phương pháp tư duy viết Prompt và quy trình làm việc với AI. Khi đã nắm bản chất: Ý tưởng thay đổi ➔ Prompt thay đổi ➔ Website mới được tạo ra. Bạn có thể làm không giới hạn số lượng website!',
    category: 'Ứng Dụng',
  },
  {
    question: 'Tôi có thể trỏ tên miền cá nhân (.vn / .com) vào website được không?',
    answer:
      'Có! Trong học phần 5, khóa học sẽ hướng dẫn bạn chi tiết từng bước trỏ tên miền riêng (VD: TenThuongHieu.vn) để tối ưu uy tín thương hiệu khi chạy quảng cáo.',
    category: 'Kỹ Thuật',
  },
];

export const SOCIAL_PROOF_NOTIFS: SocialNotification[] = [
  { id: '1', name: 'Nguyễn Văn Minh', location: 'Hà Nội', timeAgo: '2 phút trước', action: 'vừa gia nhập Group Zalo học VibeCoding' },
  { id: '2', name: 'Trần Thị Thu Hương', location: 'TP. Hồ Chí Minh', timeAgo: '5 phút trước', action: 'đã nhận Bộ Prompt Thiết Kế Web' },
  { id: '3', name: 'Lê Hoàng Nam', location: 'Đà Nẵng', timeAgo: '8 phút trước', action: 'vừa tham gia Nhóm Zalo lớp mới' },
  { id: '4', name: 'Phạm Đức Anh', location: 'Hải Phòng', timeAgo: '12 phút trước', action: 'đã tải xuống 10+ Prompt bán Tool AI' },
  { id: '5', name: 'Vũ Ngọc Mai', location: 'Cần Thơ', timeAgo: '15 phút trước', action: 'vừa đăng ký tư vấn qua Hotline' },
];
