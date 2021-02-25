import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
import { BiHomeSmile,BiMailSend } from "react-icons/bi";
import {AiOutlineInfoCircle,AiOutlineProject } from "react-icons/ai";
import { IconContext } from "react-icons";

function MobileNavigation(props) {


   let floatingNav = useRef();
    let scrollRef = useRef("DOWN")

    useEffect(()=>{
      
        let lastScrollTop = 0;
        function handleScroll(){
            
           let st = window.pageYOffset || document.documentElement.scrollTop; 
           if (st > lastScrollTop){
            //condition to execute animation one at a time
            if(scrollRef.current !== "UP")
              gsap.to(floatingNav.current,{y:50,height:0,duration:0.2,ease:"Power2.easeOut"})
              scrollRef.current = "UP"   
           } else {
            //condition to execute animation one at a time
            if(scrollRef.current !== "DOWN"){
            gsap.to(floatingNav.current,{y:0,height:"10vh",duration:0.2,ease:"Power2.easeOut"})
            scrollRef.current = "DOWN"
            }
            
           }
           lastScrollTop = st <= 0 ? 0 : st; 
            
        }
        window.addEventListener("scroll",handleScroll, false);
        return ()=>{
            window.removeEventListener('scroll',handleScroll,false);
        }
    })
    return (
        <div ref={floatingNav} className="mobile-nav-wrapper">
      
        <nav className="floating-navigation">
                
                <ul className="nav-links"> 
                <li className="nav-items"><a href="#home">
                <IconContext.Provider value={{  className: "icon-home link-icon-nav" }}>
                    <BiHomeSmile />
                </IconContext.Provider>
                    Top</a></li>
                <li className="nav-items"><a href="#project">
                <IconContext.Provider value={{  className: "icon-project link-icon-nav" }}>
                    <AiOutlineProject />
                </IconContext.Provider>
                    Projects
                    
                </a></li>
                <li className="nav-items"><a href="#about">
                <IconContext.Provider value={{  className: "icon-about link-icon-nav" }}>
                    <AiOutlineInfoCircle/>
                </IconContext.Provider>
                    About
                    
                </a></li>
                <li className="nav-items"><a href="#contact">
                <IconContext.Provider value={{  className: "icon-resume link-icon-nav" }}>
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