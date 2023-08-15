"use client"

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import Image from 'next/image'

import { project, github } from '../public/page'

import { styles } from '../app/styles';

import Link from 'next/link'
const projects = [
  {
    name: "Travel.s",
    description:
      "Web application that enables users to see Frontend of Travels.",
    image: project,
    source_code_link: "https://rahulcoder2.github.io/Travels/",
  },
];

const Project = () => {
  return(
    <div className='relative z-0'>
      <motion.div variants={textVariant()}
      className='mb-10 relative z-10'>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      
      <div className='relative z-20 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
        {projects.map((project, i) =>(
          <div className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center' key={project.name}>
            <motion.div variants={fadeIn("down", "spring", 0.5, 0.75)} className='relative'
            >
            <Link href={project.source_code_link}>
              <Image 
                src='/project.png'
                width={150}
                height={150}
                alt='project'
                className='w-72 h-60 object-contain'
              />
              <div className='absolute right-[26%] top-1 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <Image
                  src='/github.png'
                  width={150}
                  height={150}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              </Link>
            </motion.div>
            
            <motion.div variants={textVariant()}
            className='space-y-10  md:p-10 max-w-6xl'>
                <h4 className={`${styles.sectionHeadText} text-center font-semibold`}>
                  <span>
                    Case Study {i +1} of {project.length}:
                  </span>{""} {project.name}
                </h4>
                <p className={`${styles.sectionSubText} text-center md:text-left `}>
                  {project.description}
                </p>
            </motion.div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default SectionWrapper( Project );