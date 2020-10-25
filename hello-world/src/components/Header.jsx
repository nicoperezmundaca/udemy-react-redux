import React, { Component } from 'react';

import H1 from './H1';

import logo from '../logo.svg';

const styles = {
  header: ({ backgroundColor }) => ({
    backgroundColor,
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'calc(10px + 2vmin)',
    justifyContent: 'center',
    minHeight: '50vh'
  }),
  link: {
    color: '#61dafb'
  }
}

export default class Header extends Component {
  state = {
    backgroundColor: '#282c34'
  }

  handleClick = () => {
    const { title, handleClick } = this.props;
    handleClick(title);
  }

  changeBackgroundColor = () => {
    this.setState({ backgroundColor: '#000' })
  }

  render() {
    const { title, handleClick } = this.props;
    const { backgroundColor } = this.state;
    return (
      <header onClick={this.changeBackgroundColor} style={styles.header({ backgroundColor })}>
        <img src={logo} className="App-logo" alt="logo" />
        <H1>{title}</H1>
        <a style={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
    );
  }
}