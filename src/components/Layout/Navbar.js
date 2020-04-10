import React,{ Component } from "react";
import Facebook from "../Signup Component/Facebook"
import Google from '../Signup Component/Google';

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <h3 style={{color:"white"}}>Movie-Adda</h3>
                    <Facebook />
                    <Google />
                </nav>
            </div>
        )
    }
}

export default Navbar