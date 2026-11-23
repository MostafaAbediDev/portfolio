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

// Test 2: Verify Footer layout alignment and streamlined content (Enhancement #5)
const footerPath = path.join(process.cwd(), 'src', 'components', 'Footer.tsx');
const footerContent = fs.readFileSync(footerPath, 'utf-8');

assert(
  footerContent.includes('طراحی و توسعه توسط') && footerContent.includes('مصطفی عابدی'),
  'Footer.tsx must contain "طراحی و توسعه توسط مصطفی عابدی"'
);
assert(
  !footerContent.includes('© 2026') && !footerContent.includes('تمامی حقوق محفوظ است'),
  'Footer.tsx must NOT contain copyright notice per enhancement #5'
);
assert(
  !footerContent.includes('contactChannels'),
  'Footer.tsx must NOT contain direct channels dock'
);
console.log('✓ Requirement 2 (Footer streamlined & centered text) verified successfully.');

// Test 3: Verify Contact form payload and direct messenger links
const routePath = path.join(process.cwd(), 'src', 'app', 'api', 'contact', 'route.ts');
const routeContent = fs.readFileSync(routePath, 'utf-8');

assert(
  routeContent.includes('fullMessage') && routeContent.includes('message: fullMessage'),
  'route.ts must format full contact details into message body'
);
assert(
  contactContent.includes('https://mail.google.com/mail/?view=cm') &&
  contactContent.includes('https://t.me/mstf_abedi') &&
  contactContent.includes('https://wa.me/989177249281'),
  'Contact.tsx must provide 1-click Gmail, Telegram, and WhatsApp direct links'
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
console.log('✓ Requirement 3 (Contact form payload & Contact direct channels) verified successfully.');

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
