import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons'


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/userauth/Register';
import Login from './components/userauth/Login';
import Admin from './components/adminauth/Admin';
import AdminRegister from './components/adminauth/Register';
import AdminLogin from './components/adminauth/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
            <div className='container'>
              <Routes>
                <Route path="/register" element={ <Register /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/admin" element={ <Admin /> } />
                <Route path="/admin-register" element={ <AdminRegister /> } />
                <Route path="/admin-login" element={ <AdminLogin /> } />
              </Routes>
            </div>
            <Footer />
        </div>
       </Router>
    );
  }
}

export default App;