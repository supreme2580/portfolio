import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { sanityClient } from "../sanity"

interface Props {
  words: [
    word: string
  ]
}

const Home = ({ words } : Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scroll-smooth
      scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
      <Head>
        <title>Victor Omorogbe Portfolio</title>
        <meta name="description" content="Hi welcome to Victor's portfolio" />
        <link rel="icon" href="/profilepic.jpg" />
      </Head>
      <Header />
      <section id="hero" className='snap-start'>
        <Hero words={words} />
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
      <section id='contact' className='snap-end py-16'>
        <Contact />
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const query = `
    *[_type == "words"]{
      word
    }
  `
  const words = await sanityClient.fetch(query)
  return {
    props: {
      words
    }
  }
}

export default Home