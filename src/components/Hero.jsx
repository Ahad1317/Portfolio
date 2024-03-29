import { motion } from 'framer-motion';
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto flex-wrap:wrap'>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 md:mt-4`}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col justify-center items-center mt-5'
        >
          <div className='w-5 h-5 rounded-full bg-[#13dcea]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className={`${styles.heroHeadText} md:mb-4 `}>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-[#13dcea]'
            >
              Hello, This is
            </motion.span>
            &nbsp;Ahad 
          </h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I am a full-stack developer, <br className='sm:block hidden' />Cloud practitioner, competitive coder..
          </motion.p>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='mt-4'
      >
        <ComputersCanvas />
      </motion.div>
     
      <div className='absolute xs:bottom-26 md:b w-full flex justify-center items-center mt-6'>
        <a href='#about'>
          <div className=' w-[25px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center
           items-start p-2'>
              <motion.div
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-1 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;