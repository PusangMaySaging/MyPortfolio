import {useState} from 'react'
import './Assets/Stylesheets/app.css'
import './Assets/Stylesheets/header.css'
import './Assets/Stylesheets/home.css'
import './Assets/Stylesheets/footer.css'
import './Assets/Stylesheets/project.css'
import './Assets/Stylesheets/about.css'
import './Assets/Stylesheets/contact.css'
import Home from './Components/Home.js'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AccountLinks from './Components/AccountLinks'
import Project from './Components/Project'
import About from './Components/About'
import Contact from './Components/Contact'
import MobileNavigation from './Components/MobileNavigation'
import Modal from './Components/Modal'

function App() {
  const [messageState,setMessageState] = useState({message:"NO_ERROR",
  isAnimate:false
  }
);
  function changeMessageState(value){
    setMessageState(value)
  }
  return (
    <>
      <Modal messageState={messageState}></Modal>
      <Header></Header>
      <div className="portfolio-sections">
      <Home></Home>
      <AccountLinks></AccountLinks>
      <Project></Project>
      <About></About>
      <Contact changeMessageState={changeMessageState} ></Contact>
      </div>
      <MobileNavigation ></MobileNavigation>
      <Footer></Footer>
   
    </>
  );
}

export default App;
