import Nav from './components/nav/Nav'
import Projects from './pages/projects/projects'
import About from './pages/about/About';
import Contact from './pages/contact/contact';
import './styles/reset.scss';
import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import SmothScroll from './hooks/smoothScroll';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { lazy, Suspense } from 'react';
import Preloader from './components/preloader/Preloader';
// лЕНИВАЯ ЗАГРУЗКА ДЛЯ ОПТИМИЗАЦИИ 
// import PetalsAnimation from './components/snow/snow';
const Home = lazy(() => import('./pages/home/Home'))



function App() {
  const containerRef = useRef(null)

  return (
    <>
      {/* <PetalsAnimation/> */}

      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
            smartphone: {
              smooth: true,

            },
            tablet: {
              smooth: true,

            }
          }
        }
        watch={
          [
            
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container data-scroll-speed='4' ref={containerRef}>
          <div className=" App" id='app' ref={containerRef}>

            <Router>
              <Suspense fallback={<Preloader />}>
                {/*  SUSPENSE ДЛЯ ТОГО ЧТОБЫ ПРИ ПЕРЕХОДЕ БЫЛ ПРЕЛОАДЕР, ЧТОБЫ ПОЛЬЗОВАТЕЛЬ НЕ ВИДЕЛ ПРОСТО ЧЕРНЫЙ ЭКРАН */}
                <AnimatePresence>
                  {/* РОУТИНГ */}
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About /> } />
                    <Route path='contact' element={<Contact />} />
                    <Route path='projects' element={<Projects />} />
                  </Routes>
                </AnimatePresence>

              </Suspense>
              <Nav />

            </Router>


          </div>
        </main>

      </LocomotiveScrollProvider>
    </>













  );

}

export default App;
