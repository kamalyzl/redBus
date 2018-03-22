import React, { Component } from 'react'
import Header from './Header';
import Informative from './Informative';
import InternetBanking from './InternetBanking';
import PayCash from './PayCash';
import Footer from './Footer';

import '../css/ed-grid.min.css'
import '../css/main.css'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div >
            <Route path='/' component={Header} />
          </div>
          <div>
            <ul className="ed-container select">
              <li><NavLink to='/' exact activeClassName='active' className='linkNav'> Banca por internet   </NavLink></li> 
              <li><NavLink to='/PayCash' activeClassName='active' className='linkNav'>Pagar en efectivo</NavLink></li>
            </ul>
            <hr className="ed-container"/>
            <Route path='/' component={Informative} />
            <Route path='/' exact={true} component={InternetBanking} />
            <Route path='/PayCash' component={PayCash} />
            <Route path='/' component={Footer} />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {

}

App.defaultProps = {
  
}
export default App;
