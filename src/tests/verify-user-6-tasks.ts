import assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { personalInfo, skillCategories, experiences, projects } from '../data/portfolioData.ts';

console.log('Running Deep Verification tests for User 6 Specific Tasks:');

// 1. Mobile Header Settings Button removed
const navbarContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Navbar.tsx'), 'utf-8');
assert(
  !navbarContent.includes('setIsSettingsOpen(true)') && !navbarContent.includes('<Settings'),
  'Task 1 Failed: Navbar.tsx must NOT contain the Settings button on mobile header'
);
console.log('✓ Task 1: Mobile Header Settings Button completely removed.');

// 2. Hero Top Badge removed
const heroContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Hero.tsx'), 'utf-8');
assert(
  !heroContent.includes('personalInfo.title[lang]') && !heroContent.includes('<Sparkles'),
  'Task 2 Failed: Hero.tsx must NOT render top badge with personalInfo.title'
);
console.log('✓ Task 2: Hero Top Badge (personalInfo.title) removed.');

// 3. Rotating Headline removed
assert(
  !personalInfo.headlines.fa.some((h) => h.includes('پیازی') || h.includes('Onion')),
  'Task 3 Failed: FA headlines must NOT include Onion/پیازی architecture'
);
assert(
  !personalInfo.headlines.en.some((h) => h.toLowerCase().includes('onion')),
  'Task 3 Failed: EN headlines must NOT include Onion architecture'
);
assert.strictEqual(personalInfo.headlines.fa.length, 3, 'Headlines FA should have exactly 3 items');
assert.strictEqual(personalInfo.headlines.en.length, 3, 'Headlines EN should have exactly 3 items');
console.log('✓ Task 3: Onion Architecture headline removed successfully from FA and EN.');

// 4. Work Experience 2 Years
const expStat = personalInfo.stats.find((s) => s.id === 'exp');
assert(expStat, 'Task 4 Failed: exp stat must exist');
assert.strictEqual(expStat.value, '+2', 'Task 4 Failed: exp stat value must be "+2"');
assert(expStat.label.fa.includes('۲+ سال'), 'Task 4 Failed: exp stat label.fa must include "۲+ سال"');
assert(expStat.label.en.includes('2+ Years'), 'Task 4 Failed: exp stat label.en must include "2+ Years"');
assert(personalInfo.bio.fa.includes('۲ سال') && !personalInfo.bio.fa.includes('۱ سال'), 'Task 4 Failed: bio.fa must state 2 years');
assert(personalInfo.bio.en.includes('2 years'), 'Task 4 Failed: bio.en must state 2 years');
console.log('✓ Task 4: Work Experience updated to 2 years everywhere (stats, bio FA & EN).');

// 5. Remove 100% Mastery Tag
assert(!personalInfo.stats.some((s) => s.value === '100%' || s.id === 'db'), 'Task 5 Failed: 100% stat item must be removed from stats');
const skillsContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'Skills.tsx'), 'utf-8');
assert(
  !skillsContent.includes('تسلط ۱۰۰٪') && !skillsContent.includes('Mastery 100%'),
  'Task 5 Failed: Skills.tsx must NOT contain "تسلط ۱۰۰٪" or "Mastery 100%" badge'
);
// Verify no skill level exceeds 95%
for (const cat of skillCategories) {
  for (const s of cat.skills) {
    assert(s.level <= 95, `Skill ${s.name} level ${s.level} should not exceed 95%`);
  }
}
console.log('✓ Task 5: 100% Mastery tag completely removed from stats and skills.');

// 6. Refine Architecture Text & Zero "پیازی" / "Onion"
assert(
  skillsContent.includes('تخصص متمرکز در پلتفرم دات‌نت (.NET)، معماری‌های مدرن نرم‌افزار، تحلیل پایگاه داده و طراحی سیستم‌های مقیاس‌پذیر سازمانی'),
  'Task 6 Failed: Skills.tsx FA refined subtitle mismatch'
);
assert(
  skillsContent.includes('Focused expertise in .NET platform, modern software architectures, relational database engineering, and scalable enterprise systems.'),
  'Task 6 Failed: Skills.tsx EN refined subtitle mismatch'
);

const allSrcFiles = [
  'src/data/portfolioData.ts',
  'src/components/Skills.tsx',
  'src/components/Hero.tsx',
  'src/components/Navbar.tsx',
  'src/components/About.tsx',
  'src/app/layout.tsx',
];

for (const relFile of allSrcFiles) {
  const content = fs.readFileSync(path.join(process.cwd(), relFile), 'utf-8');
  assert(!content.includes('پیازی'), `File ${relFile} must NOT contain "پیازی"`);
  assert(!content.toLowerCase().includes('onion'), `File ${relFile} must NOT contain "onion"`);
}
console.log('✓ Task 6: Refined architecture text & zero "پیازی" / "Onion" verified across all source files.');

console.log('\nAll 6 user tasks verified successfully with 0 errors!');
