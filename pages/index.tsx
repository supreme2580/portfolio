import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white min-h-screen snap-y snap-mandatory z-0 overflow-hidden'>
      <Head>
        <title>Victor Omorogbe Portfolio</title>
        <meta name="description" content="Hi welcome to Victor's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
