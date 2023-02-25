import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setUserAuthToken from './utils/setUserAuthToken';
// import setAdminAuthToken from './utils/setAdminAuthToken';
import { setCurrentUser } from './actions/userauthActions';
// import { setCurrentAdmin } from './actions/adminauthActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';  
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

//Check for User token
if(localStorage.jwtToken) {
  // Set userauth token header auth
  setUserAuthToken(localStorage.jwtToken);
  // Decode Token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
              <Navbar />
                <Route exact path="/" component={Landing} />
              <div className='container'>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/admin-register" component={AdminRegister} />
                  <Route exact path="/admin-login" component={AdminLogin} />
              </div>
              <Footer />
          </div>
       </Router>
       </Provider>
    );
  }
}

export default App;