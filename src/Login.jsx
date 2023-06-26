import React, { Component } from 'react';
import username from './img/username.png';
import password from './img/password.png';
import Joi from "joi-browser";
import { NavLink } from 'react-router-dom';



class Login extends Component {
  
    state = {
        username:"",
        password:"",
        errors:{}     
    }
    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
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
    <div className='pagelogin'>
    <form onSubmit={this.handleSubmit}
    className="login form-inline my-2 my-lg-0">
    <font className='signin'>Sign - In - Ourshop</font>

        <div className='box mb-2'>
            <img className='username' ref={username} src={username} alt="username"></img>
        <input id='tx' 
        onChange={this.handleChange}
        name='username'
        className="form-control" 
        type="text" 
        placeholder="Enter your Email or Phone" 
        aria-label="Enter your Email or Phone" />
        </div>
        {this.state.errors.username && (
        <span className='showError'>{this.state.errors.username}</span>
        )}
        <font ><a className='forgot' href="*">Forgot your password</a></font>
        <div className='box mb-2'>
       <img className='password' src={password} alt="password"></img>
        <input 
        onChange={this.handleChange}
        name='password'
        id='tx' 
        className="form-control" 
        type="Password" 
        placeholder="Enter your Password" 
        aria-label="Enter your Password" />
        </div>
        {this.state.errors.password && (
        <div className='showError'>{this.state.errors.password}</div>
        )}
        <div className='remm'>
        <input className='mr-1' type='checkbox' id='rememberme' /><label className='label' htmlFor="rememberme">Remember me</label>
        </div>
        <button class="btn my-2 my-sm-0" type="submit">Sing in</button>
        <div className='new'>New Ourshop Account?</div>
     <NavLink ></NavLink>
     <NavLink className="newaccount" to = { "/Signup" } > Creacte new Ourshop account  </NavLink>  
    </form>
        </div> );
    }
}
 
export default Login;