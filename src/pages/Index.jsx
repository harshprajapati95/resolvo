import Hero from '../components/sections/Hero'
import TrustedBy from '../components/sections/TrustedBy'
import ProblemSection from '../components/sections/ProblemSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import HowItWorks from '../components/sections/HowItWorks'
import MetricsSection from '../components/sections/MetricsSection'
import Testimonials from '../components/sections/Testimonials'
import ResolutionDemo from '../components/sections/ResolutionDemo'
import CTABanner from '../components/sections/CTABanner'

export default function Index() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <MetricsSection />
      <ResolutionDemo />
      <Testimonials />
      <CTABanner />
    </>
  )
}
