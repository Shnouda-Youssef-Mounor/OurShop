import React, { Component } from 'react';
import cart from './img/cart.png';
import { NavLink } from 'react-router-dom';
import Joi from "joi-browser";
class Signup extends Component {
  
    state = {
        firstname:"",
        lastname:"",
        password:"",
        retypepassword:"",
        email:"",
        errors:{}
    }
    schema = {
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).alphanum().required(),
        retypepassword: Joi.string().min(4).alphanum().required()
       
      };
    handleSubmit = e =>{
        e.preventDefault();
    
        const errors = this.validate();
    
        if (errors) return;
    
        //Call Backend
       

    }
    validate = () => {
        const errors = {};
        //Clone State
        const state = { ...this.state };
        delete state.errors;
        const res = Joi.validate(state, this.schema, { abortEarly: false });
        if (res.error === null) {
          this.setState({ errors: {} });
          return null;
        }
    
        for (const error of res.error.details) {
          errors[error.path] = error.message;
        }
    
        //Set State
        this.setState({ errors });
        return errors;
        
       
      };
      handleChange = e=>{
        let state={...this.state};
        state[e.currentTarget.name]=e.currentTarget.value;
        this.setState(state);
   }
    render() {
        return (
        <div className='pageSignup'>
         <div className='content'>
            <font className='title'>Sign up to Ourshop</font>
            <img alt='cartimg' className='cart' src={cart} ></img>         
         </div>
         <form 
          onSubmit={this.handleSubmit}
         className="signup my-2 my-lg-0" id='show' >
         <div 
         className='boxx mb-1'
         id='box'>
        <input 
        id='txs' 
        className="form-control mr-sm-1 ml-1" 
        type="text"  
        placeholder="First Name" 
        aria-label="First Name"
        name='firstname'
        onChange={this.handleChange}
        />
        {this.state.errors.firstname && (
        <font className='alert  alert-danger'>{this.state.errors.firstname}</font>
        )}
        </div>
        <div className='boxx' id='box'>
        <input 
        id='txs' 
        name='lastname'
        onChange={this.handleChange}
        className="form-control mr-sm-1 ml-1" 
        type="text" 
        placeholder="Last Name" 
        aria-label="Last Name"
        />
        {this.state.errors.lastname && (
        <font className='alert  alert-danger'>{this.state.errors.lastname}</font>
        )}
        </div>
        <div className='boxx' id='box'>
        <input 
        id='txs' 
        name='email'
        onChange={this.handleChange}
        className="form-control mr-sm-1 ml-1" 
        type="text" 
        placeholder="Email" 
        aria-label="Email"
        />
        {this.state.errors.email && (
        <font className='alert  alert-danger'>{this.state.errors.email}</font>
        )}
        </div>
        <div className='boxx mb-1' id='box'>
        <input 
        name='password'
         onChange={this.handleChange}
         id='txs' 
         className="form-control mr-sm-1 ml-1" 
        type="password"
        placeholder="Password" 
        aria-label="Password"
        />
        {this.state.errors.password && (
        <font className='alert  alert-danger'>{this.state.errors.password}</font>
        )}
        </div>
        <div className='boxx mb-1' id='box'>
        <input 
        id='txs' 
        name='repassword'
        onChange={this.handleChange}
        className="form-control mr-sm-1 ml-1" 
        type="password"
        placeholder="Retype Password" 
        aria-label="Retype Password"
        />
        {this.state.errors.retypepassword && (
        <div className='alert alert-danger'>{this.state.errors.retypepassword}</div>
        )}
        </div>
        
       <div>
        </div>
        
        <button id='btnn'class="btn ml-4" type="submit" >Sign up</button>
        <hr/>
        <div className='haveAccount'>
            <font className='text'>Already have an account?</font>
            <NavLink className="haveAnaccount" to = { "/home" } > Sign in  </NavLink>  

        </div>
    </form>
        </div>);
    }
}

export default Signup;