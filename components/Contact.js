"use client"

import { useForm } from 'react-hook-form'
import { styles } from '../app/styles';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../utils/motion'


const Contact = () => {
  
  const {
    register,
    handleSubmit,
  } = useForm()
  
  const onSubmit = (formData) => {
    window.location.href = `mailto: rahulchau2@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };
  
    return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
      
        <div className='text-center'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              {...register("name")}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              {...register("email")}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Subject</span>
            <input
              type='text'
              {...register("subject")}
              placeholder="What's your Quary?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              {...register("message")}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='m-auto bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Send
          </button>
        </form>
      </motion.div>

    </div>
  );
}

export default SectionWrapper(Contact);

