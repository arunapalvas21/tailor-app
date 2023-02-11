import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons'


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import './App.css';

class App extends Component {
  render() {
    return (
      // <Router>
        <div className="App">
            <Navbar />
            <Landing />
            {/* <Route exact path="/" component={Landing} /> */}
            <Footer />
        </div>
      // </Router>
    );
  };
};

export default App;