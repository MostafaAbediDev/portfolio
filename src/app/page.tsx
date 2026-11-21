'use client';

import React from 'react';
import { PortfolioProvider } from '../context/PortfolioContext';
import { BackgroundEffects } from '../components/BackgroundEffects';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Publications } from '../components/Publications';
import { Certificates } from '../components/Certificates';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ProjectModal } from '../components/ProjectModal';

export default function HomePage() {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
        {/* Ambient Glows and Grid */}
        <BackgroundEffects />

        {/* Header / Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Me & Education */}
          <About />

          {/* 3. Skills & Proficiencies */}
          <Skills />

          {/* 4. Experience & Career Timeline */}
          <Experience />

          {/* 5. Production Projects & Web/Desktop Solutions */}
          <Projects />

          {/* 6. Scientific Publications & Research */}
          <Publications />

          {/* 7. Certificates & Professional Licenses */}
          <Certificates />

          {/* 8. Contact & Collaboration Form */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Project Details Modal */}
        <ProjectModal />
      </div>
    </PortfolioProvider>
  );
}
