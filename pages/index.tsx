import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scroll-smooth'>
      <Head>
        <title>Victor Omorogbe Portfolio</title>
        <meta name="description" content="Hi welcome to Victor's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      <section id="about" className='snap-start'>
        <About />
      </section>
      <section id='experience' className='snap-start'>
        <Experience />
      </section>
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>
  )
}

export default Home
