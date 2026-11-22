import assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';

console.log('Running Deep Verification tests for Code Review Fixes:');

// Test 1: Verify helper text removal under contact form
const contactPath = path.join(process.cwd(), 'src', 'components', 'Contact.tsx');
const contactContent = fs.readFileSync(contactPath, 'utf-8');

assert(
  !contactContent.includes('پیام شما به صورت مستقیم و در پسزمینه به mostafa.abedi554@gmail.com ارسال میشود'),
  'Contact.tsx must NOT contain the helper text below the submit button'
);
assert(
  !contactContent.includes('برنامه‌ای در دستگاه شما باز نخواهد شد') &&
  !contactContent.includes('برنامهای در دستگاه شما باز نخواهد شد'),
  'Contact.tsx must NOT contain external app helper notice'
);
console.log('✓ Requirement 1 (Contact helper text removal) verified successfully.');

// Test 2: Verify Footer layout alignment and ordering
const footerPath = path.join(process.cwd(), 'src', 'components', 'Footer.tsx');
const footerContent = fs.readFileSync(footerPath, 'utf-8');

assert(
  footerContent.includes('sm:flex-row items-center justify-between'),
  'Footer.tsx must place bottom elements in a single horizontal row on sm+ screens'
);
const devIndex = footerContent.indexOf('طراحی و توسعه توسط مصطفی عابدی');
const copyIndex = footerContent.indexOf('© 2026 مصطفی عابدی. تمامی حقوق محفوظ است.');
assert(
  devIndex !== -1 && copyIndex !== -1 && devIndex < copyIndex,
  '"طراحی و توسعه" must appear before copyright in flex order so it sits at the start (RIGHT in RTL)'
);
console.log('✓ Requirement 2 (Footer right alignment and horizontal alignment) verified successfully.');

// Test 3: Verify Contact form payload and fallback messenger links
const routePath = path.join(process.cwd(), 'src', 'app', 'api', 'contact', 'route.ts');
const routeContent = fs.readFileSync(routePath, 'utf-8');

assert(
  routeContent.includes('fullMessage') && routeContent.includes('message: fullMessage'),
  'route.ts must format full contact details into message body'
);
assert(
  footerContent.includes('https://mail.google.com/mail/?view=cm') &&
  footerContent.includes('https://t.me/mstf_abedi') &&
  footerContent.includes('https://wa.me/989177249281'),
  'Footer.tsx must provide 1-click Gmail, Telegram, and WhatsApp direct links'
);
assert(
  !contactContent.includes('کپی متن پیام') &&
  !contactContent.includes('ارسال مستقیم نسخه پیام در پیام‌رسان‌ها'),
  'Contact.tsx success view must NOT contain redundant messenger links or copy draft button'
);
assert(
  contactContent.includes('اطلاعیه راه‌اندازی (مخصوص مدیر پورتفولیو):'),
  'Contact.tsx must clearly designate one-time FormSubmit activation notice as an admin notice'
);
console.log('✓ Requirement 3 (Contact form payload & Footer direct channels) verified successfully.');

// Test 4: Verify Standalone Hero Avatar position without conflicting classes
const heroPath = path.join(process.cwd(), 'src', 'components', 'Hero.tsx');
const heroContent = fs.readFileSync(heroPath, 'utf-8');

assert(
  !heroContent.includes('lg:order-none'),
  'Hero.tsx must NOT contain lg:order-none which clobbers lg:order-1 and lg:order-2 in compiled CSS'
);
assert(
  heroContent.includes("dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'"),
  'Hero.tsx must position Avatar in column 1 (order 1) for RTL and order 2 for LTR'
);
assert(
  heroContent.includes("dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'"),
  'Hero.tsx must position Main Content in order 2 for RTL and order 1 for LTR'
);
assert(
  heroContent.includes('rotate-180'),
  'Hero.tsx must use rotate-180 for reliable RTL arrow flipping'
);
console.log('✓ Requirement 4 (Standalone Avatar right-alignment & no class conflicts) verified successfully.');

console.log('All code review verification assertions passed with 0 errors!');
