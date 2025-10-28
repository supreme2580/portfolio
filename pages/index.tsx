import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import { sanityClient } from "../sanity"
import Word from '../words'
import Exp from "../exp"
import Skl from '../skills'

interface Props {
  words: [Word],
  experience: [Exp],
  skills: [Skl]
}

export default function Home ({ words, experience, skills }: Props) {
  var wordList: string[] = []
  words.map(word => wordList.push(word.word))
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scroll-smooth
      scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
      <Head>
        <meta name="google-site-verification" content="IIp4cMksU3RU-nqV1vHYLXdlG7dmIjNxEG0HJNixmfA" />
      </Head>
      <Header />
      <section id="hero">
        <Hero words={wordList} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id='experience'>
        <Experience experience={experience} />
      </section>
      <section id='skills'>
        <Skills skills={skills} />
      </section>
      <section id='contact' className='pb-8'>
        <Contact />
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const wordsQuery = `
    *[_type == "words"]{
      word
    }
  `
  const experienceQuery = `
    *[_type == "experience"]{
      _id,
      image,
      title,
      name,
      techStack,
      startDate,
      endDate
    }
  `
  const skillsQuery = `
    *[_type == "skills"]{
      _id,
      image
    }
  `
  const words = await sanityClient.fetch(wordsQuery)
  const experience = await sanityClient.fetch(experienceQuery)
  const skills = await sanityClient.fetch(skillsQuery)
  
  // Sort experience by start date (most recent first)
  const sortedExperience = experience.sort((a: Exp, b: Exp) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  })
  
  return {
    props: {
      words,
      experience: sortedExperience,
      skills
    }
  }
}