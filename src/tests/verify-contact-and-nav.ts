import assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { uiStrings } from '../data/portfolioData.ts';

console.log('Running Deep Verification tests for 5 Specific Enhancements:');

// Test 1: Verify Navbar code - Subtitle removal & clean branding
const navbarPath = path.join(process.cwd(), 'src', 'components', 'Navbar.tsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf-8');

// Check full-width header
assert(
  navbarContent.includes('w-full fixed top-0 inset-x-0'),
  'Navbar must be full-width fixed top-0'
);
// Check logo emblem
assert(
  navbarContent.includes('from-emerald-500 via-teal-400 to-cyan-500'),
  'Navbar emblem must feature emerald to cyan gradient'
);
assert(
  navbarContent.includes('MA') && navbarContent.includes('</text>'),
  'Emblem must contain MA monogram'
);
assert(
  navbarContent.includes("direction: 'ltr'"),
  'Emblem SVG must have explicit LTR direction'
);
// Ensure NO subtitle or caption exists under the brand name
assert(
  !navbarContent.includes('توسعهدهنده داتنت و بکاند') &&
  !navbarContent.includes('توسعه‌دهنده دات‌نت') &&
  !navbarContent.includes('.NET & Backend Developer') &&
  !navbarContent.includes('Specialized ASP.NET'),
  'Header brand area must NOT contain any subtitle or caption text under Mostafa Abedi'
);
// Check mobile body scroll lock
assert(
  navbarContent.includes("document.body.style.overflow = 'hidden'"),
  'Navbar must lock body scroll on mobileMenuOpen'
);
console.log('✓ Requirement 1 (Navbar brand cleanliness) passed successfully.');

// Test 2 & 3: Unified Contact Section, Title Change, and Channels Dock in Footer
const contactPath = path.join(process.cwd(), 'src', 'components', 'Contact.tsx');
const contactContent = fs.readFileSync(contactPath, 'utf-8');
const footerPath = path.join(process.cwd(), 'src', 'components', 'Footer.tsx');
const footerContent = fs.readFileSync(footerPath, 'utf-8');

// Verify title change in UIStrings and Contact component (Task 8: "ارتباط با من" / "Connect With Me")
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
assert(
  contactContent.includes('t.contactFormTitle[lang]'),
  'Contact.tsx must use t.contactFormTitle[lang]'
);

// Verify unified direct channels dock moved to Footer (Task 9)
assert(
  footerContent.includes('contactChannels'),
  'Footer.tsx must include contactChannels data structure'
);
assert(
  footerContent.includes('whatsapp') &&
  footerContent.includes('telegram') &&
  footerContent.includes('linkedin') &&
  footerContent.includes('instagram') &&
  footerContent.includes('gmail') &&
  footerContent.includes('phone'),
  'Footer.tsx must integrate WhatsApp, Telegram, LinkedIn, Instagram, Gmail, and SMS/Call'
);
assert(
  contactContent.includes('glass-card') && contactContent.includes('AnimatePresence'),
  'Contact.tsx must provide a sleek form within a glass-card with smooth animation'
);
console.log('✓ Requirements 2 & 3 (Contact Title & Footer Channels Dock) passed successfully.');

// Test 4: Direct In-App Email Dispatch Without Opening External Apps
const routePath = path.join(process.cwd(), 'src', 'app', 'api', 'contact', 'route.ts');
assert(fs.existsSync(routePath), 'App Router API route src/app/api/contact/route.ts must exist');
const routeContent = fs.readFileSync(routePath, 'utf-8');

assert(
  routeContent.includes('https://formsubmit.co/ajax/mostafa.abedi554@gmail.com'),
  'route.ts must dispatch in the background to mostafa.abedi554@gmail.com'
);
assert(
  routeContent.includes('Origin') && routeContent.includes('Referer'),
  'route.ts must pass Origin and Referer headers so FormSubmit does not reject server requests'
);
assert(
  routeContent.includes('_honey'),
  'route.ts must handle honeypot bot filtering'
);

// Verify in-button spinner and in-form success card in Contact.tsx
assert(
  contactContent.includes('Loader2') && contactContent.includes('t.formSending[lang]'),
  'Contact.tsx must display an in-button loading spinner during submission'
);
assert(
  contactContent.includes('t.formSuccess[lang]') && contactContent.includes('handleResetForm'),
  'Contact.tsx must show in-form success view with reset button for further messages'
);
// Confirm NO mailto or external popup redirection on submit
assert(
  !contactContent.includes("window.open(gmailWebUrl"),
  'Contact.tsx must not open external Gmail popup window on submission'
);
assert(
  !contactContent.includes("href={`mailto:"),
  'Contact.tsx form submit must not trigger mailto'
);
console.log('✓ Requirement 4 (Direct In-App Email Dispatch) passed successfully.');

// Test 5: Uniform IRANYekan Typography
const globalsPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
const globalsContent = fs.readFileSync(globalsPath, 'utf-8');
const tailwindPath = path.join(process.cwd(), 'tailwind.config.ts');
const tailwindContent = fs.readFileSync(tailwindPath, 'utf-8');
const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

assert(
  globalsContent.includes("font-family: var(--font-iranyekan);"),
  'globals.css must apply var(--font-iranyekan) to body and rtl elements'
);
assert(
  !globalsContent.includes('kalameh.css'),
  'globals.css should not import unused kalameh.css'
);
assert(
  globalsContent.includes("font-weight: 600;") && globalsContent.includes("font-weight: 800;"),
  'globals.css must define complete font-weight spectrum for IRANYekan'
);
assert(
  tailwindContent.includes("sans: [\"var(--font-iranyekan)\"") &&
  tailwindContent.includes("heading: [\"var(--font-iranyekan)\""),
  'tailwind.config.ts must set IRANYekan as primary font for sans and heading'
);
assert(
  layoutContent.includes('font-iranyekan'),
  'layout.tsx must apply font-iranyekan class to html/body'
);
assert(
  layoutContent.includes('scroll-pt-16 sm:scroll-pt-20'),
  'layout.tsx must contain scroll-pt to prevent fixed header overlap'
);
assert(
  globalsContent.includes('scroll-padding-top: 5rem;'),
  'globals.css must specify scroll-padding-top for smooth anchor jumping'
);
console.log('✓ Requirement 5 (Universal IRANYekan Typography) passed successfully.');

console.log('All 5 enhancement verification assertions completed with 0 errors!');
