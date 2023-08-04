"use client"

import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import Image from 'next/image'

import { styles } from '../app/styles';

const projects = [1, 2, 3]

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
          <div className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  '>
            <motion.div variants={fadeIn("down", "spring", 0.5, 0.75)}>
              <Image 
                src='/avatar.png'
                width={150}
                height={150}
                className='w-72 h-60 object-contain'
              />
            </motion.div>
            
            <motion.div variants={textVariant()}
            className='space-y-10  md:p-10 max-w-6xl'>
                <h4 className={`${styles.sectionHeadText} text-center font-semibold`}>
                  <span>
                    Case Study {i +1} of {project.length}:
                  </span>{""} Rahul
                </h4>
                <p className={`${styles.sectionSubText} text-center md:text-left `}>
                  Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.
                </p>
            </motion.div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default SectionWrapper( Project );