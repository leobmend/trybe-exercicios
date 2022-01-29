import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      birthYear: '',
      state: '',
      controlCheck: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
       [name]: value,
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>
          <label>
            Nome:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Ano de nascimento:
            <input type="number" name="birthYear" value={this.state.birthYear} onChange={this.handleChange}/>
          </label>
          <label>
            Estado:
            <select name="state" value={this.state.state} onChange={this.handleChange}>
              <option value=""></option>
              <option value="GO">Goiás</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="TO">Tocantins</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Dados profissionais</legend>         
          <label>
            Sabe controlar os componentes React?
            <input
              name="controlCheck"
              type="checkbox"
              checked={this.state.controlCheck}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Carregue seu currículo:
            <input type="file" />
          </label>
        </fieldset>
        </form>
    )
  }
}

export default Form;