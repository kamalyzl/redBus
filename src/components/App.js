import React, { Component } from 'react'
import Header from './Header';
import Informative from './Informative';
import InternetBanking from './InternetBanking';
import PayCash from './PayCash';
import Footer from './Footer';

import '../css/ed-grid.min.css'
import '../css/main.css'

import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <div>
        <div >
          <Header />
        </div>
        <div>
          <ul className='ed-container select'>
            <li><NavLink to='/internet' activeClassName='active' className='linkNav'> Banca por internet   </NavLink></li> 
            <li><NavLink to='/paycash' activeClassName='active' className='linkNav'>Pagar en efectivo</NavLink></li>
          </ul>
          <hr className='ed-container'/>
          <Informative/>
          <Router>
            <Route path='/internet'  component={InternetBanking} />
            <Route path='/paycash' component={PayCash} />
            <Redirect from='/' to='/internet' />
          </Router>
          <Footer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {

}

App.defaultProps = {
  
}
export default App;
