import React,{ Component } from "react";
import Navbar from "../Layout/Navbar";
import SignupModal from "../Home/SingupModal";
import LoginModal from "../Home/LoginModal";
import axios from 'axios'
import './my.css'
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

                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed By:
                        <br></br>
                        <span className="text-warning font-weight-normal">
                            <a href="https://www.linkedin.com/in/rishu-raj-308263172/" target='_blank'>
                            Rishu Raj
                            </a><br></br>
                            <a>Rahul Chawla</a>
                        </span>
                    </div>
                </div>

            </div>

            </div>
        )
    }
}


export default Landing;