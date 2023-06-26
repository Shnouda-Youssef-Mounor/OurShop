import React, { Component } from 'react';
class Copyrights extends Component {
  
    state = {
        text:"Shnouda_Youssef"     
    }

    render() { 
        return ( 
    <div className='footer'>   &copy;{this.state.text}
    </div> );
    }
}
 
export default Copyrights;