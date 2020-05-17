import React,{ Component } from "react";
import {Button,Modal} from 'react-bootstrap';
import Facebook from "../Oauth/Facebook";
import Google from "../Oauth/Google";
import{login} from "../../actions/authActions";
import {connect} from "react-redux";

class LoginModal extends Component{

    constructor(){
        super();
        this.state={
            show : false,
            email:"",
            password:""
        }
    }

    handleModal(){
        this.setState({
            show:true
        })
    }
    closebutton(){
        this.setState({
            show:false
        })
    }
    handleEmailchange(event){
        this.setState({
            email:event.target.value
        },console.log(this.state)
        )
    }
    handlePasswordchange(event){
        this.setState({
            password:event.target.value
        },console.log(this.state)
        )
    }
    handleSubmit(){
        const{email,password} = this.state;
        this.props.login({email,password});

    }
    // handleconsole(){
    //     console.log(this.props.isAuthenticated,this.props.user)
    // }


    render(){
        return(
            <div>
                <Button onClick={()=>this.handleModal()} id="Login">
                    GET-IN
                </Button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        <h2><b>Login</b></h2>
                    </Modal.Header>
                    <Modal.Body>
                        <Facebook /> <br></br>
                        <Google />
                        <br></br>
                        <h3><b>Name :</b></h3>
                        <input type='text' placeholder="Enter Your Email" onChange={(event)=>{this.handleEmailchange(event)}}></input><br></br>
                        <hr></hr>
                        <h3><b>Password :</b></h3>
                        <input type='password' placeholder="Enter Your password"onChange={(event)=>{this.handlePasswordchange(event)}}></input>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.closebutton()}>Close</Button>
                        <Button onClick={()=>{this.handleSubmit()}}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapstatetoprops = state =>{
    return {
       isAuthenticated: state.auth.isAuthenticated,
       user:state.auth.user
    }
      
    }

export default connect(mapstatetoprops,{login}) (LoginModal);