import './snow.scss'
import React, { useEffect, useRef } from 'react';
import { TweenMax, TweenLite, Linear, Sine } from 'gsap';

const PetalsAnimation = () => {
  TweenLite.set("#petals", { perspective: 600 })
  TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" })
  const warpRef = useRef(null);

  useEffect(() => {
    const warp = warpRef.current;
    const total = 50;
    const w = window.innerWidth;
    const h = window.innerHeight;

    for (let i = 0; i < total; i++) {
      const div = document.createElement('div');
      div.classList.add('dot');
      TweenLite.set(div, {
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200)
      });
      warp.appendChild(div);
      animm(div);
    }

    function animm(elm) {
      TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15
      });
      TweenMax.to(elm, R(4, 8), {
        x: '+=100',
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5
      });
    }

    function R(min, max) {
      return min + Math.random() * (max - min);
    }
  }, []);

  return <div id="petals" ref={warpRef}></div>;
};

export default PetalsAnimation;