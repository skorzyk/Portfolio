import React, { Component } from 'react';
import '../styles/App.css';
import { HashRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <div className="navigation">{<Navigation />}</div>
          <main className="page">{<Page />}</main>
          <footer className="footer">{<Footer />}</footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
