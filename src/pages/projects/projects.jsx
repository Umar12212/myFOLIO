import './projects.scss'

import { projects } from '../../helpers/projectsList'
import Footer from '../../components/section/footer/footer'
import { Fade } from 'react-reveal'
import { lazy, Suspense } from 'react'

const Project = lazy(() => import('../../components/section/project/project'))
// Fade animate
const Projects = () => {

    return (

        <>

            <section className="projects" >
                <div className="project__text">
                    <Fade top cascade >
                        <div className="projects__title">Projects</div>
                    </Fade>



                </div>
                <ul className="projects__menu">
                    <Suspense fallback={<p>Loading...</p>}>
                        {projects.map((project, index) => {
                            return (

                                <Project
                                    key={index}
                                    id={index + 1}
                                    title={project.title}
                                    content={project.content}
                                    img={project.img}
                                    demo={project.demo}
                                    gitHubLink={project.gitHubLink}
                                />


                            )
                        })}
                    </Suspense>

                </ul>

            </section>
            <Footer />
        </>
    )
}


export default Projects