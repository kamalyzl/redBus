import React, { Component } from 'react'
import Header from './Header';
import Informative from './Informative';
import InternetBanking from './InternetBanking';
import PayCash from './PayCash';
import Footer from './Footer';

import '../css/ed-grid.min.css'
import '../css/main.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {

  click = event => {
    let label = event.target;
    label.classList.toggle('w3-red');
    console.log(event.target.siblings);
    console.log(event.target);

  };
  render() {
    return (
      <Router>
        <div>
          <div >
            <Route path='/' component={Header} />
          </div>
          <div>
            <ul className="ed-container select">
              <li><Link to='/' onClick={this.click} > Banca por internet | </Link></li> 
              <li><Link to='/PayCash'>Pagar en efectivo</Link></li>
            </ul>
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
