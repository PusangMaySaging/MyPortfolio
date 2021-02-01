import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
import { BiHomeSmile,BiMailSend } from "react-icons/bi";
import {AiOutlineInfoCircle,AiOutlineProject } from "react-icons/ai";
import { IconContext } from "react-icons";

function MobileNavigation(props) {

   let floatingNav = useRef()

    useEffect(()=>{
        let lastScrollTop = 0;
        function handleScroll(){
           let st = window.pageYOffset || document.documentElement.scrollTop; 
           if (st > lastScrollTop){
              gsap.to(floatingNav,{y:50,height:0,duration:0.2,ease:"Power2.easeOut"})
           } else {
            gsap.to(floatingNav,{y:0,height:"10vh",duration:0.2,ease:"Power2.easeOut"})
           }
           lastScrollTop = st <= 0 ? 0 : st; 
        }
        
        window.addEventListener("scroll",handleScroll, false);

        return ()=>{
            window.removeEventListener('scroll',handleScroll,false);
        }
    },[])
    return (
        <div ref={element=>{floatingNav = element}} className="mobile-nav-wrapper">
      
        <nav className="floating-navigation">
                
                <ul className="nav-links"> 
                <li className="nav-items"><a href="#home">
                <IconContext.Provider value={{  className: "icon-home link-icon" }}>
                    <BiHomeSmile />
                </IconContext.Provider>
                    Back</a></li>
                <li className="nav-items"><a href="#projects">
                <IconContext.Provider value={{  className: "icon-project link-icon" }}>
                    <AiOutlineProject />
                </IconContext.Provider>
                    Projects
                    
                </a></li>
                <li className="nav-items"><a href="#about">
                <IconContext.Provider value={{  className: "icon-about link-icon" }}>
                    <AiOutlineInfoCircle/>
                </IconContext.Provider>
                    About
                    
                </a></li>
                <li className="nav-items"><a href="#contact">
                <IconContext.Provider value={{  className: "icon-resume link-icon" }}>
                    <BiMailSend/>
                </IconContext.Provider>
                 Get in Touch
                </a></li>
                </ul>

        </nav>
        </div>
        
    );
}

export default MobileNavigation;