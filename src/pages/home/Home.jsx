import Logo from './../../components/logo/Logo'

import video from './../../video/videos.50baa1f7b2d579709a18.mp4'
import Music from '../../components/music_ico/music'
import './home.scss'


import { animate, motion } from 'framer-motion'
const Home = () => {

  

//НАСТРОЙКИ ДЛЯ АНИМАЦИИ 
    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 2,
                staggerChildren: 0.3,
            }
        },
    }
    
    
    const animate = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            
            },
    }
    
// С помощью farmer motion выполняется анимация текста
    return (
        <section className="home" id="Home">
            <Logo />
            <div className="home__bg">
                <div className="title">
                    <motion.div  variants={container} initial='hidden' animate='show' className='title__item'>
                        <motion.div className='title__block'  variants={container} initial='hidden' animate='show' >
                            <motion.h1 variants={animate} className='title__text'>S </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>c </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>r </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>o </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>l </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>l </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>D </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>e </motion.h1>
                            <motion.h1 variants={animate} className='title__text'>v &nbsp;</motion.h1 >
                        </motion.div>
                        <motion.h3 variants={animate} className='description'> Front-End Developer </motion.h3>
                       <Music/>
                    </motion.div>
                </div>
                
                <video src={video} className='video' autoPlay='false' loop  muted control='false'></video>


            </div>


        </section>


    );



}

export default Home