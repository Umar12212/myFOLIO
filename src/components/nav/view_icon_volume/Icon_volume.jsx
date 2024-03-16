
// ФУНКЦИЯОНАЛ КНОПОК В НАВБАРЕ, ЕСЛИ ЛОКАЦИЯ HOME ТО НЕ ОТОБРАЖАТЬ ИКОНКУ ЗВУКА 

import { useLocation } from "react-router-dom";
import Music from "../../music_ico/music";
import View_snow from "../../snow/view_snow/View";
const MusVolume = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
        return 
    }
    else{
        return (
            <Music/>
        
        )
        
    }
    {/* если открыта страница home  то не показывать компонент <Music /> иначе показывать  */}

}

export default MusVolume