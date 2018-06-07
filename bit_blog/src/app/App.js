import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './partials/Header'
import Footer from './partials/Footer'
import AboutPage from './about/AboutPage'
import HomePage from './home/HomePage'
import AuthorsPage from './authors/AuthorsPage'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App" className="container">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/authors' component={AuthorsPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;










// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
