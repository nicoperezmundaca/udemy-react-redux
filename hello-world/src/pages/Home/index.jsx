import React, { Component } from 'react';

import Header from "../../components/Header";
import P from '../../components/P';

import './Home.css';

class Home extends Component {
  state = {
    title: "Bienvenido a ReactJS",
    text: "Hola mundo"
  }

  handleClick = (text) => {
    console.log(text);
  }

  renameText = () => {
    const input = 'Holaaaaaa';
    this.setState({ text: input });
  }

  render() {
    const {title, text} = this.state;
    return (
      <div className="home">
        <Header title={title} handleClick={this.handleClick}/>
        <P onClick={this.renameText}>{text}</P>
      </div>
    );
  }
}

export default Home;