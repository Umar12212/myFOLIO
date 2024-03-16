import './contact.scss'
import Card from '../../components/section/contactCard/Contact'
import Footer from '../../components/section/footer/footer'

import { Fade } from 'react-reveal'
import SendMessage from '../../components/sendForm/sendMessage'
const Contact = () => {


    return (
        <>

            <div id='container'>

                <div className='container' >
                    <section className="contact">
                        <div className="contact__title">
                            <Fade top cascade>
                                <h1 className="contact__title">Contact</h1>
                            </Fade>

                        </div>
                        <Card />
                     
                        <div className="forms">
                            {/* вывод компонента формы */}
                            <SendMessage />
                        </div>



                    </section>




                </div>
                <Footer />
            </div>


        </>
    )
}

export default Contact