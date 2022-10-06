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
        <title>Victor Omorogbe Portfolio</title>
        <meta name="description" content="Hi welcome to Victor's portfolio" />
        <link rel="icon" href="/profilepic.jpg" />
      </Head>
      <Header />
      <section id="hero" className='snap-start'>
        <Hero words={wordList} />
      </section>
      <section id="about" className='snap-start'>
        <About />
      </section>
      <section id='experience' className='snap-start'>
        <Experience experience={experience} />
      </section>
      <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      <section id='contact' className='snap-end py-16'>
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
      image,
      percentage
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