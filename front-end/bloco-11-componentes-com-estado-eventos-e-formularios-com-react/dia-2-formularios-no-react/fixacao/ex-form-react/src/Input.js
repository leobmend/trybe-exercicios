import React from 'react';

class Input extends React.Component {
  render() {
    const { label, type, name, value, handleChange } = this.props;

    return (
      <label>
        {label}:
        <input type={type} name={name} value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default Input;