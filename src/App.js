import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Content/navbar';
import Slider from './Content/slider';
import Content from './Content/content';
import './App.css'; 

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Route path="/" component={Content} />
      </React.Fragment>
    );
  }
}

export default App;