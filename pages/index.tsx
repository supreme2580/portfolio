import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { sanityClient } from "../sanity"
import Word from '../words'
import Exp from "../exp"
import Skl from '../skills'
import Proj from '../projects'

interface Props {
  words: [Word],
  experience: [Exp],
  skills: [Skl],
  projects: [Proj]
}

export default function Home ({ words, experience, skills, projects } : Props) {
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
      <section id='projects'>
        <Projects projects={projects} />
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
  const projectQuery = `
    *[_type == "projects"]{
      _id,
      image,
      title,
      description
    }
  `
  const words = await sanityClient.fetch(wordsQuery)
  const experience = await sanityClient.fetch(experienceQuery)
  const skills = await sanityClient.fetch(skillsQuery)
  const projects = await sanityClient.fetch(projectQuery)
  return {
    props: {
      words,
      experience,
      skills,
      projects
    }
  }
}