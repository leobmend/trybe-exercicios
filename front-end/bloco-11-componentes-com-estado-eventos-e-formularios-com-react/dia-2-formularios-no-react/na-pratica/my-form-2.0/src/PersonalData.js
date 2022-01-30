import React from 'react';
import PropTypes from 'prop-types';

class PersonalData extends React.Component {
  render() {
    const { name, email, cpf, handleChange } = this.props;

    const nameError = name.length > 40;
    const emailError = email.length > 50;
    const cpfError = cpf.length !== 11 && cpf.length !== 0;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label>
          Nome Completo:
          <input type="text" name="name" value={name} onChange={handleChange} />
          <span>{nameError ? 'Máximo de 40 caracteres!' : ''}</span>
        </label>
        <label>
          E-mail:
          <input type="text" name="email" value={email} onChange={handleChange} />
          <span>{emailError ? 'Máximo de 50 caracteres!' : ''}</span>
        </label>
        <label>
          CPF:
          <input type="number" name="cpf" value={cpf} onChange={handleChange} />
          <span>{cpfError ? 'Digite os 11 caracteres numéricos!' : ''}</span>
        </label>
      </fieldset>
    )
  }
}

PersonalData.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,

  handleChange: PropTypes.func.isRequired,
}

export default PersonalData;