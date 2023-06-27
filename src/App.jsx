import React, { Component } from 'react';
import NavBar from './topnavber';
import { Routes ,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Copyrights from './Copyrights';
import Contact from './Contact';
//import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import'./navbar.css'

import'./Signup.css';
import'./login.css';
import'./Copyrights.css';
import './contact.css';

class App extends Component {
    state = {}
    render() {
        return (
<div>
<NavBar/>
          <Routes>
          <Route path='/signin' element={<Login/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/contact' element={<Contact/>} />
        
          </Routes>
<footer><Copyrights/></footer>
</div>
);
}
    }

    export default App;