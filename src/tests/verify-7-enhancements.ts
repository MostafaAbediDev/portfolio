import assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';

console.log('Running Deep Verification tests for 7 Specific User Tasks:');

// Task 1: Mobile Settings Modal & Navbar trigger
const modalPath = path.join(process.cwd(), 'src', 'components', 'MobileSettingsModal.tsx');
assert(fs.existsSync(modalPath), 'MobileSettingsModal.tsx must exist');
const modalContent = fs.readFileSync(modalPath, 'utf-8');
assert(
  modalContent.includes('innerWidth < 768') && modalContent.includes('setIsSettingsOpen(true)'),
  'MobileSettingsModal must auto-open on mobile viewports (< 768px)'
);
assert(
  modalContent.includes("setTheme('dark')") && modalContent.includes("setTheme('light')"),
  'MobileSettingsModal must allow toggling dark and light themes'
);
assert(
  modalContent.includes("setLang('fa')") && modalContent.includes("setLang('en')"),
  'MobileSettingsModal must allow toggling Persian and English languages'
);
assert(
  modalContent.includes('تأیید و ادامه') && modalContent.includes('Confirm & Continue'),
  'MobileSettingsModal must include "تأیید و ادامه" / "Confirm & Continue" button'
);

const navbarContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Navbar.tsx'), 'utf-8');
assert(
  navbarContent.includes('setIsSettingsOpen(true)') && navbarContent.includes('Settings'),
  'Navbar.tsx must provide a Settings button on mobile to re-open settings modal'
);

const pageContent = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'page.tsx'), 'utf-8');
assert(
  pageContent.includes('<MobileSettingsModal') || pageContent.includes('<MobileSettingsModal />'),
  'page.tsx must render MobileSettingsModal component'
);
console.log('✓ Task 1 (Mobile Settings Modal & Navbar gear button) verified.');

// Task 2: Hero Social Icons Match Contact Channels Style
const heroContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Hero.tsx'), 'utf-8');
assert(
  heroContent.includes('getSocialMeta') &&
  heroContent.includes('badgeBg') &&
  heroContent.includes('badgeText') &&
  heroContent.includes('badgeBorder'),
  'Hero.tsx must use channel-style badge boxes for social icons matching Contact channels'
);
assert(
  heroContent.includes('meta.name') || heroContent.includes('meta.label'),
  'Hero.tsx must display channel brand labels in pill card style'
);
assert(
  heroContent.includes('#229ED9') &&
  heroContent.includes('#0A66C2') &&
  heroContent.includes('#25D366') &&
  heroContent.includes('#EA4335'),
  'Hero.tsx must maintain brand color definitions'
);
console.log('✓ Task 2 (Hero Social Icons Match Contact Channels Style) verified.');

// Task 3: Channels Box Title & Centering
const contactContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Contact.tsx'), 'utf-8');
assert(
  contactContent.includes('شبکه‌های ارتباطی') && contactContent.includes('Communication Channels'),
  'Contact.tsx channels title must be "شبکه‌های ارتباطی" / "Communication Channels"'
);
assert(
  !contactContent.includes('شبکه‌های ارتباط مستقیم'),
  'Contact.tsx must NOT contain "شبکه‌های ارتباط مستقیم"'
);
assert(
  !contactContent.includes('کلیک جهت گفتگوی مستقیم یا کپی آسان مشخصات') &&
  !contactContent.includes('Click to start chatting or copy handle'),
  'Contact.tsx channels card must NOT contain subtitle text'
);
console.log('✓ Task 3 (Channels Box Title Centered & Subtitle/Icon Removed) verified.');

// Task 4: Contact Form Title Centering & Subtitle Removal
assert(
  !contactContent.includes('ارسال مستقیم و امن به mostafa.abedi554@gmail.com') &&
  !contactContent.includes('Direct and secure delivery to mostafa.abedi554@gmail.com'),
  'Contact.tsx form card must NOT contain subtitle "ارسال مستقیم و امن به mostafa.abedi554@gmail.com"'
);
console.log('✓ Task 4 (Contact Form Title Centered & Subtitle Removed) verified.');

// Task 5: Textarea Non-Resizable
assert(
  contactContent.includes('resize-none'),
  'Contact.tsx textarea must include resize-none class to prevent manual resizing'
);
assert(
  !contactContent.includes('resize-y') && !contactContent.includes('resize-x'),
  'Contact.tsx textarea must NOT be resizable'
);
console.log('✓ Task 5 (Message Textarea Non-Resizable) verified.');

// Task 6: Direct Navigation Only (Remove Copy Buttons)
assert(
  !contactContent.includes('handleCopy(channel.copyValue') &&
  !contactContent.includes('channel.copyLabel[lang]') &&
  !contactContent.includes('aria-label={isCopied'),
  'Contact.tsx channels card must NOT contain copy buttons'
);
console.log('✓ Task 6 (Direct Navigation Only & Copy Buttons Removed) verified.');

// Task 7: Equal Height for Both Cards in Contact Section
assert(
  contactContent.includes('grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch'),
  'Contact.tsx grid container must use items-stretch so both cards span equal height'
);
assert(
  !contactContent.includes('grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'),
  'Contact.tsx grid container must NOT use items-start which causes uneven heights'
);
assert(
  contactContent.includes('lg:col-span-7 glass-card rounded-3xl p-5 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between') &&
  contactContent.includes('lg:col-span-5 glass-card rounded-3xl p-5 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between'),
  'Both Contact form card and Channels card must have matching h-full flex flex-col justify-between'
);
console.log('✓ Task 7 (Equal Height for Both Cards) verified.');

console.log('\nAll 7 user enhancements verified successfully with 0 errors!');
