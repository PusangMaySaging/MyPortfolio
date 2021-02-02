import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
import { useInViewEffect} from 'react-hook-inview'
function About(props) {
    

    let abouTitleText = useRef();
    let aboutDesc = useRef();
    const timeLine = gsap.timeline().pause();
    useEffect(()=>{
        timeLine.fromTo(abouTitleText.current,{opacity:0, y: 70},{opacity:1,y:0, duration: 0.5,ease:"Power2.easeOut"})
        timeLine.fromTo(aboutDesc.current,{opacity:0,y:70},{opacity:1,y:0,duration:0.5,ease:"Power2.easeOut"})
    },[ ])
    const aboutSection  = useInViewEffect(([entry],observer)=>{
        if(entry.isIntersecting){
            timeLine.play()
            observer.unobserve(entry.target);
        }
    },{threshold : 0.5})


    return (
        <div className="about" ref={aboutSection} id="about">
            <div className="about-wrapper">
                <div className="about-title" 
                ref={abouTitleText}>
                    <span>My Journey</span>
                </div>
                <div className="about-desc" 
                ref={aboutDesc}>
                    <span className="about-desc-text">Hello, <b>I am Ryan Ali.</b> A full stack web developer based on the Philippines. <br/><br/>I am pursuing my degree as a Sophomore at <b>STI College Munoz Edsa</b>. 
                    I am immersed in web development and passionate in developing web applications. My interest started in 2019 and develop some projects during my spare time.</span>
                    <br/>
                    <br/>
                    <span className="about-desc-text">Here are some technologies I have been working with:</span>
                    <div className="technologies-list">
                        <li>Node JS</li>
                        <li>MongoDb</li>
                        <li>React JS</li>
                        <li>HTML & CSS</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                    </div>
                    <br/>
                    <span className="PS">
                    P.S.  If you want to talk other things beside programming like why Breaking Bad is the best TV show, talk about cats etc. Just send me a message.
                    </span>
                </div>
               
            </div>
        </div>
    );
}

export default About;