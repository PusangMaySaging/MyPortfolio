import React from 'react';
import {AiFillGithub } from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import { IconContext } from "react-icons";


function AccountLinks(props) {
    return (
        <div className="floating-links">
            <div className="floating-icon">
            <IconContext.Provider value={{  className: "icon-github" }}>
            <a href="https://github.com/pusangMaySaging" target="_blank">
                <span>
                    <AiFillGithub />
                    </span>
                    </a>
                </IconContext.Provider>
            </div>
            <div className="floating-icon">
            <IconContext.Provider value={{  className: "icon-github" }}>
               <a href="https://www.facebook.com/ryanali23/" target="_blank">
                <span>
                    <FaFacebook />
                    </span>
                    </a>
                </IconContext.Provider>

                </div>
        </div>
    );
}

export default AccountLinks;