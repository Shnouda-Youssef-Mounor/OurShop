import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import './navbar.css'
class NavBar extends Component {
    state = {}
    render() {
        return ( 
    <div className='pageNavbar position-absolute'>

    <nav className="navbar navbar-expand-lg navbar-light">
    
  <font   className="navbar" href="#">OurShop</font>
 
  <div className="nav">
    <ul className="show navbar-nav float-start">
      <li className="nav-item">
      <NavLink className="nav-link text-white" to = { "/Signin" } > Sing in</NavLink>  
      </li>
      <li className="nav-item ">
      <NavLink className="nav-link text-white" to = { "/Signup" } > Sing up </NavLink>  
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link text-white" to = { "/contact" } > Contact Us </NavLink>  
      </li>
    </ul>
  </div>

</nav>
<nav className="nav-bar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar_nav">
      <NavLink className="navitem" >Home</NavLink>
      <NavLink className="navitem" >Laptop and PC</NavLink>
      <NavLink className="navitem" >Mobiles</NavLink>
    </div>
  </div>
</nav>
</div>




        );
    }
}

export default NavBar;