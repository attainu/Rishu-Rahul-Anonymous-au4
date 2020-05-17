import React,{ Component } from "react";
import {Button,Modal} from 'react-bootstrap';
import{register} from "../../actions/authActions";
import {connect} from "react-redux";
import './my.css'
class SignupModal extends Component{

    constructor(){
        super();
        this.state={
            show : false,
            firstName: "",
            lastName:"",
            email:"",
            password:"",
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
    handleFirstNamechange(event){
        this.setState({
            firstName:event.target.value
        },console.log(this.state)
        )
    }
    handleLastNamechange(event){
        this.setState({
            lastName:event.target.value
        },console.log(this.state)
        )
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
        console.log(this.state);
        console.log(register);
        
        
        const {firstName,lastName,email,password} = this.state;
        this.props.register({firstName,lastName,email,password});
    }
    render(){
        
        return(
            <div>
                <Button onClick={()=>this.handleModal()} id="Signup">
                    Join
                </Button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                       <h2><b>Signup Form</b></h2> 
                    </Modal.Header>
                    <Modal.Body>
                        <h3><b>First-Name :</b></h3>
                        <input type='text' placeholder="Enter Your First Name" onChange={(event)=>{this.handleFirstNamechange(event)}}></input><br></br>
                        <hr></hr>
                        <h3><b>Last-Name :</b></h3>
                        <input type='text' placeholder="Enter Your Last Name" onChange={(event)=>{this.handleLastNamechange(event)}}></input><br></br>
                        <hr></hr>
                        <h3><b>Email Id :</b></h3>
                        <input type='text' placeholder="Enter Your Email" onChange={(event)=>{this.handleEmailchange(event)}}></input><br></br>
                        <hr></hr>
                        <h3><b>Password :</b></h3>
                        <input type='password' placeholder="Enter the password" onChange={(event)=>{this.handlePasswordchange(event)}}></input><br></br>
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
//   Newstate : state
return state
  
}

export default connect(mapstatetoprops, {register})(SignupModal);