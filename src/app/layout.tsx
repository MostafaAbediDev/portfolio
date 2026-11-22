import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'مصطفی عابدی | برنامه‌نویس BackEnd و فول‌استک (.NET) | Mostafa Abedi',
  description:
    'وب‌سایت شخصی و پورتفولیو مهندسی مصطفی عابدی - متخصص توسعه نرم‌افزار با ASP.NET Core، معماری پیازی (Onion Architecture)، پایگاه داده و سیستم‌های یکپارچه وب و ویندوز.',
  keywords: [
    'Mostafa Abedi',
    'مصطفی عابدی',
    'برنامه‌نویس BackEnd',
    'ASP.NET Core',
    'C#',
    'Onion Architecture',
    'Clean Architecture',
    'SQL Server',
    'Portfolio',
    'توسعه دهنده وب شیراز',
  ],
  authors: [{ name: 'Mostafa Abedi', url: 'https://linkedin.com/in/mostafaaaa-abediiii' }],
  creator: 'Mostafa Abedi',
  openGraph: {
    title: 'Mostafa Abedi | Backend & Full-Stack Developer',
    description:
      'Backend & Full-Stack .NET Developer portfolio featuring enterprise web platforms, custom desktop accounting systems, and IoT fuzzy research.',
    locale: 'fa_IR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark scroll-smooth scroll-pt-16 sm:scroll-pt-20 font-iranyekan" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 font-iranyekan antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-300 overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}
