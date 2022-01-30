import React from 'react';

class Input extends React.Component {
  render() {
    const { maxLength, label, type, name, value, handleChange } = this.props;

    let error;
    if (String(value).length > maxLength) {
      error = true;
    }

    return (
      <label>
        {label}:
        <input 
          type={type} 
          name={name} 
          value={value} 
          onChange={handleChange} 
        />
        <span style={{display: error ? 'block' : 'none'}}>
          {`Máximo de ${maxLength} caracteres!`}
        </span>
      </label>

    )
  }
}

export default Input;