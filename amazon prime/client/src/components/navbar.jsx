import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem 
} from "mdbreact";
// import { Input } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router , Link } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false,
  searchTerm : ""
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
handleKeyPress(target) {
  if(target.charCode==13){
    console.log(this.state.searchTerm)
  } 
}

handleSearch(event){
if(event.key === "Enter"){
  console.log(this.state.searchTerm)
}
}
render() {
  return (
      <MDBNavbar   className="mb-3 shadow p-2"
        style ={{"background-color" : "#1C262D"}} expand="md">
        <MDBNavbarBrand>
          <strong className="font-weight-bolder text-white" style={{"marginLeft" : "55px"}}>Prime</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/home" className="text-white">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/movies"className="text-white">Movies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/shows" className="text-white" >Tv Shows</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem className="mr-2">
              <MDBFormInline >
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" onKeyPress={this.handleKeyPress} onChange={e => {this.setState({searchTerm : e.target.value})}} />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            <MDBNavItem className="mr-5">
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav caret>
                  <AccountCircleIcon fontSize="large" />
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;