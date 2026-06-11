import { Button } from '@/components/ui/button'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import AboutSection from './components/AboutSection'

import Services from './components/Services'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ContactSection from './components/contact'



const page = () => {
  return (
    <div >
      <Navbar/>
   <HeroSection/>
   <ProjectSection/>
  <Services/>
   <AboutSection/>
   <ContactSection/>
   <Footer/>
    </div>
  )
}

export default page
