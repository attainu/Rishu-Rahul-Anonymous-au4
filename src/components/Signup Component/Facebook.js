import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'; 

export default class Signup extends Component {

    state ={
        isLoggedIn : false,
        userId:"",
        name :"",
        email:"",
        picture:""
    }

    responseFacebook = (res) =>{
        console.log(res);
        
        this.setState({
            isLoggedIn : true,
            userId:res.userId,
            name:res.name,
            email:res.email,
            picture:res.picture.data.url
        })
        
    }

    componentClicked =() =>{
        console.log("clicked");
    }

    render() {
        let fbcontent;
        if(this.state.isLoggedIn){
            fbcontent = (
                <div  id ="fb" style={{
                    width:'300px',
                    background:'#00000',
                    padding:'10px'
                }}>
                    {/* <img src={this.state.picture} alt={this.state.name}></img> */}
                    <h2>Welcome {this.state.name}</h2>
                    Email:{this.state.email}
                </div>
            );
        }else{
            fbcontent = (
                <FacebookLogin
                    appId="657545351742846"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            )
        }
        return (
            <div>
                {fbcontent}
            </div>
        )
    }
}