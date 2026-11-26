import type {
  PersonalInfo,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  PublicationItem,
  CertificateItem,
  NavItem,
  UIStrings,
} from '../types/portfolio.ts';

export const personalInfo: PersonalInfo = {
  name: 'Mostafa Abedi',
  nameFa: 'مصطفی عابدی',
  title: {
    fa: 'توسعه‌دهنده تخصصی Backend و Full-Stack (ASP.NET, C#, SQL Server)',
    en: 'Specialized Backend & Full-Stack Developer (ASP.NET, C#, SQL Server)',
  },
  headlines: {
    fa: [
      'توسعه‌دهنده تخصصی ASP.NET Core و RESTful API',
      'تحلیلگر و طراح سیستم‌های پایگاه داده و نرم‌افزارهای یکپارچه',
      'طراح راهکارهای مقیاس‌پذیر سازمانی، مالی و وب‌سایت‌های مدرن',
    ],
    en: [
      'ASP.NET Core & Scalable RESTful API Architect',
      'Database Designer & Enterprise Systems Developer',
      'Building High-Performance Web & Desktop Solutions',
    ],
  },
  bio: {
    fa: 'توسعه‌دهنده‌ی BackEnd با بیش از ۲ سال تجربه‌ی عملی و تخصصی در طراحی و توسعه‌ی نرم‌افزارهای تحت وب و ویندوز با استفاده از فناوری‌های مبتنی بر .NET. دارای تجربه در توسعه‌ی برنامه‌ها با ASP.NET Core، پیاده‌سازی معماری‌های مدرن و لایه‌ای، پیاده‌سازی APIهای RESTful و طراحی ساختارهای نرم‌افزاری منظم، قابل توسعه و مقیاس‌پذیر. متعهد به اصول مهندسی نرم‌افزار، بهبود کیفیت کد و علاقه‌مند به هوش مصنوعی و یادگیری فناوری‌های نوین.',
    en: 'Backend & Full-Stack Developer with over 2 years of professional production experience in designing and developing web and desktop applications using .NET technologies. Experienced in ASP.NET Core, Modern Layered Architectures, RESTful APIs, and scalable software systems. Passionate about clean architecture, code quality, AI, and continuous learning.',
  },
  summary: {
    fa: 'توسعه‌دهنده متعهد، علاقه‌مند به حل چالش‌های پیچیده نرم‌افزاری، طراحی دیتابیس‌های بهینه و پیاده‌سازی سرویس‌های با کارایی بالا.',
    en: 'Dedicated developer passionate about solving complex engineering challenges, architecting optimized databases, and crafting high-performance services.',
  },
  location: {
    fa: 'ایران، فارس، شیراز',
    en: 'Shiraz, Fars, Iran',
  },
  email: 'mostafa.abedi554@gmail.com',
  phone: '+989177249281',
  birthDate: {
    fa: '۱۰ اردیبهشت ۱۳۸۰ (شیراز)',
    en: 'April 30, 2001 (Shiraz)',
  },
  status: {
    fa: 'آماده پذیرش پروژه‌های چالش‌برانگیز و همکاری سازمانی',
    en: 'Open for high-impact opportunities & collaboration',
  },
  avatar: '/avatar.jpg',
  resumeUrl: '/Mostafa-Abedi-Resume.pdf',
  socials: [
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/mostafaaaa-abediiii',
      handle: 'mostafaaaa-abediiii',
      icon: 'Linkedin',
    },
    {
      platform: 'telegram',
      label: 'Telegram',
      url: 'https://t.me/mstf_abedi',
      handle: '@mstf_abedi',
      icon: 'Send',
    },
    {
      platform: 'whatsapp',
      label: 'WhatsApp',
      url: 'https://wa.me/989177249281',
      handle: 'mstf_abedi',
      icon: 'MessageCircle',
    },
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com/mostafa.__.abediii',
      handle: 'mostafa.__.abediii',
      icon: 'Instagram',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:mostafa.abedi554@gmail.com',
      handle: 'mostafa.abedi554@gmail.com',
      icon: 'Mail',
    },
    {
      platform: 'phone',
      label: 'SMS & Call',
      url: 'sms:+989177249281',
      handle: '09177249281',
      icon: 'Phone',
    },
  ],
  stats: [
    {
      id: 'exp',
      value: '+2',
      label: { fa: '۲+ سال سابقه کاری تخصصی', en: '2+ Years Production Experience' },
      detail: { fa: 'در شرکت‌های فعال فناوری شیراز', en: 'In tech firms in Shiraz' },
    },
    {
      id: 'projects',
      value: '5+',
      label: { fa: 'پروژه بزرگ اجرایی و موفق', en: 'Completed Production Projects' },
      detail: { fa: 'سامانه‌های وب، حسابداری و سازمانی', en: 'Web, accounting & enterprise' },
    },
    {
      id: 'paper',
      value: '1',
      label: { fa: 'مقاله علمی پژوهشی اینترنت اشیاء', en: 'Published Research Paper' },
      detail: { fa: 'منطق فازی نوع ۲ و یادگیری تقویتی', en: 'Type-2 Fuzzy & Reinforcement Learning' },
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: { fa: 'توسعه بک‌اند و معماری نرم‌افزار', en: 'Backend & Architecture' },
    subtitle: {
      fa: 'تخصص اصلی در فناوری‌های مایکروسافت دات‌نت و متدولوژی‌های طراحی پاک',
      en: 'Core expertise in Microsoft .NET technologies and Clean Architecture',
    },
    skills: [
      { name: 'C# Programming', level: 90, icon: 'Code2', category: 'backend', highlight: true },
      { name: 'ASP.NET Core', level: 95, icon: 'Cpu', category: 'backend', highlight: true },
      { name: 'RESTful Web APIs', level: 95, icon: 'Server', category: 'backend', highlight: true },
      { name: 'Modern Layered Architecture', level: 95, icon: 'Layers', category: 'backend', highlight: true },
      { name: 'Clean Architecture Principles', level: 90, icon: 'Boxes', category: 'backend', highlight: true },
      { name: 'Entity Framework Core & LINQ', level: 90, icon: 'Workflow', category: 'backend', highlight: true },
    ],
  },
  {
    id: 'database',
    title: { fa: 'پایگاه داده و ذخیره‌سازی داده', en: 'Database & Data Storage' },
    subtitle: {
      fa: 'مدل‌سازی دیتابیس‌های پیچیده و بهینه‌سازی پردازش داده‌ها',
      en: 'Complex database modeling and data processing optimization',
    },
    skills: [
      { name: 'Database Analysis & Design', level: 95, icon: 'Database', category: 'database', highlight: true },
      { name: 'Microsoft SQL Server (T-SQL)', level: 80, icon: 'HardDrive', category: 'database', highlight: true },
      { name: 'Entity Framework Core', level: 85, icon: 'Workflow', category: 'database' },
      { name: 'Data Normalization & Indexing', level: 90, icon: 'Sparkles', category: 'database' },
      { name: 'Complex Queries & Stored Procs', level: 80, icon: 'FileCode2', category: 'database' },
    ],
  },
  {
    id: 'frontend',
    title: { fa: 'توسعه وب و فرانت‌اند', en: 'Web & Frontend Development' },
    subtitle: {
      fa: 'ایجاد رابط‌های کاربری مدرن، تعاملی و واکنش‌گرا',
      en: 'Crafting modern, interactive and responsive user interfaces',
    },
    skills: [
      { name: 'Web Development (HTML5 & CSS3)', level: 85, icon: 'Globe', category: 'frontend' },
      { name: 'JavaScript (ES6+) & TypeScript', level: 80, icon: 'Code', category: 'frontend', highlight: true },
      { name: 'jQuery & AJAX Integrations', level: 85, icon: 'RefreshCw', category: 'frontend' },
      { name: 'Tailwind CSS & Modern UI', level: 85, icon: 'Palette', category: 'frontend' },
      { name: 'Responsive & Mobile-First Design', level: 90, icon: 'Smartphone', category: 'frontend' },
    ],
  },
  {
    id: 'solutions',
    title: { fa: 'راهکارهای تجاری و متدولوژی‌ها', en: 'Domain Systems & Methodologies' },
    subtitle: {
      fa: 'طراحی نرم‌افزارهای سازمانی، حسابداری، فروشگاهی و کار تیمی چابک',
      en: 'Enterprise ERP, accounting software, e-commerce, and agile workflows',
    },
    skills: [
      { name: 'E-Commerce Website Architecture', level: 95, icon: 'ShoppingCart', category: 'solutions', highlight: true },
      { name: 'Accounting & ERP/CRM Systems', level: 80, icon: 'FileSpreadsheet', category: 'solutions', highlight: true },
      { name: 'Desktop Software (.NET / WinForms)', level: 80, icon: 'Monitor', category: 'solutions' },
      { name: 'Agile & Scrum Methodologies', level: 60, icon: 'Users', category: 'solutions' },
      { name: 'Git & Version Control', level: 85, icon: 'GitBranch', category: 'solutions' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'noiatech',
    company: {
      fa: 'شرکت فناوری نویاتک (Noiatech)',
      en: 'Noiatech Software Solutions',
    },
    location: {
      fa: 'شیراز، ایران',
      en: 'Shiraz, Iran',
    },
    role: {
      fa: 'توسعه‌دهنده فول‌استک (Full-Stack Developer)',
      en: 'Full-Stack Developer',
    },
    period: {
      fa: 'خرداد ۱۴۰۴ - آبان ۱۴۰۵',
      en: 'June 2025 - November 2026',
    },
    periodEn: 'June 2025 - November 2026',
    isCurrent: false,
    type: {
      fa: 'تمام‌وقت / پروژه‌ای',
      en: 'Full-time / Production',
    },
    description: {
      fa: 'مشارکت در طراحی، معماری و پیاده‌سازی نرم‌افزارهای جامع وب و ویندوز سازمانی با تمرکز بر بک‌اند ASP.NET Core و الگوهای مدرن معماری‌های چندلایه‌ای.',
      en: 'Architecting and developing full-stack web and desktop enterprise software with emphasis on ASP.NET Core and Modern Layered Architectures.',
    },
    achievements: {
      fa: [
        'توسعه وب‌سایت شب‌نشین (پیتزاساز آنلاین اختصاصی)',
        'توسعه وب‌سایت مدیریت پرسنل و صدور فیش حقوقی',
        'توسعه نرم‌افزار تحت ویندوز حسابداری اختصاصی',
        'تحلیل دیتابیس ساخت وب‌سایت فروش کابینت',
        'مدیریت بک‌لاگ پروژه‌های متفاوت و همکاری تیمی در قالب اسکرام',
      ],
      en: [
        'Developed Shab Neshin online food ordering platform featuring a custom pizza creator & advanced admin dashboard',
        'Engineered Healthcare & Nurses Management Portal with digital employee records and automated salary slip generation',
        'Built a standalone custom Windows desktop accounting application with layered architecture and SQL Server',
        'Led database analysis and conceptual architecture for a modern custom cabinet e-commerce platform',
        'Formulated backlogs, managed sprint tasks, and collaborated within agile Scrum sprints',
      ],
    },
    technologies: ['C#', 'ASP.NET Core', 'Microsoft SQL Server', 'Layered Architecture', 'RESTful APIs', 'JavaScript', 'Tailwind CSS', 'Scrum'],
  },
  {
    id: 'ara-pendar-dev',
    company: {
      fa: 'داده‌پردازی آرا پندار متین (Ara Pendar Matin)',
      en: 'Ara Pendar Matin Data Solutions',
    },
    location: {
      fa: 'شیراز، ایران',
      en: 'Shiraz, Iran',
    },
    role: {
      fa: 'توسعه‌دهنده بک‌اند و وب‌سرویس (Backend Developer)',
      en: 'Backend & Services Developer',
    },
    period: {
      fa: 'آبان ۱۴۰۲ - بهمن ۱۴۰۲',
      en: 'November 2023 - February 2024',
    },
    periodEn: 'November 2023 - February 2024',
    isCurrent: false,
    type: {
      fa: 'پروژه‌ای / تخصصی',
      en: 'Contract / Specialized',
    },
    description: {
      fa: 'طراحی و پیاده‌سازی سرویس‌های بک‌اند، وب‌سرویس‌های RESTful با ASP.NET Core و مدیریت پایگاه داده با Microsoft SQL Server.',
      en: 'Architected and developed backend services, high-performance RESTful APIs using ASP.NET Core, and optimized relational databases with Microsoft SQL Server.',
    },
    achievements: {
      fa: [
        'طراحی و پیاده‌سازی سرویس‌های بک‌اند و RESTful API با ASP.NET Core',
        'طراحی ساختار جداول دیتابیس، رویه‌های ذخیره‌شده و بهینه‌سازی کوئری‌های SQL Server',
      ],
      en: [
        'Engineered scalable backend services and RESTful APIs using ASP.NET Core',
        'Architected relational schemas, stored procedures, and query optimizations in SQL Server',
      ],
    },
    technologies: ['C#', 'ASP.NET Core', 'Microsoft SQL Server', 'RESTful APIs', 'Entity Framework Core', 'Git'],
  },
  {
    id: 'ara-pendar-intern',
    company: {
      fa: 'داده‌پردازی آرا پندار متین (Ara Pendar Matin)',
      en: 'Ara Pendar Matin Data Solutions',
    },
    location: {
      fa: 'شیراز، ایران',
      en: 'Shiraz, Iran',
    },
    role: {
      fa: 'کارآموزی دانشگاهی مهندسی نرم‌افزار و بک‌اند (.NET)',
      en: 'Academic Software Engineering & .NET Intern',
    },
    period: {
      fa: 'اردیبهشت ۱۴۰۲ - آبان ۱۴۰۲',
      en: 'May 2023 - November 2023',
    },
    periodEn: 'May 2023 - November 2023',
    isCurrent: false,
    type: {
      fa: 'کارآموزی رسمی دانشگاهی (۶ ماه)',
      en: 'Formal Academic Internship (6 Months)',
    },
    description: {
      fa: 'گذراندن دوره رسمی کارآموزی دانشگاهی با تمرکز بر اصول مهندسی نرم‌افزار، توسعه سرویس‌های دات‌نت و کار با پایگاه‌های داده رابطه‌ای با ارزشیابی عالی.',
      en: 'Completed formal academic internship focused on software engineering principles, .NET backend services, relational database systems, and agile teamwork with outstanding review.',
    },
    achievements: {
      fa: [
        'گذراندن موفق دوره کارآموزی دانشگاهی با بالاترین نمره ارزیابی',
        'مشارکت در طراحی مدل‌های داده و پیاده‌سازی ماژول‌های C# و کوئری‌های SQL',
      ],
      en: [
        'Successfully concluded academic internship with top evaluative performance',
        'Contributed to data modeling, C# module implementations, and SQL query optimizations',
      ],
    },
    technologies: ['C#', 'ASP.NET Core', 'Microsoft SQL Server', 'REST APIs', 'Git', 'Agile Principles'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'shab-neshin-pizza',
    title: {
      fa: 'سامانه هوشمند سفارش غذا و پیتزاساز شب‌نشین',
      en: 'Shab Neshin Smart Pizza Ordering Platform',
    },
    client: {
      fa: 'مجموعه رستوران‌های شب‌نشین جهرم',
      en: 'Shab Neshin Restaurant Group (Jahrom)',
    },
    category: 'web',
    categoryLabel: {
      fa: 'سامانه وب و سفارش آنلاین',
      en: 'Web Platform & Ordering System',
    },
    shortDesc: {
      fa: 'سامانه تحت وب سفارش آنلاین غذا با ماژول اختصاصی و تعاملی ساخت پیتزا (کامل و نیمه)، پنل ادمین و مدیریت سفارشات بلادرنگ.',
      en: 'A high-traffic web ordering platform featuring an interactive custom pizza builder (whole & half slices) and a robust admin dashboard.',
    },
    fullDesc: {
      fa: 'این سامانه به سفارش مجموعه رستوران‌های شب‌نشین جهرم طراحی و توسعه یافته است. از ویژگی‌های شاخص آن می‌توان به پیتزاساز آنلاین با قابلیت انتخاب نان، پنیر، سس و تاپینگ‌های متنوع به صورت اسلایس یا کامل، محاسبه آنی قیمت، ثبت سفارش و داشبورد مدیریتی پیشرفته برای پرسنل آشپزخانه و صندوق اشاره کرد. بک‌اند با معماری‌های مدرن و لایه‌ای پیاده‌سازی شده که توسعه‌پذیری و پایداری بالایی به سیستم بخشیده است.',
      en: 'Architected and developed for Shab Neshin Restaurants. Key highlights include an intuitive custom pizza builder enabling users to customize bases, sauces, and toppings per half or whole pie with real-time pricing calculation, coupled with a comprehensive real-time admin portal for kitchen and billing operations built atop Modern Layered Architectures.',
    },
    keyFeatures: {
      fa: [
        'ماژول تعاملی پیتزاساز اختصاصی با قابلیت سفارشی‌سازی نیمه به نیمه',
        'محاسبه لحظه‌ای قیمت، مالیات و تخفیف‌ها بر اساس مواد انتخابی',
        'داشبورد جامع مدیریت سفارشات، منو، قیمت‌گذاری و وضعیت ارسال',
        'پیاده‌سازی بک‌اند با معماری مدرن لایه‌ای و الگوی مخزن (Repository Pattern)',
        'واکنش‌گرایی کامل در تمامی دستگاه‌ها و موبایل‌ها',
      ],
      en: [
        'Interactive custom pizza creator with split-topping (half/whole) support',
        'Instant dynamic price, tax, and promotional discount recalculation',
        'Comprehensive admin panel for order tracking, menu catalog, and status workflows',
        'Modern Layered Architecture backend with Repository & Unit of Work patterns',
        'Fully responsive mobile-optimized customer ordering experience',
      ],
    },
    techStack: ['ASP.NET Core', 'C#', 'SQL Server', 'Layered Architecture', 'RESTful APIs', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://pizzasaz.noiatechdevdesk.ir',
    featured: true,
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'nurses-management-slip',
    title: {
      fa: 'سامانه جامع مدیریت موسسه پرستاران و صدور فیش حقوقی',
      en: 'Healthcare & Nurse Management System',
    },
    client: {
      fa: 'موسسه خدمات پرستاری و مراقبت سلامت',
      en: 'Healthcare & Nursing Care Organization',
    },
    category: 'web',
    categoryLabel: {
      fa: 'پورتال سازمانی و اتوماسیون اداری',
      en: 'Enterprise Portal & HR Automation',
    },
    shortDesc: {
      fa: 'سامانه جامع پورتال سازمانی جهت مدیریت پرسنل و پرستاران، مدیریت شیفت‌ها، اسناد اداری و تولید خودکار فیش‌های حقوقی دیجیتال.',
      en: 'Enterprise staff management platform providing digital employee records, shift scheduling, and automated salary slip generation.',
    },
    fullDesc: {
      fa: 'سیستم جامع مدیریت پرسنل پرستاری با هدف ساماندهی به پرونده‌های استخدامی، ساعات کاری، شیفت‌های شیفت‌کاری و محاسبه دقیق کسورات، بیمه و حقوق ناخالص و خالص ایجاد شده است. این سیستم به کارکنان اجازه می‌دهد فیش‌های حقوقی ماهانه خود را مشاهده و چاپ کنند و به مدیران گزارشات دقیق تحلیلی مالی ارائه می‌دهد.',
      en: 'A comprehensive human resource and shift automation platform designed for nursing agencies. It streamlines personnel onboarding, shift logging, automated wage/insurance/tax deductions, and monthly digital payslip generation with printable PDF templates and administrative audit trails.',
    },
    keyFeatures: {
      fa: [
        'محاسبه اتوماتیک حقوق، اضافه کاری، کسورات بیمه و مالیات',
        'تولید و دانلود فیش حقوقی ماهانه با فرمت استاندارد',
        'پنل اختصاصی مدیریت پرسنل، اطلاعات قراردادها و نقش‌های کاربری',
        'سیستم ورود امن مبتنی بر توکن و مجوزهای چندسطحی',
        'گزارش‌گیری تجمیعی جهت ارائه به بخش حسابداری و دارایی',
      ],
      en: [
        'Automated payroll calculation including overtime, insurance, and deductions',
        'One-click digital salary slip generation with printable standard layouts',
        'Employee directory, contract lifecycle management, and role-based access control',
        'Secure multi-tier authentication and granular administrative permissions',
        'Consolidated financial reporting exports for accounting and auditing departments',
      ],
    },
    techStack: ['ASP.NET Core', 'C#', 'Microsoft SQL Server', 'Layered Architecture', 'REST APIs', 'HTML5/CSS3'],
    liveUrl: 'https://digitalmenu.noiatech.ir',
    featured: true,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'desktop-accounting-system',
    title: {
      fa: 'نرم‌افزار حسابداری جامع تحت ویندوز',
      en: 'Custom Windows Desktop Accounting Solution',
    },
    category: 'desktop',
    categoryLabel: {
      fa: 'نرم‌افزار دسکتاپ و سیستم مالی',
      en: 'Desktop Application & Financial System',
    },
    shortDesc: {
      fa: 'نرم‌افزار حسابداری تخصصی و چندلایه ویندوزی برای کسب‌وکارها با قابلیت مدیریت انبار، فاکتورهای خرید و فروش، حساب‌های مشتریان و گزارشات سود و زیان.',
      en: 'Comprehensive multi-layered desktop accounting software tailored for businesses, featuring inventory, invoicing, and balance sheets.',
    },
    fullDesc: {
      fa: 'نرم‌افزاری کاملاً بومی و پایدار تحت سیستم‌عامل ویندوز که با معماری چندلایه و ارتباط مستقیم با دیتابیس Microsoft SQL Server توسعه یافته است. این سامانه شامل مدیریت زنجیره تأمین، صدور پیش‌فاکتور و فاکتور نهایی رسمی، تسویه‌حساب‌های نقدی و چکی، کنترل بدهکاران/بستانکاران و گزارشات تراز آزمایشی است.',
      en: 'A robust, native Windows business accounting application built with layered enterprise architecture and Microsoft SQL Server. It handles comprehensive inventory warehousing, proforma & official invoicing, customer receivables/payables, bank/check tracking, and trial balance accounting statements.',
    },
    keyFeatures: {
      fa: [
        'مدیریت جامع انبار و موجودی کالاها با سیستم هشدار کسری',
        'صدور سریع انواع فاکتور خرید، فروش و مرجوعی با قابلیت اتصال به چاپگر حرارتی',
        'دفتر معین، کل، روزنامه و گزارش سود و زیان دوره‌ای',
        'پشتیبان‌گیری خودکار و بازیابی ایمن بانک اطلاعاتی SQL Server',
        'رابط کاربری سریع با پشتیبانی کامل از کلیدهای میانبر کیبورد',
      ],
      en: [
        'Full warehouse inventory management with minimum stock alert thresholds',
        'Rapid purchase, sales, and return invoicing compatible with thermal receipt printers',
        'General ledger, sub-ledger, balance sheet, and periodic P&L financial reports',
        'Automated database backup & recovery mechanisms for data integrity',
        'High-speed desktop UX optimized for continuous numeric keypad data entry',
      ],
    },
    techStack: ['C#', '.NET Framework', 'Microsoft SQL Server', 'Layered Architecture', 'Crystal Reports / Stored Procedures'],
    featured: true,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'cabinet-ecommerce-platform',
    title: {
      fa: 'سامانه پیشرفته فروشگاهی با انبارداری داینامیک',
      en: 'Dynamic E-Commerce & Inventory Management',
    },
    category: 'web',
    categoryLabel: {
      fa: 'فروشگاه آنلاین و مدیریت کاتالوگ',
      en: 'Online E-Commerce & Catalog System',
    },
    shortDesc: {
      fa: 'وب‌سایت فروشگاهی کامل با سیستم انبارداری بلادرنگ، کاتالوگ محصولات سفارشی (کابینت و دکوراسیون) و معماری مدرن لایه‌ای.',
      en: 'Full-featured e-commerce platform with dynamic inventory, bespoke cabinet catalog configuration, and Modern Layered Architecture.',
    },
    fullDesc: {
      fa: 'پروژه‌ای کامل شامل تحلیل عمیق پایگاه داده برای ساختار ویژگی‌های متغیر محصول (رنگ، جنس، ابعاد)، سبد خرید داینامیک، درگاه پرداخت اینترنتی، پیگیری سفارشات و مدیریت سطوح دسترسی مدیران. زیرساخت بک‌اند به گونه‌ای طراحی شده که با بارهای ترافیکی بالا به راحتی تطبیق پیدا کند.',
      en: 'A scalable e-commerce solution featuring complex database modeling for variable product attributes (materials, dimensions, finishes), dynamic shopping cart, gateway integration, and back-office order tracking backed by Modern Layered Architectures.',
    },
    keyFeatures: {
      fa: [
        'مدل‌سازی دیتابیس پیشرفته برای ویژگی‌های داینامیک محصولات',
        'سبد خرید هوشمند و فرآیند تسویه حساب چندمرحله‌ای',
        'پنل ادمین جهت افزودن نامحدود دسته‌بندی و محصولات با گالری تصویر',
        'ارتباط امن با درگاه‌های پرداخت بانکی',
        'سئو تکنیکال بهینه و بارگذاری سریع صفحات',
      ],
      en: [
        'Advanced relational database model for dynamic EAV product attributes',
        'Smart multi-step checkout workflow with shipping calculator',
        'Rich administration suite for media, taxonomy, and product attributes',
        'Resilient payment gateway integration with idempotent transaction logs',
        'Optimized technical SEO and swift response times',
      ],
    },
    techStack: ['ASP.NET Core', 'C#', 'Microsoft SQL Server', 'Layered Architecture', 'REST APIs', 'Tailwind CSS'],
    featured: false,
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'portfolio-cms-platform',
    title: {
      fa: 'وب‌سایت بین‌المللی نمونه‌کار داینامیک با CMS',
      en: 'Dynamic International Portfolio CMS',
    },
    category: 'web',
    categoryLabel: {
      fa: 'سیستم مدیریت محتوا و پرتال شخصی',
      en: 'Content Management & Personal Portal',
    },
    shortDesc: {
      fa: 'وب‌سایت نمونه‌کار دو زبانه و ماژولار با پنل اختصاصی مدیریت محتوا، مدیریت پروژه‌ها و مهارت‌ها با معماری مدرن لایه‌ای.',
      en: 'Modular bilingual portfolio website equipped with a bespoke headless content management panel built on Modern Layered Architecture.',
    },
    fullDesc: {
      fa: 'یک پلتفرم کامل نمونه‌کار که به مدیر اجازه می‌دهد بدون نیاز به تغییر در کد، پروژه‌ها، مقالات، مهارت‌ها و پیام‌های دریافتی را مدیریت کند. دارای معماری پاک، تفکیک کامل لایه‌ها و سازگاری کامل با دستگاه‌های مختلف.',
      en: 'A high-performance portfolio CMS enabling content updates for projects, publications, skills, and received inquiries without touching codebase, leveraging Modern Layered Architectures.',
    },
    keyFeatures: {
      fa: [
        'پشتیبانی دو زبانه کامل فارسی و انگلیسی با تغییر لحظه‌ای جهت (RTL/LTR)',
        'پنل مدیریتی امن جهت بروزرسانی لحظه‌ای اطلاعات',
        'بهینه‌سازی حداکثری سرعت بارگذاری و سئو',
      ],
      en: [
        'Complete bilingual English/Persian switching with automatic RTL/LTR styling',
        'Secure administration console for dynamic data management',
        'Maximized Core Web Vitals performance and accessibility scores',
      ],
    },
    techStack: ['ASP.NET Core', 'C#', 'SQL Server', 'Layered Architecture', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'msc',
    degree: {
      fa: 'کارشناسی ارشد مهندسی کامپیوتر',
      en: 'M.Sc. in Computer Engineering',
    },
    field: {
      fa: 'گرایش نرم‌افزار',
      en: 'Software Engineering Specialization',
    },
    institution: {
      fa: 'دانشگاه آزاد اسلامی شیراز',
      en: 'Islamic Azad University, Shiraz Branch',
    },
    period: {
      fa: 'مهر ۱۴۰۳ - اکنون',
      en: 'Oct 2024 - Present',
    },
    status: {
      fa: 'در حال تحصیل (دانشجوی ممتاز ارشد)',
      en: 'In Progress (Distinguished Graduate Student)',
    },
    highlights: {
      fa: [
        'پژوهش در زمینه‌های سیستم‌های توزیع‌شده، محاسبات ابری/مه و الگوریتم‌های هوش مصنوعی',
      ],
      en: [
        'Advanced research in Distributed Systems, Fog/Cloud Computing, and AI optimization',
      ],
    },
  },
  {
    id: 'bsc',
    degree: {
      fa: 'کارشناسی مهندسی کامپیوتر',
      en: 'B.Sc. in Computer Engineering',
    },
    field: {
      fa: 'گرایش فناوری اطلاعات (IT)',
      en: 'Information Technology Specialization',
    },
    institution: {
      fa: 'دانشگاه آزاد اسلامی شیراز',
      en: 'Islamic Azad University, Shiraz Branch',
    },
    period: {
      fa: '۱۳۹۸ - ۱۴۰۲',
      en: '2019 - 2023',
    },
    status: {
      fa: 'فارغ‌التحصیل با موفقیت',
      en: 'Graduated Successfully',
    },
    highlights: {
      fa: [
        'تمرکز بر مهندسی نرم‌افزار، طراحی پایگاه‌های داده و شبکه‌های کامپیوتری',
        'گذراندن دوره رسمی ۷ ماهه کارآموزی در شرکت داده‌پردازی با نمره عالی',
      ],
      en: [
        'Focused on Software Engineering, Database Systems, and Network Architectures',
        'Completed 7-month formal enterprise internship with outstanding grade',
      ],
    },
  },
];

export const publications: PublicationItem[] = [
  {
    id: 'iot-fuzzy-rl-paper',
    title: {
      fa: 'بهبود انتقال وظایف با استفاده از منطق فازی نوع ۲ و الگوریتم یادگیری تقویتی با سیاست مجاور برای افزایش عملکرد برنامه‌های اینترنت اشیاء (IoT)',
      en: 'Improving Task Offloading using Interval Type-2 Fuzzy Logic and Adjacent Policy Reinforcement Learning for Enhanced IoT Application Performance',
    },
    journal: {
      fa: 'دوفصلنامه علمی-پژوهشی محاسبات و سامانه‌های توزیع‌شده',
      en: 'Journal of Distributed Computing and Systems',
    },
    date: {
      fa: 'اردیبهشت ۱۴۰۴ (May 2025)',
      en: 'May 2025',
    },
    link: 'https://civilica.com/doc/2196340',
    keywords: {
      fa: ['اینترنت اشیاء (IoT)', 'انتقال وظایف (Task Offloading)', 'منطق فازی نوع ۲', 'یادگیری تقویتی', 'سیاست مجاور', 'محاسبات مه'],
      en: ['Internet of Things (IoT)', 'Task Offloading', 'Type-2 Fuzzy Logic', 'Reinforcement Learning', 'Adjacent Policy', 'Fog Computing'],
    },
    abstract: {
      fa: 'در این مقاله علمی، یک روش نوین انتقال وظایف مبتنی بر ترکیب منطق فازی بازه‌ای نوع ۲ (IT2FL) و یادگیری تقویتی سیاست مجاور برای کاهش تأخیر، بهینه‌سازی مصرف انرژی و ارتقای چشمگیر کارایی برنامه‌های کاربردی حساس به زمان در محیط‌های گسترده اینترنت اشیاء ارائه شده است.',
      en: 'This scientific research proposes a novel task-offloading framework synthesizing Interval Type-2 Fuzzy Logic and Adjacent Policy Reinforcement Learning to minimize latency, optimize energy consumption, and dramatically improve QoS for delay-sensitive IoT applications.',
    },
  },
];

export const certificates: CertificateItem[] = [
  {
    id: 'nsr-license',
    title: {
      fa: 'پروانه اشتغال و مشاوره سازمان نظام صنفی رایانه‌ای کشور (رتبه ۳)',
      en: 'Iranian Computer Guild Organization (NSR) Professional License - Grade 3',
    },
    issuer: {
      fa: 'سازمان نظام صنفی رایانه‌ای کشور (NSR)',
      en: 'Iranian Computer Guild Organization (NSR)',
    },
    type: 'license',
    typeLabel: {
      fa: 'پروانه و صلاحیت رسمی حرفه‌ای',
      en: 'Official Professional License',
    },
    validUntil: {
      fa: 'معتبر تا ۱۴۰۵/۰۶/۰۵',
      en: 'Valid until August 2026',
    },
    badgeText: {
      fa: 'مشاور رتبه ۳ نظام صنفی رایانه‌ای',
      en: 'Certified Consultant Grade 3',
    },
  },
  {
    id: 'cert-dotnet-architecture',
    title: {
      fa: 'دوره جامع توسعه وب‌سرویس و معماری تمیز با ASP.NET Core (Clean Architecture)',
      en: 'Comprehensive ASP.NET Core Backend Development & Clean Architecture',
    },
    issuer: {
      fa: 'مجتمع فنی دیباگران شیراز',
      en: 'Dibaagaran Higher Education Institute, Shiraz',
    },
    type: 'course',
    typeLabel: {
      fa: 'گواهینامه تخصصی بک‌اند',
      en: 'Backend Specialization',
    },
    badgeText: {
      fa: 'گواهی دیباگران شیراز',
      en: 'Dibaagaran Certified',
    },
  },
  {
    id: 'cert-web',
    title: {
      fa: 'طراحی وب ۳ - جاوااسکریپت، جی‌کوئری و ایجکس (JavaScript, jQuery, Ajax)',
      en: 'Web Design III (JavaScript, jQuery, AJAX Advanced)',
    },
    issuer: {
      fa: 'مجتمع فنی دیباگران شیراز',
      en: 'Dibaagaran Higher Education Institute, Shiraz',
    },
    type: 'course',
    typeLabel: {
      fa: 'گواهینامه تخصصی فرانت‌اند',
      en: 'Frontend Specialization',
    },
    badgeText: {
      fa: 'گواهی دیباگران شیراز',
      en: 'Dibaagaran Certified',
    },
  },
  {
    id: 'cert-android',
    title: {
      fa: 'پکیج جامع توسعه نرم‌افزار اندروید (Android Development Pack)',
      en: 'Comprehensive Android App Development Pack',
    },
    issuer: {
      fa: 'مجتمع فنی دیباگران شیراز',
      en: 'Dibaagaran Higher Education Institute, Shiraz',
    },
    type: 'course',
    typeLabel: {
      fa: 'گواهینامه تخصصی موبایل',
      en: 'Mobile Engineering',
    },
    badgeText: {
      fa: 'گواهی دیباگران شیراز',
      en: 'Dibaagaran Certified',
    },
  },
  {
    id: 'cert-photoshop',
    title: {
      fa: 'ادوبی فتوشاپ از مقدماتی تا پیشرفته (Photoshop Basic to Advanced)',
      en: 'Adobe Photoshop Basic to Advanced UI/Visuals',
    },
    issuer: {
      fa: 'مجتمع فنی دیباگران شیراز',
      en: 'Dibaagaran Higher Education Institute, Shiraz',
    },
    type: 'course',
    typeLabel: {
      fa: 'طراحی گرافیک و رابط کاربری',
      en: 'UI & Graphic Design',
    },
    badgeText: {
      fa: 'گواهی دیباگران شیراز',
      en: 'Dibaagaran Certified',
    },
  },
];

export const navItems: NavItem[] = [
  { id: 'hero', href: '#hero', label: { fa: 'خانه', en: 'Home' }, icon: 'Home' },
  { id: 'about', href: '#about', label: { fa: 'درباره من', en: 'About' }, icon: 'User' },
  { id: 'skills', href: '#skills', label: { fa: 'مهارت‌ها', en: 'Skills' }, icon: 'Code' },
  { id: 'experience', href: '#experience', label: { fa: 'سوابق شغلی', en: 'Experience' }, icon: 'Briefcase' },
  { id: 'projects', href: '#projects', label: { fa: 'پروژه‌ها', en: 'Projects' }, icon: 'FolderGit2' },
  { id: 'publications', href: '#publications', label: { fa: 'مقالات و پژوهش', en: 'Research' }, icon: 'BookOpen' },
  { id: 'certificates', href: '#certificates', label: { fa: 'مدارک و مجوزها', en: 'Certificates' }, icon: 'Award' },
  { id: 'contact', href: '#contact', label: { fa: 'تماس', en: 'Contact' }, icon: 'Mail' },
];

export const uiStrings: UIStrings = {
  themeToggle: { fa: 'تغییر پوسته (روشن / تاریک)', en: 'Toggle Theme (Light / Dark)' },
  langToggle: { fa: 'تغییر زبان به انگلیسی', en: 'Switch Language to Persian' },
  downloadCv: { fa: 'دانلود رزومه کامل', en: 'Download Resume (CV)' },
  contactMe: { fa: 'ارتباط مستقیم با من', en: 'Get in Touch' },
  viewProjects: { fa: 'مشاهده پروژه‌ها', en: 'Explore Projects' },
  allCategories: { fa: 'همه پروژه‌ها', en: 'All Projects' },
  webProjects: { fa: 'وب و وب‌سرویس', en: 'Web & APIs' },
  desktopProjects: { fa: 'ویندوز و سیستم‌ها', en: 'Desktop & Systems' },
  viewLive: { fa: 'مشاهده آنلاین پروژه', en: 'View Live Site' },
  projectDetails: { fa: 'مشاهده جزئیات فنی', en: 'Technical Details' },
  close: { fa: 'بستن', en: 'Close' },
  keyFeatures: { fa: 'ویژگی‌ها و دستاوردهای کلیدی', en: 'Key Features & Capabilities' },
  technologiesUsed: { fa: 'تکنولوژی‌ها و ابزارها', en: 'Technologies & Tools' },
  copyEmail: { fa: 'کپی ایمیل', en: 'Copy Email' },
  copyPhone: { fa: 'کپی شماره همراه', en: 'Copy Phone' },
  copied: { fa: 'با موفقیت کپی شد!', en: 'Copied to Clipboard!' },
  sendMessage: { fa: 'ارسال پیام', en: 'Send Message' },
  formSending: { fa: 'در حال ارسال...', en: 'Sending...' },
  formSuccess: { fa: 'پیام شما با موفقیت ارسال شد و در اسرع وقت پاسخ داده خواهد شد.', en: 'Your message has been sent successfully and will be answered promptly.' },
  formName: { fa: 'نام و نام‌خانوادگی', en: 'Your Name' },
  formEmail: { fa: 'آدرس ایمیل شما', en: 'Email Address' },
  formSubject: { fa: 'موضوع پیام یا پروژه', en: 'Subject / Project Inquiries' },
  formMessage: { fa: 'متن پیام یا شرح پروژه...', en: 'Tell me about your project or message...' },
  formRequired: { fa: 'این فیلد الزامی است', en: 'This field is required' },
  backToTop: { fa: 'بازگشت به بالا', en: 'Back to Top' },
  rightsReserved: { fa: 'تمامی حقوق محفوظ است.', en: 'All rights reserved.' },
  designedWith: { fa: 'طراحی و توسعه توسط مصطفی عابدی', en: 'Designed & Developed by Mostafa Abedi' },
  readPublication: { fa: 'مشاهده و مطالعه مقاله در سیویلیکا (Civilica)', en: 'View Article on Civilica' },
  verifiedCredential: { fa: 'دارای پروانه و مجوز معتبر صنفی', en: 'Verified Professional Credential' },
  contactFormTitle: { fa: 'ارتباط با من', en: 'Connect With Me' },
};
