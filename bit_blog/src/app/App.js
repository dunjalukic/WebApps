import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './partials/Header'
import Footer from './partials/Footer'
import AboutPage from './about/AboutPage'
import HomePage from './home/HomePage'
import AuthorsPage from './authors/AuthorsPage'
import AuthorDetailsPage from './authorDetails/AuthorDetailsPage'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App" className="container">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/authors' component={AuthorsPage} />
          <Route path='/authors/:id' component={AuthorDetailsPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;





