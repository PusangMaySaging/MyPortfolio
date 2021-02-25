import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
import { useInViewEffect} from 'react-hook-inview'
import PWA from "../Assets/images/PWA.png"
import CodeBox from "../Assets/images/CodeBox.PNG"


function Projects(props) {

    let projectTitleText = useRef();
    let card1 = useRef();
    let card2 = useRef();
    const timeLine = gsap.timeline().pause();
    useEffect(()=>{
        timeLine.fromTo(projectTitleText.current,{opacity:0, y: 70},{opacity:1,y:0, duration: 0.5,ease:"Power2.easeOut"})
        timeLine.fromTo(card1.current,{opacity:0,x:-70},{opacity:1,x:0,duration:0.5,ease:"Power2.easeOut"})
        timeLine.fromTo(card2.current,{opacity:0,x:70},{opacity:1,x:0,duration:0.5,ease:"Power2.easeOut"})
    },[ ])

    const projectsSection  = useInViewEffect(([entry],observer)=>{
        if(entry.isIntersecting){
            timeLine.play()
            observer.unobserve(entry.target);
        }
    },{threshold : 0.0})



    return (
        <div className="projects" ref={projectsSection} id="project">
            <div className="projects-wrapper">
            <div className="project-title">
                <span ref={projectTitleText}>Projects</span>
            </div>
            <div  ref={card1} className="project-lists">
                <div className="project-list project1">
                <div className="project-img">
                    <img src={PWA} alt="PWA PROJECT"></img>
                </div>
                <div className="project-description">
                    <div className="title">
                        <span>Campus Contact Tracing PWA</span>
                    </div>
                    <div className="subtitle">
                       <span> A Progressive Web Application developed using MERN stack with Twilio Verify API. </span>
                    </div>
                    <div className="sub-subtitle">
                    <span>This PWA was made for school campuses. By Scanning their QR code, Filling up forms is no longer required 
                     and avoid queue during this pandemic. The school can easily monitor students around campus while student 
                     can view their travel logs and reports unknown activities.  
                     </span>
                    </div>
                    <div className="CTA">
                    <section  className="cta-sections">
            <div className="cta cta-projects">
                <span><a className="blk" href="https://github.com/PusangMaySaging/ContactTracing" target="_blank">Repository</a></span>
            </div>
            <div className="cta cta-about">
             <span><a className="wh" href="https://campus-contact-tracing.herokuapp.com/" target="_blank">View Project</a></span>
            </div>
            </section>
                    </div>
                </div>
                </div>
                <div ref={card2} className="project-list project1">
                <div className="project-img">
                    <img src={CodeBox} alt="PWA PROJECT"></img>
                </div>
                <div className="project-description">
                    <div className="title">
                        <span>CodeBox</span>
                    </div>
                    <div className="subtitle">
                       <span> A Web Application Developed using PHP and MySQL with CodeFlask Micro Editor. </span>
                    </div>
                    <div className="sub-subtitle">
                    <span>CodeBox is made for people or students who doesn’t know how to use git or github. 
                        Instead of sending your friends text file of your code.  Just paste your code and send it the link. They can easily view and put in their machine. 
                     </span>
                    </div>
                    <div className="CTA">
                    <section  className="cta-sections">
            <div className="cta cta-projects">
                <span><a className="blk" href="https://github.com/PusangMaySaging/codebox" target="_blank">Repository</a></span>
            </div>
            <div className="cta cta-about">
             <span><a className="wh" href="https://codeboxsave.herokuapp.com/views/home.html" target="_blank">View Project</a></span>
            </div>
            </section>
                    </div>
                </div>
                </div>    

            </div>
            </div>
        </div>
    );
}


export default Projects 