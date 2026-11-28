import assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { certificates } from '../data/portfolioData.ts';

console.log('Running Deep Verification tests for User 6 New Tasks:');

// Task 1: Header Navigation Smoothness & Bug Fix
const navbarContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Navbar.tsx'), 'utf-8');
const contextContent = fs.readFileSync(path.join(process.cwd(), 'src', 'context', 'PortfolioContext.tsx'), 'utf-8');

assert(
  contextContent.includes('suppressSpyUntilRef') &&
  contextContent.includes('requestAnimationFrame') &&
  contextContent.includes('window.cancelAnimationFrame'),
  'Task 1 Failed: PortfolioContext.tsx must throttle scroll-spy with requestAnimationFrame and provide click suppression'
);

assert(
  navbarContent.includes('requestAnimationFrame') &&
  navbarContent.includes('handleNavClick') &&
  navbarContent.includes("handleNavClick('hero')"),
  'Task 1 Failed: Navbar.tsx must throttle scroll listener and use handleNavClick for smooth instant active state'
);
console.log('✓ Task 1: Header Navigation Smoothness & Throttled Scroll-Spy verified.');

// Task 2: Footer "Back to Top" Alignment
const footerContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Footer.tsx'), 'utf-8');

assert(
  footerContent.includes('items-center sm:items-start') &&
  footerContent.includes('self-center sm:self-start'),
  'Task 2 Failed: Footer.tsx must center back-to-top on mobile and align to inline-start on desktop (RTL right, LTR left)'
);

assert(
  footerContent.includes('w-full flex justify-center items-center'),
  'Task 2 Failed: Footer.tsx bottom developer credit must remain centered across all viewports'
);
console.log('✓ Task 2: Footer "Back to Top" responsive alignment verified.');

// Task 3: Hero Heading Font Size Reduction
const heroContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Hero.tsx'), 'utf-8');

assert(
  !heroContent.includes('md:text-6xl'),
  'Task 3 Failed: Hero.tsx must not contain oversized md:text-6xl heading'
);

assert(
  heroContent.includes('text-2xl sm:text-3xl md:text-4xl'),
  'Task 3 Failed: Hero.tsx must use reduced heading font sizes (text-2xl sm:text-3xl md:text-4xl)'
);
console.log('✓ Task 3: Hero Heading Font Size Reduction verified.');

// Task 4: Certificates Subtitle Removal
const certContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Certificates.tsx'), 'utf-8');

assert(
  !certContent.includes('پروانه نظام صنفی رایانه‌ای کشور و گواهینامه‌های تخصصی توسعه نرم‌افزار') &&
  !certContent.includes('Iranian Computer Guild Organization license and technical education certificates'),
  'Task 4 Failed: Certificates.tsx must NOT contain the subtitle text'
);
console.log('✓ Task 4: Certificates Subtitle Removal verified.');

// Task 5: Remove "گواهی دیباگران شیراز" Tag from Certificates
const portfolioDataContent = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'portfolioData.ts'), 'utf-8');

assert(
  !portfolioDataContent.includes('badgeText:\n      fa: \'گواهی دیباگران شیراز\'') &&
  !portfolioDataContent.includes('Dibaagaran Certified'),
  'Task 5 Failed: portfolioData.ts must NOT contain "گواهی دیباگران شیراز" or "Dibaagaran Certified" badgeText'
);

assert(
  certContent.includes('cert.badgeText && cert.badgeText[lang]'),
  'Task 5 Failed: Certificates.tsx must conditionally render badgeText only when defined'
);

// Verify NSR license retains its official badge while course cards have no badge
const nsrCert = certificates.find((c) => c.id === 'nsr-license');
assert(nsrCert?.badgeText?.fa.includes('مشاور رتبه ۳'), 'NSR license must retain consultant rank badge');

const courseCerts = certificates.filter((c) => c.type === 'course');
for (const course of courseCerts) {
  assert(!course.badgeText, `Course certificate "${course.id}" must NOT have a badgeText tag`);
}
console.log('✓ Task 5: Removal of "گواهی دیباگران شیراز" Tag verified.');

// Task 6: Remove "تکنولوژی‌های مورد استفاده" from Experience
const expContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Experience.tsx'), 'utf-8');

assert(
  !expContent.includes('تکنولوژی‌های مورد استفاده:') &&
  !expContent.includes('Tech Stack:'),
  'Task 6 Failed: Experience.tsx must NOT contain "تکنولوژی‌های مورد استفاده:" or "Tech Stack:" block'
);
console.log('✓ Task 6: Removal of "تکنولوژی‌های مورد استفاده" from Experience verified.');

console.log('\nAll 6 new user tasks verified successfully with 0 errors!');
