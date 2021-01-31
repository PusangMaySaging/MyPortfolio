import React, {useEffect,useRef}from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";
import gsap from 'gsap'
function Header(props) {
    let headerRef = useRef()
    useEffect(()=>{
       
        function checkIfScrolling(){
        
                gsap.to(headerRef,{height:50,opacity:1})
               
                setTimeout(()=>{
                    gsap.to(headerRef,{height:0,opacity:0})
                },2000)
             
        }
        window.addEventListener("scroll",checkIfScrolling, false);

        return ()=>{
            window.removeEventListener("scroll",checkIfScrolling, false);
        }
    },[])

    return (
        <header ref={element=>{headerRef = element}}>
            <div className="header-title-wrapper">
                <span className="header-title">RA</span>
            </div>
            <div className="mobile-navigation">
                <nav className="mobile-nav ">
                <IconContext.Provider value={{  className: "menu-icon" }}>
                <span>
                    <BiMenuAltRight />
                    </span>
                </IconContext.Provider>
                </nav>
                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li className="nav-link"><a href="#home">Home</a></li>
                        <li className="nav-link"><a href="#about">About</a></li>
                        <li className="nav-link"><a href="#contact">Projects</a></li>
                        <li className="nav-link"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;