import Navbar           from '@/components/Navbar'
import HeroSection      from '@/components/HeroSection'
import StatsBar         from '@/components/StatsBar'
import PartnersSection  from '@/components/PartnersSection'
import FeaturesSection  from '@/components/FeaturesSection'
import ProgramsSection  from '@/components/ProgramsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LeadForm         from '@/components/LeadForm'
import Footer           from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <PartnersSection />
      <FeaturesSection />
      <ProgramsSection />
      <TestimonialsSection />
      <LeadForm />
      <Footer />
    </>
  )
}
