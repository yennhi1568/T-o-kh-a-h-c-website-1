import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromptGiftSection } from './components/PromptGiftSection';
import { CurriculumSection } from './components/CurriculumSection';
import { DigitalProductsGrid } from './components/DigitalProductsGrid';
import { PaymentAndDomainSection } from './components/PaymentAndDomainSection';
import { WebsiteExamplesShowcase } from './components/WebsiteExamplesShowcase';
import { TargetAudience } from './components/TargetAudience';
import { MindsetComparison } from './components/MindsetComparison';
import { RegistrationCTA } from './components/RegistrationCTA';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <PromptGiftSection />
        <CurriculumSection />
        <DigitalProductsGrid />
        <PaymentAndDomainSection />
        <WebsiteExamplesShowcase />
        <TargetAudience />
        <MindsetComparison />
        <RegistrationCTA />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
