import React,{useRef,useEffect} from 'react';
import gsap from 'gsap';
function Home(props) {

    let tagLineText = useRef();
    let greetingText = useRef();
    let descText = useRef();
    let CTA = useRef();
    
        useEffect(()=>{
            const timeLine = gsap.timeline();
            timeLine.fromTo(tagLineText,{y:-50, opacity:0},{y:0,opacity:1,ease:"Power2.easeOut",duration:0.3});
            timeLine.fromTo(greetingText,{y:50,opacity:0},{y:0,opacity:1,ease:"Power2.easeOut",duration:0.3});
            timeLine.fromTo(descText,{y:50,opacity:0},{y:0,opacity:1,ease:"Power2.easeOut", duration: 0.3},);
            timeLine.fromTo(CTA,{x:50,opacity:0},{x:0,opacity:1,ease:"Power2.easeOut",duration:0.4});

        },[])
    return (
        <div className="home-section" id="home">
        <div className="home">       
            <section 
            className="tag-line"
            ref={element=>{tagLineText= element}}
            >
                <span>I will help you get the most out of the World Wide Web.</span>
            </section>
        
           
            <div className="work-greetings-wrapper">
            <section 
            className="greetings-name"
            ref={element=>{greetingText=element}}
            >
                <span><span 
                className="light greeting">Hello, I am</span> Ryan Ali</span>
            </section>
            <section 
            className="my-work-desc"
            ref={element=>{descText=element}}
            >
                <span>Full Stack Web Developer</span>
            </section>
            </div>
            <section ref={element=>{CTA = element}} className="cta-sections">
            <div className="cta cta-projects">
                <span>See Projects</span>
            </div>
            <div className="cta cta-about">
             <span>Get in touch</span>
            </div>
            </section>
        </div>
        </div>
    );
}

export default Home;