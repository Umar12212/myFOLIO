import { Fade } from "react-reveal"
import TypeScript from '../../../icons/typescript(1).svg.png'
const Skills = () => {
    return (
        <>
            <section className="skills">
                <div className="menu_skills">

                    <div className="left_skills">
                        <div className="menu__skills_item">
                            <Fade bottom>
                                <i className="fa-brands fa-html5" style={{ color: '#F58200' }}></i>

                            </Fade>
                            <Fade bottom cascade className="skills__item_title">HTML5</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>
                                <i className="fa-brands fa-css3-alt" style={{ color: '#007AF5' }}></i>

                            </Fade>
                            <Fade bottom cascade className="skills__item_title">CSS3</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>
                                <i className="fa-brands fa-square-js" style={{ color: 'yellow' }}></i>

                            </Fade>
                            <Fade bottom cascade className="skills__item_title" >JavaScript</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>
                                <i className="fa-brands fa-react" style={{ color: 'aqua' }}></i>

                            </Fade>
                            <Fade bottom cascade className="skills__item_title">React js</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>
                                <i className="fa-brands fa-wordpress" style={{ color: '#5F97D0' }}></i>

                            </Fade>
                            <Fade bottom cascade className="skills__item_title">WordPress</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>
                                <i className="fa-solid fa-database" style={{ color: '#8a8c8c' }}></i>

                            </Fade>
                            <Fade bottom cascade className="skills__item_title">MySql</Fade>
                        </div>
                        <div className="border"></div>
                    </div>


                    <div className="right_skilss">
                        <div className="menu__skills_item">
                            <Fade bottom>

                                <i className="fa-brands fa-python" style={{ color: '#FFF' }}></i>
                            </Fade>
                            <Fade right cascade className="skills__item_title">Python</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>

                                <i className="fa-brands fa-php"></i>
                            </Fade>
                            <Fade right cascade className="skills__item_title">PHP</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">

                            <img src={TypeScript} alt="" style={{marginTop: '25px'}}/>


                            <Fade right cascade className="skills__item_title">TypeScript</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>

                                <i className="fa-solid fa-database" style={{ color: '#8a8c8c' }}></i>
                            </Fade>
                            <Fade right cascade className="skills__item_title">SQlite</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item">
                            <Fade bottom>

                                <i className="fab fa-gulp" style={{ color: 'red' }}></i>
                            </Fade>
                            <Fade right cascade className="skills__item_title">Gulp</Fade>
                            <div className="border"></div>
                        </div>
                        <div className="menu__skills_item" >
                            <Fade bottom>

                                <i className="fab fa-bootstrap" ></i>
                            </Fade>
                            <Fade right cascade className="skills__item_title">Bootstrap</Fade>
                            <div className="border"></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Skills