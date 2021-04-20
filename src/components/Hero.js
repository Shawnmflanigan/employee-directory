import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./Hero.css";

const Hero = () => {
    return (
<Jumbotron style={{
  backgroundImage:  "url(/employees.jpeg)",}}>
  <Container>
    <h1>Your Company .inc</h1>
    <p>
      A comprehensive employee directory.
    </p>
  </Container>
</Jumbotron>
    )};

export default Hero;