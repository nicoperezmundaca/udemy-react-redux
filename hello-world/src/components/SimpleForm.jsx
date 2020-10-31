import React, { Component } from 'react';

export default class SimpleForm extends Component {
  handleChange = ({ target }) => {
    const {name, value} = target;
    console.log(name, value);
  }

  render() {
    return(
      <form>
        <input name="firstname" onChange={this.handleChange} />
        <input name="lastname" onChange={this.handleChange} />
      </form>
    )
  }
}