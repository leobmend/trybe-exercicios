import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      birthYear: '',
      state: '',
    }

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({
       [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <label>
          Nome:
          <input type="text" name="name" value={this.state.name} onChange={this.inputChangeHandler} />
        </label>
        <label>
          Ano de nascimento:
          <input type="number" name="birthYear" value={this.state.birthYear} onChange={this.inputChangeHandler}/>
        </label>
        <label>
          Estado:
          <select name="state">
            <option value="GO">Goiás</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="TO">Tocantins</option>
          </select>
        </label>
      </form>
    )
  }
}

export default Form;