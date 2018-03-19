import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import '../../css/styles.css';
import Header from './Header';
import Informative from './Informative';
import InternetBanking from './InternetBanking';
import PayCash from './PayCash';
import Footer from './Footer';
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
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <Route path='/' component={Header} />
              </div>
              <div className='col-12'>
                <ul className='tab-menu'>
                  <li className='d-inline'>
                    <Link
                      to='/'
                      className='link-style tab w3-red'
                      onClick={this.click}
                    >
                      Banca por internet
                    </Link>
                  </li>
                  <li className='d-inline'>
                    <Link
                      to='/PayCash'
                      className='link-style tab'
                    >
                      Pagar en efectivo
                    </Link>
                  </li>
                </ul>
                <hr />
                <Route path='/' component={Informative} />
                <Route path='/' exact={true} component={InternetBanking} />
                <Route path='/PayCash' component={PayCash} />
                <Route path='/' component={Footer} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
