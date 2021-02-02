import React from 'react';
import {AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import {FaFacebook} from "react-icons/fa";

function Footer(props) {
    return (
        <footer>
               <section className="footer-text"><span>Design and Created by <b>Ryan Ali</b>❤️</span></section>
               <section className="account-links">
                   <div className="link-icon">
                   <IconContext.Provider value={{  className: "icon-github" }}>
                   <a href="https://github.com/pusangMaySaging" target="_blank">
                <span>
                    <AiFillGithub />
                    </span>
                    </a>
                </IconContext.Provider>
                   </div>
                   <div className="link-icon">
                   <IconContext.Provider value={{  className: "icon-fb" }}>
                   <a href="https://www.facebook.com/ryanali23" target="_blank">
                <span>
                    <FaFacebook />
                    </span>
                    </a>
                </IconContext.Provider>
                   </div>
               </section>
       </footer>
    );
}

export default Footer;