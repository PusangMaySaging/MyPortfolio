import React, {useEffect,useRef}from 'react';
function Header(props) {
    let headerRef = useRef()
    useEffect(()=>{
       
        function checkIfScrolling(){
        
             
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
        </header>
    );
}

export default Header;