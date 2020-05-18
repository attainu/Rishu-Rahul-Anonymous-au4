import React,{ Component } from "react";
import Navbar from "../Layout/Navbar";
import SignupModal from "../Home/SingupModal";
import LoginModal from "../Home/LoginModal";
import axios from 'axios'
import Footer from "../Layout/Footer"

class Landing extends Component{
    componentDidMount(){
        axios.get("http://localhost:3000/movie/all")
        .then(res=>
            console.log(res)
        )

    }
    
    render(){
        return(
            <div id="Main">
                <Navbar />
                <div id="belowNavbar">
                    <div className="para">
                    <h2> Welcome to Anonymous Video App </h2>
                 <h4>Join Prime to watch the latest movies, TV shows and award-<br></br>winning Amazon Originals</h4><br></br><br></br><br></br><br></br>
                 <h4>Join and Enjoy The Journey</h4><br></br><br></br>
                 <SignupModal />
                    </div>
                </div>
                <div id="middle">
                <div className="para2">
                    <h2> One membership, many benefits </h2>
                 <h4>Your Prime membership now also includes ad-free music along with unlimited free,<br></br>fast delivery on eligible items, exclusive access to deals & more.</h4><br></br><br></br><br></br><br></br>
                 <h4>Get In The Cave...</h4><br></br><br></br>
                 </div>
                 
                 <LoginModal />
                
 
                </div>
                <div id="info">
                    <Footer />
                </div>

            </div>
        )
    }
}


export default Landing;