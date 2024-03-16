import { Fade } from "react-reveal"

const Card = () => {
    return (
        <>
            <div className="contact__menu">
                <Fade left cascade>
                    <div className="menu_left">
                        <Fade left casade>
                            <div className="menu__item">
                                <a href='tel:+998936744994' className="item_icon">
                                    <i className="fa-solid fa-phone icon" ></i>
                                </a>
                                <div className="item_content">
                                    <div className="content__title">Phone Number</div>
                                    <div className="content_subtitle">+99893 674 49 94</div>
                                </div>
                            </div>
                        </Fade>

                        <Fade left >
                            <div className="menu__item">
                                <a href='https://github.com/Umar12212' target="_blank" className="item_icon">
                                    <i className="fa-brands fa-github icon"></i>
                                </a>
                                <div className="item_content">
                                    <div className="content__title">GitHub</div>
                                    <div className="content_subtitle">@Umar12212</div>
                                </div>
                            </div>
                        </Fade>
                        <Fade left >
                            <div className="menu__item">
                                <a href='https://www.instagram.com/scroll_privacy/' target="_blank" className="item_icon">
                                    <i className="fa-brands fa-instagram icon"></i>
                                </a>
                                <div className="item_content">
                                    <div className="content__title">Instagram</div>
                                    <div className="content_subtitle">@scroll_privacy</div>
                                </div>
                            </div>
                        </Fade>

                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="menu_right">
                        <Fade right >
                            <div className="menu__item">
                                <a href='mailto:ymarumar502@gmail.com' target="_blank" className="item_icon">
                                    <i className="fa-solid fa-envelope icon"></i>
                                </a>
                                <div className="item_content">
                                    <div className="content__title">Email</div>
                                    <div className="content_subtitle">ymarumar502@gmail.com</div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right >
                            <div className="menu__item">
                                <a href='https://t.me/scroll_be' target="_blank" className="item_icon">
                                    <i className="fa-brands fa-telegram icon"></i>
                                </a>
                                <div className="item_content">
                                    <div className="content__title">Telegram</div>
                                    <div className="content_subtitle">@scroll_be</div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right >
                            <div className="menu__item">
                                <a href='#!' target="_blank" className="item_icon">
                                    <i className="fa-brands fa-vk icon"></i>
                                </a>
                                <div className="item_content">
                                    <div className="content__title">Wk</div>
                                    <div className="content_subtitle">@scroll_Be</div>
                                </div>
                            </div>
                        </Fade>

                    </div>
                </Fade>

            </div>
        </>
    )
}


export default Card