import React, { Component } from 'react';
import Header from './components/Header';
import Grapho from './components/Grapho';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grapho />
        <Footer />
      </div>
    );
  }
}

export default App;