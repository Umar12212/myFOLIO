

import video from './../../video/videos.50baa1f7b2d579709a18.mp4'
import music from './../../music/music.665f06d0a999023fdfc3.mp3'



import './home.scss'
import { useRef, useState } from 'react'

const Home = () => {
    {/* Функционла кнопки на главной, такой же как и в навбаре и тот же функционал */}
    const [volume, setVolume] = useState(false)
    const handleClick = ()=>{ setVolume(!volume)}

    const myRef = useRef(null);
    const refClick = ()=>{ const myTag = myRef.current
    myTag.volume = .2
    }
    

    return (
        <section className="home" id="Home">

            <div className="home__bg">
                <div className="title">
                    <div className='title__item'>
                        <h1 className='title__text'>Vladislav dev</h1>
                        <h3 className='description'> Front-End Developer </h3>
                        <div className="volume">
                            <i className={`fa-solid fa-volume-high ${volume ? 'fa-solid fa-volume-off' : ''} `} onClick={handleClick }></i>    
                        </div>
                    </div>
                </div>

                <video src={video} className='video' autoPlay loop></video>
                <audio src={music} autoPlay loop id='audio' onClick={refClick} ref={myRef}></audio>
            
            </div>

           
        </section>
        

    );

}

export default Home