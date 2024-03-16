import Logotipe from './../../img/Logo.svg'
import {motion} from 'framer-motion'
import s from './logo.module.scss'

const Logo = ()=>{
    return (
        <>
            <div className={s.logo}>
                <img src={Logotipe} alt="" className={s.img}/>
                <h3 className={s.logo__text}>ScrollDev</h3>
            </div>
        
        
        </>
    )
}



export default Logo 