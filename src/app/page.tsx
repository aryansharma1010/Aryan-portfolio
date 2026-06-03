'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import About from '@/components/About/About';
import Impact from '@/components/Impact/Impact';
import AgraRally from '@/components/FeaturedProject/AgraRally';
import GoldenAces from '@/components/FeaturedProject/GoldenAces';
import WorkGrid from '@/components/WorkGrid/WorkGrid';
import Experience from '@/components/Experience/Experience';
import Toolkit from '@/components/Toolkit/Toolkit';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  useScrollReveal();
  useMagneticButton();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <div className="aurora" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Impact />
        <AgraRally />
        <GoldenAces />
        <WorkGrid />
        <Experience />
        <Toolkit />
        <Contact />
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
