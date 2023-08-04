
import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <div className='relative'>
        <div
        className='z-0 absolute h-[500px] top-[20%] bg-black-100 w-full -skew-y-12 left-0'
        />
        <Projects />
      </div>
      <Contact />
    </>
  )
}
