import React,{useRef, useEffect} from 'react';
import gsap from 'gsap'
import {BiHappyBeaming} from 'react-icons/bi'
import {RiEmotionUnhappyLine} from 'react-icons/ri'
import {IconContext} from 'react-icons'



function Modal(props) {
    let messageRef = useRef()

    const timeLine = gsap.timeline().pause()
    useEffect(()=>{
        timeLine.from(messageRef.current,{y:-50,height:"0vh"})
    },[])
    useEffect(()=>{
        let DELAY = 0;
        if(props.messageState.message === "NO_ERROR"){
            DELAY = 3; //seconds
        }
        else{
            DELAY = 5 //seconds
        }
        timeLine.to(messageRef.current,{y:0,height:"10vh"})
        timeLine.to(messageRef.current,{y:-50,height:"0vh"},`+=${DELAY}`)
        if(props.messageState.isAnimate){
            timeLine.play()
        }
        
    },[props.messageState])

    return (
        <div className="modal">
            <div className="modal-message" ref={messageRef}>

            <Message messageState={props.messageState}></Message>
               
            </div>
        </div>
    );
}
function Message(props){
  
    let emailRef = useRef()
    function copyText(){
       emailRef.current.select();
        document.execCommand("COPY")
        console.log("COPIED")
    }

    if(props.messageState.message === "NO_ERROR"){
    return (
        <>
        <IconContext.Provider value={{  className: "icon-modal happy" }}>
        <BiHappyBeaming />
        </IconContext.Provider>
       
      <span className="modal-text">Great! I am looking forward working with you. I will get back to you as soon as possible.</span>
      </>
    )
    }
    else{
        
        return(<>
        <IconContext.Provider value={{  className: "icon-modal sad" }}>
        <RiEmotionUnhappyLine></RiEmotionUnhappyLine>
        </IconContext.Provider>
        <input  ref={emailRef}  type="text" aria-hidden="true" defaultValue="ryanali.developer@gmail.com"/>
      <span className="modal-text">Ooops! Something bad happened. I am deeply sorry for the inconvenience. You can still contact me through email. <span className ="copy" onClick={copyText}>Click to copy my email</span></span>
      </>
        )
    }
}
export default Modal;