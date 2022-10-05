import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'

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
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
