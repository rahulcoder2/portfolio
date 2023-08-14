"use client"

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../app/styles';
import SectionWrapper from '../hoc/SectionWrapper'
import Image from 'next/image'

import {
  html,
  css,
  figma,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  git,
  nextjs
} from '../public/page'

const skill = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
];


const Skills = () =>{
  return(
    <>
      <motion.div variants={textVariant()}
      className='mb-10 text-center'>
        <p className={styles.sectionSubText}>TECHNICAL AND PROFESSIONAL</p>
        <h2 className={styles.sectionHeadText}>MY SKILLS.</h2>
      </motion.div>
      
      <motion.div
        variants={fadeIn("", "spring", 0.5, 0.75)}
        className='flex flex-wrap items-center gap-5 justify-center'>
          {skill.map((skill) => (
          <div className='w-28 h-28' key={skill.name}>
            <Image
              src={skill.icon}
              width={250}
              height={250}
              alt='icon'
              className='rounded-full object-contain bg-white'
            />
          </div>
        ))}
      </motion.div>
    </>
  )
}
export default SectionWrapper( Skills );