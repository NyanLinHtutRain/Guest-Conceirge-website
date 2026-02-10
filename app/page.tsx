import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Stats from '@/components/Stats'
import Storyboard from '@/components/Storyboard'
import Features from '@/components/Features'
import PhysicalExperience from '@/components/PhysicalExperience'
import Comparison from '@/components/Comparison'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

export default function Home() {
  return (
    <>
      <Header />
      <FloatingElements />
      <main className="min-h-screen relative z-10 pt-16 sm:pt-20">
        <Hero />
        <Stats />
        <Storyboard />
        <Features />
        <PhysicalExperience />
        <Comparison />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}
