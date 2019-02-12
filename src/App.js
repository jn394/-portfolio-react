import React, { Component } from 'react';
import './App.css';
// import {
//   Container,
//   Row,
//   Col,
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from "reactstrap";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';


// import Carousel from 'react-bootstrap/Carousel';

class App extends Component {
  state = {
    clicked: ""
  };

  render() {

    return (
      <div>
        <Navbar />
        <Jumbotron />

      </div>
    );
  }
}

export default App;