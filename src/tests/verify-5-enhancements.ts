import assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';

console.log('Running Deep Verification tests for 5 Specific Enhancements:');

// 1. Mobile Menu Drawer
const navbarPath = path.join(process.cwd(), 'src', 'components', 'Navbar.tsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf-8');

assert(
  !navbarContent.includes('تنظیمات زبان و پوسته') &&
  !navbarContent.includes('Language & Display Mode'),
  'Navbar mobile menu drawer must NOT contain language & theme settings text'
);
assert(
  !navbarContent.includes('aria-label="Toggle theme in mobile menu"'),
  'Navbar mobile menu drawer must NOT contain theme toggle button'
);
console.log('✓ 1. Mobile Menu Drawer footer completely removed.');

// 2. Hero Social Icons Brand Hovers
const heroPath = path.join(process.cwd(), 'src', 'components', 'Hero.tsx');
const heroContent = fs.readFileSync(heroPath, 'utf-8');

assert(
  heroContent.includes('getSocialBrandHoverClasses'),
  'Hero.tsx must implement getSocialBrandHoverClasses function'
);
assert(
  heroContent.includes('#229ED9') &&
  heroContent.includes('#0A66C2') &&
  heroContent.includes('#25D366') &&
  heroContent.includes('#EA4335'),
  'Hero.tsx must define brand colors for Telegram (#229ED9), LinkedIn (#0A66C2), WhatsApp (#25D366), and Gmail (#EA4335)'
);
assert(
  heroContent.includes('hover:bg-gradient-to-tr') &&
  heroContent.includes('hover:via-rose-500'),
  'Hero.tsx must define Instagram rose/gradient hover styling'
);
console.log('✓ 2. Hero social icons brand hovers verified.');

// 3. Contact Header Tag Removal
const contactPath = path.join(process.cwd(), 'src', 'components', 'Contact.tsx');
const contactContent = fs.readFileSync(contactPath, 'utf-8');

assert(
  !contactContent.includes('ارسال بدون خروج از سایت') &&
  !contactContent.includes('Direct In-App Delivery'),
  'Contact.tsx must NOT contain the badge "ارسال بدون خروج از سایت"'
);
console.log('✓ 3. Contact header badge removed successfully.');

// 4. Side-by-side Contact Form and Direct Channels
const footerPath = path.join(process.cwd(), 'src', 'components', 'Footer.tsx');
const footerContent = fs.readFileSync(footerPath, 'utf-8');

assert(
  !footerContent.includes('contactChannels'),
  'Footer.tsx must NOT contain direct channels dock'
);
assert(
  contactContent.includes('lg:col-span-7') &&
  contactContent.includes('lg:col-span-5'),
  'Contact.tsx must define a responsive side-by-side grid layout (7 cols form + 5 cols channels)'
);
assert(
  contactContent.includes('contactChannels') &&
  contactContent.includes('whatsapp') &&
  contactContent.includes('telegram') &&
  contactContent.includes('linkedin') &&
  contactContent.includes('instagram') &&
  contactContent.includes('gmail') &&
  contactContent.includes('phone'),
  'Contact.tsx channels card must include WhatsApp, Telegram, LinkedIn, Instagram, Gmail, and Phone'
);
console.log('✓ 4. Side-by-side direct channels beside contact form verified.');

// 5. Footer Streamlining
assert(
  footerContent.includes('طراحی و توسعه توسط') &&
  footerContent.includes('مصطفی عابدی'),
  'Footer.tsx must feature "طراحی و توسعه توسط مصطفی عابدی" in center'
);
assert(
  !footerContent.includes('© 2026') &&
  !footerContent.includes('تمامی حقوق محفوظ است') &&
  !footerContent.includes('All rights reserved'),
  'Footer.tsx must NOT contain copyright text'
);
assert(
  footerContent.includes('ArrowUp'),
  'Footer.tsx must retain the back-to-top button'
);
console.log('✓ 5. Footer streamlined with only back-to-top and center developer branding verified.');

console.log('\nAll 5 enhancements verified successfully with 0 errors!');
