import './about.scss' //компоненты
import aboutVideo from './../../video/about.mp4'
import AboutText from '../../components/section/about-text/aboutText';
import Skills from '../../components/section/about-text/aboutSkills';
import Footer from '../../components/section/footer/footer';
import { Fade } from "react-reveal"; // с fade выполняется плавная анимация в время скролла
import { Suspense } from 'react'; // Благодаря suspense выводится preloader (Loading...) когда контент еще не загрузился 


const About = () => {
    return (
        <>

          
         
            <section className='about'  >


                <div className="about__title">
                <Fade top cascade >
                    <div className="about_title_text">About</div>
                    {/* <div className="about_title_text"  data-scroll data-scroll-delay='0.8' data-scroll-speed='4'>b</div>
                    <div className="about_title_text"  data-scroll data-scroll-delay='0.6' data-scroll-speed='4'>o</div>
                    <div className="about_title_text"  data-scroll data-scroll-delay='0.4' data-scroll-speed='4'>u</div>
                    <div className="about_title_text"  data-scroll data-scroll-delay='0.2' data-scroll-speed='4'>t</div> */}
                </Fade>
                </div>
                <div className="about__content">
                    <Fade left cascade>  
                        <Suspense fallback={alert=`Loading...`}><video src={aboutVideo} autoPlay='false' loop className='about_video' muted control='false'></video></Suspense>
                        
                    </Fade>
                    <AboutText />
                </div>
            </section>
            <div className="skills">
                <div className="skills__title">
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.30' data-scroll-speed='4'>S</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.25' data-scroll-speed='4'>k</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.20' data-scroll-speed='4'>i</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.15' data-scroll-speed='4'>l</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.10' data-scroll-speed='4'>l</h1>
                    <h1 className="skills__title" data-scroll data-scroll-delay='0.5' data-scroll-speed='4'>s</h1>
                </div>

                <Skills />
                <Footer />
            </div>

        </>

    );
}

export default About;