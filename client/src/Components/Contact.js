import React,{useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import { useInViewEffect} from 'react-hook-inview'
import axios from 'axios'
function Contact(props) {

    const timeLine = gsap.timeline().pause()

    const [email,setEmail] = useState({
        senderName: ' ',
        senderEmail: ' ', 
        senderMessage: ' '
    })

    let contactTitle = useRef();
    let contactForm = useRef();
    
    useEffect(()=>{
        timeLine.fromTo(contactTitle.current,{opacity:0,x:-70},{opacity:1,x:0,duration:0.5, ease:"Power2.easeOut"})
        timeLine.fromTo(contactForm.current,{opacity:0,x:70},{opacity:1,x:0,duration:0.5, ease:"Power2.easeOut"})
    },[ ])


    const contactSection = useInViewEffect(([entry],observer)=>{
        if(entry.isIntersecting){
            timeLine.play();
            observer.unobserve(entry.target);
        }
    },{threshold:0.5})
    
    function handleEmailInputs(e){
        const {name,value} = e.target;
        setEmail(prevState=>({
            ...prevState,
            [name]:value
        }))
       
    }
    function handleSubmitForm(e){
        e.preventDefault()
     
        axios.post('https://ryan-ali.herokuapp.com/email',email, {headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "https://ryan-ali.herokuapp.com"
       }}).then(resp=>{
           if(resp.status === 201){
            e.target.reset();
            props.changeMessageState({
                message:"NO_ERROR",
                isAnimate:true
            })
           }    
           else{
            props.changeMessageState({
                message:"ERROR",
                isAnimate:true
            })
           }

       }).catch(err=>{
        props.changeMessageState({
            message:"ERROR",
            isAnimate:true
        })
       });
       
    }

    return (
        <div className="contact" ref={contactSection} id="contact">
             <div className="contact-wrapper">
                <div className="contact-title"
                 ref={
                    contactTitle
                }>
                    <span>Let's Work Together</span>
                </div>
                <div className="contact-form-wrapper" 
                ref={
                    contactForm}>
                    <form className="contact-form" onSubmit={handleSubmitForm}> 
            <div className="form-wrapper">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="senderName" className="input input-name" onChange={handleEmailInputs} required></input>
            </div>
            <div className="form-wrapper">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="senderEmail" className="input input-email" onChange={handleEmailInputs} required></input>
            </div>
            <div className="form-wrapper">
                <label htmlFor="message">Your message</label>
                <textarea name="senderMessage" className="message-box" onChange={handleEmailInputs} required></textarea>
            </div>
            <div className="btn">
                <button type="submit" className="btn btn-send">Send</button>
            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;