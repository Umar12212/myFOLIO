import './btn-nav.scss'
import './nav.scss'


import Logo from './../../img/Logo.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import MusVolume from './view_icon_volume/Icon_volume'
import View_snow from '../snow/view_snow/View'

const Nav = () => {
    const [nav, setNav] = useState(false)
    


    return (
        <>
        
            {/* Ниже идет анимация компонентов и тд */}
            <motion.div className={`header ${nav ? "avtive" : "active"}`}
                drag='y'
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                }}
                dragElastic={0.05}
                dragSnapToOrigin

            >
                <div className="header__logo">

                    <img src={Logo} alt="" className={`img-nav ${nav ? 'img-nav' : 'active'}`} />

                </div>
                <div className="navbar">
                    <ul className="navbar__menu">

                        <li className="navbar__item nav__icon" >

                            <MusVolume/>  {/* В этом компоненте проходит проверка, если открыта главная страница то не отображать иконку звука, иначе отображать */}
                            <View_snow/>
                        </li>
                        <li className="navbar__item">
                            <NavLink onClick={()=> setNav(false)} to='/' className="navbar__link">
                                <i data-feather="home"></i><span>Home</span>
                            </NavLink> {/* марширутизация */}
                        </li>
                        <li className="navbar__item">
                            <NavLink onClick={() => setNav(false)} to='projects' className="navbar__link">
                                <i data-feather="message-square" ></i><span>Projects</span>

                            </NavLink>

                        </li>
                        <li className="navbar__item">
                            <NavLink onClick={() => setNav(false)} to='about' className="navbar__link">
                                <i data-feather="users"></i><span>About</span>

                            </NavLink>

                        </li>
                        <li className="navbar__item">
                            <NavLink onClick={() => setNav(false)} to='contact' className="navbar__link">
                                <i data-feather="folder"></i><span>Contact</span>

                            </NavLink>

                        </li>

                        {/* <li class="navbar__item">
                        <a href="#" class="navbar__link"><i data-feather="archive"></i><span>Resources</span></a>
                    </li>
                    <li class="navbar__item">
                        <a href="#" class="navbar__link"><i data-feather="help-circle"></i><span>Help</span></a>
                    </li>
                    <li class="navbar__item">
                        <a href="#" class="navbar__link"><i data-feather="settings"></i><span>Settings</span></a>
                    </li> */}

                    </ul>
                    <motion.div className="header__btn" onClick={() => setNav(!nav)}
                        initial={{ y: '-100%', x: '-50%' }}
                        animate={{ y: '0' }}
                        transition={{
                            duration: 2, delay: 2,
                        }}
                    >Menu</motion.div>
                </div>
            </motion.div>

        </>
    )

}

export default Nav
