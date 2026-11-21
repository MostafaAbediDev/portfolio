import {
  personalInfo,
  skillCategories,
  experiences,
  projects,
  educationList,
  publications,
  certificates,
  navItems,
  uiStrings,
} from '../data/portfolioData.ts';

console.log('Verifying portfolio data:');
console.log(`- Personal: ${personalInfo.name} / ${personalInfo.nameFa}`);
console.log(`- Avatar: ${personalInfo.avatar}`);
console.log(`- Resume URL: ${personalInfo.resumeUrl}`);
console.log(`- Skill Categories: ${skillCategories.length}`);
let totalSkills = 0;
skillCategories.forEach(cat => {
  totalSkills += cat.skills.length;
});
console.log(`- Total Skills: ${totalSkills}`);
console.log(`- Experiences: ${experiences.length}`);
console.log(`- Projects: ${projects.length}`);
console.log(`- Education Items: ${educationList.length}`);
console.log(`- Publications: ${publications.length}`);
console.log(`- Certificates & Licenses: ${certificates.length}`);
console.log(`- Nav Items: ${navItems.length}`);
console.log(`- UI Strings: ${Object.keys(uiStrings).length} keys verified`);

if (personalInfo.email !== 'mostafa.abedi554@gmail.com') {
  throw new Error('Email mismatch');
}
if (!personalInfo.avatar || !personalInfo.resumeUrl) {
  throw new Error('Avatar or resume URL missing from personalInfo');
}
if (projects.length < 5) {
  throw new Error('Expected at least 5 projects');
}
if (publications.length < 1) {
  throw new Error('Expected at least 1 publication');
}
if (experiences.length < 3) {
  throw new Error('Expected at least 3 experience entries');
}
if (educationList.length < 2) {
  throw new Error('Expected 2 education degrees');
}
if (!publications[0].link.includes('civilica.com/doc/2196340')) {
  throw new Error('Publication link mismatch');
}
if (personalInfo.headlines.fa.length < 3 || personalInfo.headlines.en.length < 3) {
  throw new Error('Expected at least 3 dynamic headlines in FA and EN');
}

// Verify Noiatech experience status and period
const noiatechExp = experiences.find((e) => e.id === 'noiatech');
if (!noiatechExp) {
  throw new Error('Noiatech experience not found');
}
if (noiatechExp.isCurrent !== false) {
  throw new Error('Expected noiatech isCurrent to be false');
}
if (!noiatechExp.period.fa.includes('آبان ۱۴۰۵')) {
  throw new Error(`Expected noiatech period.fa to contain "آبان ۱۴۰۵", got "${noiatechExp.period.fa}"`);
}
if (!noiatechExp.period.en.includes('November 2026')) {
  throw new Error(`Expected noiatech period.en to contain "November 2026", got "${noiatechExp.period.en}"`);
}

// Verify required social channels and IDs
const telegramSocial = personalInfo.socials.find((s) => s.platform === 'telegram');
if (!telegramSocial || !telegramSocial.url.includes('mstf_abedi') || telegramSocial.handle !== '@mstf_abedi') {
  throw new Error('Telegram social URL or handle mismatch');
}
const whatsappSocial = personalInfo.socials.find((s) => s.platform === 'whatsapp');
if (!whatsappSocial || !whatsappSocial.url.includes('989177249281') || whatsappSocial.handle !== 'mstf_abedi') {
  throw new Error('WhatsApp social URL or handle mismatch');
}
const instagramSocial = personalInfo.socials.find((s) => s.platform === 'instagram');
if (!instagramSocial || !instagramSocial.url.includes('mostafa.__.abediii') || instagramSocial.handle !== 'mostafa.__.abediii') {
  throw new Error('Instagram social URL or handle mismatch');
}
const linkedinSocial = personalInfo.socials.find((s) => s.platform === 'linkedin');
if (!linkedinSocial || !linkedinSocial.url.includes('mostafaaaa-abediiii') || linkedinSocial.handle !== 'mostafaaaa-abediiii') {
  throw new Error('LinkedIn social URL or handle mismatch');
}
const emailSocial = personalInfo.socials.find((s) => s.platform === 'email');
if (!emailSocial || !emailSocial.url.includes('mostafa.abedi554@gmail.com') || emailSocial.handle !== 'mostafa.abedi554@gmail.com') {
  throw new Error('Email social URL or handle mismatch');
}
const phoneSocial = personalInfo.socials.find((s) => s.platform === 'phone');
if (!phoneSocial || !phoneSocial.url.includes('989177249281') || phoneSocial.handle !== '09177249281') {
  throw new Error('Phone social URL or handle mismatch');
}

// Verify footer strings
if (!uiStrings.designedWith.fa.includes('طراحی و توسعه توسط مصطفی عابدی')) {
  throw new Error('designedWith string mismatch');
}
if (!uiStrings.rightsReserved.fa.includes('تمامی حقوق محفوظ است.')) {
  throw new Error('rightsReserved string mismatch');
}

// Verify bilingual completeness of UI strings
for (const [key, val] of Object.entries(uiStrings)) {
  const strVal = val as { fa?: string; en?: string };
  if (!strVal.fa || !strVal.en) {
    throw new Error(`UI string key "${key}" missing fa or en translation`);
  }
}

// Deep audit: Ensure 0 Python references across all data
import * as fs from 'fs';
import * as path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'portfolioData.ts');
const dataFileContent = fs.readFileSync(dataFilePath, 'utf-8').toLowerCase();

const forbiddenTerms = ['python', 'pandas', 'numpy', 'recommender', 'پایتون', 'توصیه گر', 'توصیه‌گر'];
for (const term of forbiddenTerms) {
  if (dataFileContent.includes(term.toLowerCase())) {
    throw new Error(`Forbidden term found in portfolioData: "${term}"`);
  }
}

// Ensure no ASP.NET versions (e.g., ASP.NET Core 8, 8.0)
const forbiddenVersions = ['asp.net core 8', 'asp.net 8', '.net 8', 'core 8.0'];
for (const v of forbiddenVersions) {
  if (dataFileContent.includes(v)) {
    throw new Error(`Forbidden versioned ASP.NET string found: "${v}"`);
  }
}

// Ensure avatar and resume files actually exist in public directory
const avatarPath = path.join(process.cwd(), 'public', 'avatar.jpg');
const resumePath = path.join(process.cwd(), 'public', 'Mostafa-Abedi-Resume.pdf');
if (!fs.existsSync(avatarPath)) {
  throw new Error(`Avatar file does not exist at ${avatarPath}`);
}
if (!fs.existsSync(resumePath)) {
  throw new Error(`Resume file does not exist at ${resumePath}`);
}

console.log('All portfolioData assertions passed successfully (Zero Python & clean ASP.NET verified)!');
