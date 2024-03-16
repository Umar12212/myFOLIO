import music from './../../music/24b0d8ed4ae4cb2.mp3'
import { useState, useEffect, useRef } from 'react'


const Music = () => {
    {/* компонент музыки и ее иконки */}
    const [volume, setVolume] = useState(false)


    const [audio, setAudio] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.volume = 0.4

            if (!audio) {
                ref.current.pause()

            } else {
                ref.current.play()
            }
        }
    }, [audio, ref])


    const handleClick = () => { setVolume(!volume) }


    const musicon = () => { setAudio(!audio) }
    return (
        <>
            <div className="volume" onClick={() => musicon()}>
                <i className={volume ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'} onClick={handleClick}></i>
                <audio src={music} ref={ref} autoPlay loop id='audio'></audio>
            </div>
        </>


    )
}

export default Music