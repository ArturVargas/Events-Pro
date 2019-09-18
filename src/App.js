import React from 'react';
//import logo from './logo.svg';
import './App.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';

const items = {
   home: 'Home',
   login: 'Login',
   register: 'Register'
}

function App() {
  return (
    <div className="App">
     <Navbar items={items}/>
     <Home />
    </div>
  );
}

export default App;
