import React from 'react';
import PersonalData from './PersonalData';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      incompleteForm: true,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, cpf } = this.state;

    const errorCases = [
      (!name || name.length > 40),
      (!email || email.length > 50),
      (!cpf || cpf.length !== 11),
    ];

    const incompleteForm = errorCases.some((error) => error);
    
    this.setState({
      incompleteForm: incompleteForm,
    })

  }

  handleChange({ target }) {
    const { name } = target;
    let value = (target.type === 'checkbox') ? target.checked : target.value;

    if (name === 'name') { value = value.toUpperCase() };

    this.setState({
      [name]: value,
    }, () => this.handleError());
  }

  render() {
    const { name, email, cpf } = this.state; 
    return (
      <form>
        <h1>Formulário v2 (com React!)</h1>
        <PersonalData 
          name={name} 
          email={email} 
          cpf={cpf}
          handleChange={this.handleChange} />
      </form>
    )
  }
}

export default Form;
