import Hero from '@/components/Hero'
import PinnedProjects from '@/components/PinnedProjects'
import AllRepositories from '@/components/AllRepositories'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import SecurityLayer from '@/components/SecurityLayer'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <ScrollProgress />
      <SecurityLayer />
      <Navigation />
      <BackToTop />
      <Hero />
      <PinnedProjects />
      <AllRepositories />
      <About />
      <Contact />
    </main>
  )
}