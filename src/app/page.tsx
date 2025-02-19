import BackgroundLayout from '@/components/BackgroundLayout'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Curriculum from '@/components/Curriculum'
import Instructors from '@/components/Instructors'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Comparison from '@/components/Comparison'
import FAQ from '@/components/FAQ'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <BackgroundLayout>
      <Navbar />
      <Hero />
      <Features />
      <Curriculum />
      <Instructors />
      <Pricing />
      <Testimonials />
      <Comparison />
      <FAQ />
      <Analytics />
    </BackgroundLayout>
  );
}
