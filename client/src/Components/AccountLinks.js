import React from 'react';
import {AiFillGithub } from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import { IconContext } from "react-icons";


function AccountLinks(props) {
    return (
        <div className="floating-links">
            <div className="floating-icon">
            <IconContext.Provider value={{  className: "icon-github" }}>
                <span>
                    <AiFillGithub />
                    </span>
                </IconContext.Provider>
            </div>
            <div className="floating-icon">
            <IconContext.Provider value={{  className: "icon-github" }}>
                <span>
                    <FaFacebook />
                    </span>
                </IconContext.Provider>
                </div>
        </div>
    );
}

export default AccountLinks;