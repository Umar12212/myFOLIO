import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react"
import 'locomotive-scroll/dist/locomotive-scroll.css'

function SmothScroll (start){
    useEffect(()=>{
        if(!start) return;

        const scrollEl = document.querySelector('#app');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1.5,
            class: 'is-reveal'
        }) 
    }, [start])


}

export default SmothScroll