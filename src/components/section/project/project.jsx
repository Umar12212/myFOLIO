import { Fade } from "react-reveal";


const Project = ({ id, title, img, content, gitHubLink, demo }) => {
    return (
        <div className="prpjects__item">
            <Fade bottom cascade>
                <div className="image ">
                    <div className="number"><span>{id}</span></div>
                    <img className='item__img' src={img} alt="" />
                </div>
            </Fade>
            <Fade bottom cascade>
                <div className="menu__text ">
                    <h2 className="item__title">{title}</h2>
                    <p className="item__text">{content}</p>
                    <div className="item__link">

                        <button className='btn source'><a href={gitHubLink} target="_blank">Source</a> <i className="fa-brands fa-github"></i></button>
                        <h2 id='succes' style={{ display: 'none', color: '#25e000', fontSize: '30px', marginBottom: '15px', }}>Сообщения отправленно !</h2>
                        <button className='btn demo'><a href={demo} target="_blank">Demo</a><i className="fa-solid fa-link"></i></button>
                    </div>
                </div>
            </Fade>

        </div>

    );
}

export default Project;