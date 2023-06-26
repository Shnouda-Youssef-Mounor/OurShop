import React, { Component } from 'react';
import beware from './img/R.png'
class Contact extends Component {
  state={

  }
  render() {
return (
  <div className='pg'>
<img alt='!!' className='beware' src={beware}></img>
     <font className='msg'>Our phone lines are open from 8:00 am to 12 midnight Egypt time. You can call us directly at 01277025404 to talk to our team.</font>
    </div>

);
  }
    
}

export default Contact;
