import { Fade } from "react-reveal"
const AboutText = () => {
    return (
        <Fade right cascade>
            <div className="about__content_text">
                <div className="about__content_title">Scroll Dev</div>
                <p className="about__content_decription">Good day, my name is Umar. I am an experienced FrontEnd developer with experience working with HTML, SCSS, JavaScript, REACT, KALI TERMINAL. I have a passion for creating visually appealing and easy-to-use apps and websites that are both aesthetically pleasing and highly functional. I am very organized, attentive to details and diligent in my work, with a firm commitment to meeting deadlines. I am also an excellent communicator and have a proven ability to collaborate effectively with other developers, designers and other stakeholders. I always try to learn more and keep up to date with the latest trends and technologies.</p>
                <div><a href="#" className='about__resume'>RESUME</a></div>
            </div>
        </Fade>

    )
}


export default AboutText