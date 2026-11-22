import assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { uiStrings, educationList } from '../data/portfolioData.ts';

console.log('Running Deep Verification tests for User 12 Specific Tasks:');

// Task 1: Favicon in layout.tsx & favicon.svg
const layoutContent = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'layout.tsx'), 'utf-8');
const faviconPath = path.join(process.cwd(), 'public', 'favicon.svg');
assert(fs.existsSync(faviconPath), 'public/favicon.svg must exist');
assert(
  !layoutContent.includes("icon: '/avatar.jpg'") && !layoutContent.includes('icon: "/avatar.jpg"'),
  'layout.tsx metadata must not use avatar.jpg as favicon'
);
assert(
  layoutContent.includes('/favicon.svg'),
  'layout.tsx metadata must reference /favicon.svg'
);
console.log('✓ Task 1 (Favicon replaced) passed.');

// Task 2: Hero availability chip removed
const heroContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Hero.tsx'), 'utf-8');
assert(
  !heroContent.includes('فعال و آماده همکاری سازمانی') && !heroContent.includes('Available for High-Impact Roles'),
  'Hero.tsx must not contain the availability status chip under the avatar'
);
console.log('✓ Task 2 (Hero availability badge removed) passed.');

// Task 3: Hero Download CV button removed
assert(
  !heroContent.includes('downloadCv') && !heroContent.includes('دانلود رزومه کامل'),
  'Hero.tsx must not contain Download CV CTA button'
);
console.log('✓ Task 3 (Download CV button removed) passed.');

// Task 4: Hero social icons upgraded hover
assert(
  heroContent.includes('hover:shadow-') || heroContent.includes('hover:scale-110'),
  'Hero.tsx social links must have enhanced hover effects'
);
console.log('✓ Task 4 (Hero social icons hover upgraded) passed.');

// Task 5: Birthday removed from About
const aboutContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'About.tsx'), 'utf-8');
assert(
  !aboutContent.includes('زادروز:') && !aboutContent.includes('Birth Date:'),
  'About.tsx must not display birthday/زادروز'
);
console.log('✓ Task 5 (Birthday removed) passed.');

// Task 6: GPA removed from Education & Hero
assert(
  !aboutContent.includes('GPA:') && !aboutContent.includes('edu.gpa'),
  'About.tsx must not display GPA'
);
assert(
  !heroContent.includes('GPA 18.76'),
  'Hero.tsx must not display GPA'
);
educationList.forEach((edu) => {
  assert(!edu.gpa, `Education item ${edu.id} should not display gpa`);
  assert(!edu.status.fa.includes('معدل'), `Education status for ${edu.id} must not include GPA`);
});
console.log('✓ Task 6 (GPA removed) passed.');

// Task 7: Category filters removed from Skills & Projects
const skillsContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Skills.tsx'), 'utf-8');
assert(
  !skillsContent.includes('activeTab') && !skillsContent.includes('setActiveTab'),
  'Skills.tsx must not contain category filter tabs'
);
const projectsContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Projects.tsx'), 'utf-8');
assert(
  !projectsContent.includes('setFilter') && !projectsContent.includes('filter ==='),
  'Projects.tsx must not contain category filter buttons'
);
console.log('✓ Task 7 (Filters removed from Skills & Projects) passed.');

// Task 8: Contact form title changed
assert.strictEqual(
  uiStrings.contactFormTitle.fa,
  'ارتباط با من',
  'contactFormTitle.fa must be "ارتباط با من"'
);
assert.strictEqual(
  uiStrings.contactFormTitle.en,
  'Connect With Me',
  'contactFormTitle.en must be "Connect With Me"'
);
console.log('✓ Task 8 (Contact form title updated) passed.');

// Task 9: Direct channels moved to Footer
const footerContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Footer.tsx'), 'utf-8');
assert(
  footerContent.includes('contactChannels') &&
  footerContent.includes('whatsapp') &&
  footerContent.includes('telegram') &&
  footerContent.includes('linkedin') &&
  footerContent.includes('instagram') &&
  footerContent.includes('gmail') &&
  footerContent.includes('phone'),
  'Footer.tsx must contain direct channels dock'
);
const contactContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Contact.tsx'), 'utf-8');
assert(
  !contactContent.includes('contactChannels'),
  'Contact.tsx must NOT contain contactChannels dock'
);
console.log('✓ Task 9 (Channels moved to Footer) passed.');

// Task 10: Redundant post-submit direct links removed from Contact
assert(
  !contactContent.includes('https://mail.google.com/mail/?view=cm') &&
  !contactContent.includes('https://t.me/mstf_abedi') &&
  !contactContent.includes('https://wa.me/989177249281'),
  'Contact.tsx must not contain redundant post-submission messenger links'
);
console.log('✓ Task 10 (Redundant post-submit links removed) passed.');

// Task 11: Copy message text button removed from Contact
assert(
  !contactContent.includes('handleCopyMessageDraft') &&
  !contactContent.includes('کپی متن پیام'),
  'Contact.tsx must not contain copy message draft button'
);
console.log('✓ Task 11 (Copy message draft button removed) passed.');

// Task 12: Navbar mobile drawer dark mode fix
const navbarContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Navbar.tsx'), 'utf-8');
assert(
  navbarContent.includes('bg-white dark:bg-[#070b13]'),
  'Navbar mobile drawer must explicitly have bg-white dark:bg-[#070b13]'
);
assert(
  navbarContent.includes('text-slate-800 dark:text-slate-100'),
  'Navbar mobile links must have text-slate-800 dark:text-slate-100'
);
console.log('✓ Task 12 (Mobile drawer dark mode fix) passed.');

console.log('All 12 user tasks verified successfully with 0 errors!');
