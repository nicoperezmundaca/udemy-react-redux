import React, { Component } from 'react';

import Header from "../../components/Header";
import P from '../../components/P';
import SimpleForm from '../../components/SimpleForm';

class Formulario extends Component {
  render() {
    return (
      <div className="formulario">
        <SimpleForm />
      </div>
    );
  }
}

export default Formulario;