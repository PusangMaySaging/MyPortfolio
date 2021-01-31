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
                <span>
                    <AiFillGithub />
                    </span>
                </IconContext.Provider>
                   </div>
                   <div className="link-icon">
                   <IconContext.Provider value={{  className: "icon-fb" }}>
                <span>
                    <FaFacebook />
                    </span>
                </IconContext.Provider>
                   </div>
               </section>
       </footer>
    );
}

export default Footer;